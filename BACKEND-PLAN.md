# DealerScope Backend Implementation Plan

**Database:** Supabase (PostgreSQL)
**Authentication:** Supabase Auth
**Storage:** Supabase Storage (for scan results, exports)
**Real-time:** Supabase Realtime (for live scan updates)

---

## 📊 Database Tables

### **1. users**
Core user authentication and profile information.

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('sales_rep', 'admin')),
  company TEXT,
  territory TEXT[], -- Array of state codes or regions

  -- Subscription tier: Tier 1 (Basic), Tier 2 (Pro), Tier 3 (Enterprise)
  subscription_tier INTEGER DEFAULT 1 CHECK (subscription_tier IN (1, 2, 3)),
  subscription_status TEXT DEFAULT 'active' CHECK (subscription_status IN ('active', 'inactive', 'suspended', 'trial')),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ,

  -- Supabase Auth Integration
  auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
);

-- RLS Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth_id = auth.uid());
CREATE POLICY "Admins can view all users" ON users FOR SELECT USING (
  EXISTS (SELECT 1 FROM users WHERE auth_id = auth.uid() AND role = 'admin')
);
```

### **2. user_preferences**
User-specific settings and preferences.

```sql
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  email_digest BOOLEAN DEFAULT true,
  digest_frequency TEXT DEFAULT 'daily' CHECK (digest_frequency IN ('daily', 'weekly', 'never')),
  alert_categories TEXT[], -- Array of ProductCategory
  timezone TEXT DEFAULT 'America/Chicago',
  default_filters JSONB, -- Store FilterState as JSON
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(user_id)
);
```

### **3. dealerships**
Core dealership data and monitoring information.

**IMPORTANT:** Each dealership is uniquely identified by its **website URL** (normalized).
This ensures no duplicate tracking and enables proper merging.

```sql
CREATE TABLE dealerships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  location GEOGRAPHY(POINT, 4326), -- For geo-queries (lat/lng)

  -- UNIQUE IDENTIFIER: Website URL (normalized, e.g., 'millerhonda.com')
  website TEXT UNIQUE NOT NULL,
  website_normalized TEXT GENERATED ALWAYS AS (
    LOWER(REGEXP_REPLACE(website, '^(https?://)?(www\.)?', ''))
  ) STORED,

  phone TEXT,
  oem TEXT, -- Original Equipment Manufacturer (Honda, Toyota, etc.)

  status TEXT NOT NULL DEFAULT 'stable' CHECK (status IN (
    'active', 'changed', 'opportunity', 'scanning', 'error', 'stable',
    'duplicate', 'pending_merge', 'inactive'
  )),
  priority TEXT CHECK (priority IN ('high', 'medium', 'low')),
  notes TEXT,

  -- Merge tracking
  merged_into_id UUID REFERENCES dealerships(id) ON DELETE SET NULL,
  merged_at TIMESTAMPTZ,

  last_scan_at TIMESTAMPTZ,
  last_change_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Indexing for performance
  INDEX idx_dealerships_website (website_normalized),
  INDEX idx_dealerships_state (state),
  INDEX idx_dealerships_zip (zip_code),
  INDEX idx_dealerships_status (status),
  INDEX idx_dealerships_location USING GIST (location),

  -- Constraint: website must be unique (case-insensitive)
  CONSTRAINT unique_normalized_website UNIQUE (website_normalized)
);

-- RLS Policies
ALTER TABLE dealerships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Sales reps see territory dealerships" ON dealerships FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM users
    WHERE auth_id = auth.uid()
    AND (role = 'admin' OR state = ANY(territory))
  )
);
```

### **4. products**
Product catalog (chat tools, CRMs, etc.) for detection.

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  vendor TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'chat', 'crm', 'analytics', 'marketing', 'finance',
    'digital_retailing', 'trade_tools', 'inventory', 'site_provider', 'other'
  )),
  description TEXT,
  is_competitor BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  INDEX idx_products_category (category),
  INDEX idx_products_vendor (vendor)
);
```

### **5. product_selectors**
CSS/DOM selectors for detecting products on dealership websites.

```sql
CREATE TABLE product_selectors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  selector_type TEXT NOT NULL CHECK (selector_type IN ('css', 'xpath', 'text_pattern', 'url_pattern')),
  selector_value TEXT NOT NULL,
  confidence_weight DECIMAL(3,2) DEFAULT 1.0, -- 0.0 to 1.0
  is_active BOOLEAN DEFAULT true,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),

  INDEX idx_selectors_product (product_id)
);
```

### **6. dealership_products**
Many-to-many relationship tracking which products are on which dealerships.

```sql
CREATE TABLE dealership_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID REFERENCES dealerships(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  detected_at TIMESTAMPTZ DEFAULT NOW(),
  confidence DECIMAL(3,2) NOT NULL, -- 0.0 to 1.0
  detection_method TEXT, -- 'css_selector', 'ai_detection', 'manual'
  is_current BOOLEAN DEFAULT true,
  removed_at TIMESTAMPTZ,

  UNIQUE(dealership_id, product_id, detected_at),
  INDEX idx_dp_dealership (dealership_id),
  INDEX idx_dp_product (product_id),
  INDEX idx_dp_current (is_current)
);
```

### **7. product_changes**
Historical log of all product installations/removals.

```sql
CREATE TABLE product_changes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID REFERENCES dealerships(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  change_type TEXT NOT NULL CHECK (change_type IN ('installed', 'removed', 'replaced')),
  previous_product_id UUID REFERENCES products(id),
  confidence DECIMAL(3,2),
  notes TEXT,
  detected_by_user_id UUID REFERENCES users(id),
  timestamp TIMESTAMPTZ DEFAULT NOW(),

  INDEX idx_changes_dealership (dealership_id),
  INDEX idx_changes_timestamp (timestamp DESC),
  INDEX idx_changes_type (change_type)
);
```

### **8. scan_jobs**
Track scanning operations and their progress.

```sql
CREATE TABLE scan_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed')),
  triggered_by_user_id UUID REFERENCES users(id),
  start_time TIMESTAMPTZ DEFAULT NOW(),
  end_time TIMESTAMPTZ,
  dealerships_scanned INTEGER DEFAULT 0,
  dealerships_total INTEGER,
  changes_detected INTEGER DEFAULT 0,
  errors_encountered INTEGER DEFAULT 0,
  progress DECIMAL(5,2) DEFAULT 0, -- 0.00 to 100.00
  error_message TEXT,
  metadata JSONB, -- Store additional scan parameters

  INDEX idx_scans_status (status),
  INDEX idx_scans_user (triggered_by_user_id),
  INDEX idx_scans_time (start_time DESC)
);
```

### **9. scan_results**
Detailed results for each dealership in a scan job.

```sql
CREATE TABLE scan_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  scan_job_id UUID REFERENCES scan_jobs(id) ON DELETE CASCADE,
  dealership_id UUID REFERENCES dealerships(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('success', 'failed', 'skipped')),
  products_found INTEGER DEFAULT 0,
  changes_detected INTEGER DEFAULT 0,
  scan_duration_ms INTEGER,
  error_message TEXT,
  raw_data JSONB, -- Store HTML snippets, screenshots, etc.
  scanned_at TIMESTAMPTZ DEFAULT NOW(),

  INDEX idx_results_job (scan_job_id),
  INDEX idx_results_dealership (dealership_id)
);
```

### **10. alerts**
User notifications for important events.

```sql
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('change', 'opportunity', 'error', 'system')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  dealership_id UUID REFERENCES dealerships(id) ON DELETE SET NULL,
  product_change_id UUID REFERENCES product_changes(id) ON DELETE SET NULL,
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('high', 'medium', 'low')),
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read_at TIMESTAMPTZ,

  INDEX idx_alerts_user (user_id),
  INDEX idx_alerts_unread (user_id, is_read) WHERE is_read = false,
  INDEX idx_alerts_created (created_at DESC)
);
```

### **11. saved_reports**
User-saved search criteria and reports.

```sql
CREATE TABLE saved_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  filters JSONB NOT NULL, -- FilterState as JSON
  last_run_at TIMESTAMPTZ,
  run_count INTEGER DEFAULT 0,
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  INDEX idx_reports_user (user_id)
);
```

### **12. activity_log**
Audit trail for user actions.

```sql
CREATE TABLE activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  resource_type TEXT, -- 'dealership', 'product', 'scan', etc.
  resource_id UUID,
  metadata JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),

  INDEX idx_activity_user (user_id),
  INDEX idx_activity_time (created_at DESC),
  INDEX idx_activity_action (action)
);
```

### **13. dealership_merge_history**
Track dealership merges for audit trail and potential undo operations.

```sql
CREATE TABLE dealership_merge_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_dealership_id UUID NOT NULL, -- The dealership being merged (will be inactive)
  target_dealership_id UUID REFERENCES dealerships(id) ON DELETE CASCADE, -- The primary dealership kept
  merged_by_user_id UUID REFERENCES users(id),
  merge_reason TEXT,
  source_data JSONB, -- Store full dealership record before merge
  merged_at TIMESTAMPTZ DEFAULT NOW(),

  -- Merge metadata
  products_transferred INTEGER DEFAULT 0,
  changes_transferred INTEGER DEFAULT 0,
  notes_merged BOOLEAN DEFAULT false,

  INDEX idx_merge_source (source_dealership_id),
  INDEX idx_merge_target (target_dealership_id),
  INDEX idx_merge_date (merged_at DESC)
);
```

### **14. vendor_companies**
Track vendor/supplier information for admin management.

```sql
CREATE TABLE vendor_companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  website TEXT,
  description TEXT,
  logo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Link products to vendor companies
ALTER TABLE products ADD COLUMN vendor_company_id UUID REFERENCES vendor_companies(id);
```

---

## 🔌 API Endpoints

### **Authentication** (Supabase Auth)

```
POST   /auth/signup              - Register new user
POST   /auth/login               - Login user
POST   /auth/logout              - Logout user
GET    /auth/user                - Get current user profile
PUT    /auth/user                - Update user profile
POST   /auth/reset-password      - Request password reset
```

### **Dealerships**

```
GET    /api/dealerships                    - List dealerships (with filters)
  Query params: state, zipCode, radius, status, productCategory, search

GET    /api/dealerships/:id                - Get single dealership details
GET    /api/dealerships/:id/products       - Get products for dealership
GET    /api/dealerships/:id/changes        - Get change history for dealership
PUT    /api/dealerships/:id                - Update dealership (admin only)
POST   /api/dealerships/:id/notes          - Add notes to dealership
GET    /api/dealerships/nearby             - Search by ZIP + radius
  Query params: zipCode, radius, filters

POST   /api/dealerships/check-duplicate    - Check if URL already exists
  Body: { website: "millerhonda.com" }
  Response: { exists: true, dealership: {...} } or { exists: false }

GET    /api/dealerships/duplicates         - Find potential duplicates (admin only)
  Response: Groups of dealerships with similar names/addresses/URLs
```

### **Dealership Merging** (Admin Only)

```
POST   /api/dealerships/merge              - Merge multiple dealerships into one
  Body: {
    targetDealershipId: "uuid",    // The dealership to keep
    sourceDealershipIds: ["uuid"], // Dealerships to merge into target
    mergeReason: "string",
    preserveNotes: true,           // Combine notes from all dealerships
    transferProducts: true,        // Transfer all product associations
    transferChanges: true          // Transfer change history
  }
  Response: {
    success: true,
    targetDealership: {...},
    mergedCount: 3,
    productsTransferred: 15,
    changesTransferred: 42
  }

GET    /api/dealerships/merge-history      - List merge history
GET    /api/dealerships/merge-history/:id  - Get specific merge details
POST   /api/dealerships/merge/:id/undo     - Undo a merge (if within 24 hours)
```

### **Products**

```
GET    /api/products                       - List all products
GET    /api/products/:id                   - Get product details
POST   /api/products                       - Create product (admin only)
PUT    /api/products/:id                   - Update product (admin only)
DELETE /api/products/:id                   - Delete product (admin only)
GET    /api/products/categories            - List product categories
```

### **Product Detection**

```
GET    /api/products/:id/selectors         - Get CSS selectors for product
POST   /api/products/:id/selectors         - Add new selector (admin only)
PUT    /api/products/:id/selectors/:sid    - Update selector (admin only)
DELETE /api/products/:id/selectors/:sid    - Delete selector (admin only)
POST   /api/products/:id/test-selector     - Test selector against URL
```

### **Scanning**

```
POST   /api/scans                          - Trigger new scan job
  Body: { dealershipIds: [], scanAll: false }

GET    /api/scans                          - List scan jobs
GET    /api/scans/:id                      - Get scan job details
GET    /api/scans/:id/results              - Get detailed scan results
DELETE /api/scans/:id                      - Cancel running scan
GET    /api/scans/:id/export               - Export scan results (CSV/JSON)
```

### **Changes & Alerts**

```
GET    /api/changes                        - List recent changes (with filters)
  Query params: since, dealershipId, productId, changeType

GET    /api/changes/:id                    - Get change details
GET    /api/alerts                         - List user alerts
PUT    /api/alerts/:id/read                - Mark alert as read
PUT    /api/alerts/read-all                - Mark all alerts as read
DELETE /api/alerts/:id                     - Delete alert
```

### **Reports**

```
GET    /api/reports                        - List saved reports
POST   /api/reports                        - Create saved report
GET    /api/reports/:id                    - Get saved report
PUT    /api/reports/:id                    - Update saved report
DELETE /api/reports/:id                    - Delete saved report
POST   /api/reports/:id/run                - Execute saved report
POST   /api/reports/generate               - Generate ad-hoc report
  Body: FilterState + export options
```

### **Dashboard & Stats**

```
GET    /api/dashboard/stats                - Get dashboard statistics
  Response: { totalDealerships, opportunities, recentChanges, etc. }

GET    /api/dashboard/regions              - Get territory breakdown by region
GET    /api/dashboard/status-breakdown     - Get dealerships by status
GET    /api/dashboard/recent-activity      - Get recent changes/alerts
```

### **Admin Endpoints**

```
GET    /api/admin/users                    - List all users
POST   /api/admin/users                    - Create user
PUT    /api/admin/users/:id                - Update user
DELETE /api/admin/users/:id                - Delete user
GET    /api/admin/users/:id/activity       - User activity log

GET    /api/admin/vendors                  - List vendor companies
POST   /api/admin/vendors                  - Create vendor
PUT    /api/admin/vendors/:id              - Update vendor
DELETE /api/admin/vendors/:id              - Delete vendor

GET    /api/admin/system/health            - System health check
GET    /api/admin/system/metrics           - System metrics
GET    /api/admin/activity-log             - Full activity log
```

### **User Preferences**

```
GET    /api/preferences                    - Get user preferences
PUT    /api/preferences                    - Update preferences
PUT    /api/preferences/alerts             - Update alert settings
PUT    /api/preferences/digest             - Update email digest settings
```

---

## 🔐 Row Level Security (RLS) Policies

**Key RLS Rules:**

1. **Sales Reps** can only see:
   - Dealerships in their territory (state-based)
   - Their own alerts and reports
   - Products (read-only)

2. **Admins** can see:
   - All dealerships
   - All users and activity
   - All reports and scans

3. **Authentication Required:**
   - All tables require `auth.uid()` to be set
   - No anonymous access

---

## 🚀 Implementation Priority

### **Phase 1: Core MVP** (Week 1-2)
1. ✅ Setup Supabase project
2. ✅ Create users + authentication
3. ✅ Create dealerships table
4. ✅ Create products table
5. ✅ Basic GET /dealerships API
6. ✅ Basic GET /products API
7. ✅ RLS policies for sales_rep vs admin

### **Phase 2: Detection System** (Week 3-4)
1. ✅ Create product_selectors table
2. ✅ Create dealership_products table
3. ✅ Create scan_jobs + scan_results tables
4. ✅ Build scanning API endpoints
5. ✅ Implement product detection logic

### **Phase 3: Change Tracking** (Week 5-6)
1. ✅ Create product_changes table
2. ✅ Create alerts table
3. ✅ Build change detection logic
4. ✅ Real-time subscriptions for alerts
5. ✅ Email notifications

### **Phase 4: Reporting** (Week 7-8)
1. ✅ Create saved_reports table
2. ✅ Build report generation API
3. ✅ Implement export functionality
4. ✅ Dashboard statistics endpoints

---

## 📝 Notes

- **Supabase Edge Functions** can be used for:
  - Web scraping/scanning logic
  - Email digest generation
  - Report generation
  - Data processing

- **Supabase Storage** for:
  - Scan screenshots
  - Exported reports (CSV, PDF)
  - User uploads

- **Supabase Realtime** for:
  - Live scan progress updates
  - Real-time alert notifications
  - Collaborative features

- **PostGIS Extension** enabled for:
  - Geographic queries (ZIP + radius search)
  - Territory-based filtering

---

## 💳 Subscription Tier Limits

### **Tier 1 (Free/Trial)**
- **Price:** Free forever
- Max dealerships: 10
- Scan frequency: Manual only (no auto-scans)
- Alerts: None (must check dashboard manually)
- Reports: 2 saved reports
- Users: 1 user
- Support: Community forum / Knowledge base only
- Export: View only (no exports)
- **Purpose:** Trial/freemium tier to evaluate product

### **Tier 2 (Pro)**
- **Price:** $XX/month (paid tier)
- Max dealerships: 100
- Scan frequency: Daily automated scans
- Alerts: Email + In-app notifications
- Reports: 25 saved reports
- Users: 5 users
- Support: Priority email + chat support
- Export: CSV/Excel exports
- **Purpose:** Professional users and small teams

### **Tier 3 (Enterprise)**
- **Price:** $XXX/month (or custom pricing)
- Max dealerships: Unlimited
- Scan frequency: Real-time monitoring
- Alerts: Email + In-app + SMS notifications
- Reports: Unlimited saved reports
- Users: Unlimited
- Support: Dedicated account manager + phone support
- Export: All formats (CSV, Excel, PDF, API access)
- Custom integrations & white-label options
- **Purpose:** Large organizations and agencies

**Implementation:**
- Tier limits enforced at API level
- `subscription_tier` field in users table (1, 2, or 3)
- Upgrade prompts shown when limits reached
- "Upgrade to Pro" CTAs throughout Tier 1 experience
- Admin can override limits manually
- **No credit card required for Tier 1** - instant signup
- Grace period when exceeding limits (show warnings before blocking)

---

**Last Updated:** 2025-10-01
**Status:** Planning Document
