# Component Updates Documentation

## Updated Components

### LoadingState Component
**Location**: `/components/ui/LoadingState.tsx`

**Changes**:
- Replaced spinner with animated raccoon logo
- Added animated orange gradient background
- Embedded SVG directly for customization
- Orange eyes (#f97316) instead of white
- Pulse animation on logo container
- Gradient shifts smoothly through orange shades
- Applied to multiple pages: dealerships, admin dashboard, reports, billing

**Usage**:
```tsx
<LoadingState message="Loading data..." />
```

**Animation Details**:
- `gradientShift`: 3s ease infinite
- `pulse`: 2s ease-in-out infinite
- Gradient colors: #f97316, #fb923c, #fdba74

---

### TopBar Component
**Location**: `/components/ui/TopBar.tsx`

**Changes**:
1. Removed logo and "DealerScope" text from left section
2. Updated user info display from role to company name
3. Changed notification badge to brighter red (#ef4444) with bold font
4. Renamed "Scan Territory" to "Scan Dealers"
5. Made "Scan Dealers" button conditional (only shows for sales_rep role)

**Props**:
- `userType`: 'sales_rep' | 'admin'
- `user`: { name, email, company }

---

### LeftNav Component
**Location**: `/components/ui/LeftNav.tsx`

**Changes**:
1. **Logo Section**:
   - Increased logo size: w-10 h-10 → w-16 h-16
   - Changed text to all caps: "DEALERSCOPE"

2. **Sales Rep Navigation**:
   - Removed Dashboard item
   - Changed "Dealerships" → "My Dealers"
   - Changed "Reports" → "Prospecting"
   - Added "Alerts" (between My Dealers and Prospecting)

3. **Admin Navigation**:
   - Added "Alerts" (after Vendors)

4. **Footer Section**:
   - Sales Rep: Shows Plan, Usage, Last scan
   - Admin: Shows Total Users (12), Active Dealers (125), System Status (Operational)

**Navigation Structure**:

Sales Rep:
- My Dealers → /dealerships
- Alerts → /alerts
- Prospecting → /reports
- Email Setup → /settings

Admin:
- Dashboard → /admin
- Users → /admin/users
- Dealerships → /admin/dealerships
- Vendors → /admin/vendors
- Alerts → /admin/alerts
- Billing → /admin/billing

---

### DealershipTable Component
**Location**: `/components/dashboard/DealershipTable.tsx`

**Changes**:
1. Added sorting functionality
   - Sortable columns: Name, Last Change, Status
   - Toggle between ascending/descending
   - Visual sort indicators (up/down arrows)
   - Hover effects on sortable headers

2. Re-added Status column (after temporarily removing it)

3. State management:
   - `sortField`: 'name' | 'lastChange' | 'status'
   - `sortDirection`: 'asc' | 'desc'

**Implementation**:
```tsx
const [sortField, setSortField] = useState<SortField>('name');
const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

const sortedDealerships = [...dealerships].sort((a, b) => {
  // Sorting logic based on field and direction
});
```

---

### StatusBadge Component
**Location**: `/components/ui/StatusBadge.tsx`

**Changes**:
- Changed "Stable" label to "No Change"
- Maintained all other status labels (Changed, Opportunity, Scanning, Error)
- Kept color scheme consistent

**Status Types**:
- `active`: Green
- `changed`: Red
- `opportunity`: Yellow
- `scanning`: Yellow with pulse
- `error`: Red
- `stable` (displays as "No Change"): Green

---

### RecentChanges Component
**Location**: `/components/dashboard/RecentChanges.tsx`

**Changes**:
1. Changed title from "Recent Changes" to "Notifications"
2. Added Next.js router navigation
3. "View All Changes" button now routes to /alerts page
4. Made component client-side with 'use client' directive

**Implementation**:
```tsx
import { useRouter } from 'next/navigation';
const router = useRouter();

<Button onClick={() => router.push('/alerts')}>
  View All Changes
</Button>
```

---

### Dashboard Component
**Location**: `/components/dashboard/Dashboard.tsx`

**Changes**:
1. Updated page header structure to match other pages
   - Extracted header outside content card
   - Changed h2 to h1
   - Changed text-lg to text-2xl
   - Added mb-8 spacing
   - Updated title: "Dealership Overview" → "My Dealers"

2. Removed custom CSS classes (cta-aggressive, intel-data)

3. Maintained loading state with 800ms delay

**Header Structure**:
```tsx
<div className="mb-8">
  <h1 className="text-2xl font-semibold text-hero">My Dealers</h1>
  <p className="text-secondary">Monitor and track dealerships in your territory</p>
</div>
```

---

### Layout Component
**Location**: `/components/ui/Layout.tsx`

**Changes**:
- Updated mockUser object to include company field
- Company name: "Automotive Solutions Inc"
- Used for TopBar user display

---

## New Components

### Admin Alerts Page
**Location**: `/app/admin/alerts/page.tsx`

**Features**:
- System-level alerts display
- Summary cards for metrics
- Filter options: All, Subscriptions, Dealerships, Users
- Alert types: subscription_new, subscription_cancelled, subscription_upgraded, dealership_added, user_added
- Priority badges: HIGH, MEDIUM, LOW
- Color-coded icons

**Mock Data**:
Uses `mockAdminAlerts` from `/lib/mockData.ts`

---

## Modified Pages

### Reports Page (Prospecting)
**Location**: `/app/reports/page.tsx`

**Changes**:
1. Added loading state with LoadingState component
2. Changed title: "Geographic Reports" → "Prospecting"
3. Loading delay: 800ms
4. Wrapped content in loading conditional

### Admin Dashboard
**Location**: `/app/admin/page.tsx`

**Changes**:
1. Added loading state
2. Loading delay: 800ms
3. Conditional rendering based on isLoading state

### Admin Billing
**Location**: `/app/admin/billing/page.tsx`

**Changes**:
1. Added loading state
2. Loading message: "Loading billing data..."
3. Loading delay: 800ms

### Dealership Detail Page
**Location**: `/app/dealerships/[id]/page.tsx`

**Changes**:
1. Updated back button text: "Back to Dashboard" → "Back to My Dealers"
2. Updated route: "/" → "/dealerships"

### Alerts Page
**Location**: `/app/alerts/page.tsx`

**Changes**:
1. Added conditional rendering for admin vs user view
2. Detects admin route with `usePathname()`
3. Shows admin alerts when on /admin route
4. Different content for each user type

---

## Component Patterns Used

### Loading State Pattern
```tsx
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const loadData = async () => {
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
  };
  loadData();
}, []);

return (
  {isLoading ? (
    <LoadingState message="Loading..." />
  ) : (
    // Page content
  )}
);
```

### Sorting Pattern
```tsx
const [sortField, setSortField] = useState<SortField>('name');
const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

const handleSort = (field: SortField) => {
  if (sortField === field) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortDirection('asc');
  }
};

const sortedData = [...data].sort((a, b) => {
  // Sort logic
  return sortDirection === 'asc' ? comparison : -comparison;
});
```

### Conditional Navigation Pattern
```tsx
const pathname = usePathname();
const isAdmin = pathname.startsWith('/admin');

const navigation = isAdmin ? adminNavigation : userNavigation;
```

---

## Styling Conventions

### Page Headers
```tsx
<div className="mb-8">
  <h1 className="text-2xl font-semibold text-hero">Page Title</h1>
  <p className="text-secondary">Page description</p>
</div>
```

### Theme Variables Used
- `--text-hero`: Primary heading color
- `--text-secondary`: Description text color
- `--text-primary`: Standard text color
- `--text-muted`: Subdued text color
- `--bg-elevated`: Elevated background
- `--bg-secondary`: Secondary background
- `--border-primary`: Primary border color

### Color Palette
- Brand Orange: #f97316
- Orange Light: #fb923c
- Orange Lightest: #fdba74
- Alert Red: #ef4444
- Success Green: var(--success-600)
- Warning Yellow: var(--warning-600)

---

## Best Practices Applied

1. **Component Size**: All components under 500 lines
2. **Single Responsibility**: Each component has one clear purpose
3. **TypeScript**: Full type safety with interfaces
4. **Consistent Styling**: Using theme variables throughout
5. **Accessibility**: Proper ARIA labels and semantic HTML
6. **Performance**: Optimized re-renders with proper state management
7. **Code Organization**: Clear file structure and naming conventions