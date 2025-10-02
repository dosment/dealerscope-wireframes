# DealerScope AI Developer Master Prompt

**CRITICAL INSTRUCTION SET** - This prompt provides complete context for AI developers to build DealerScope without confusion or missing requirements.

---

## 🎯 PROJECT MISSION

**Build DealerScope**: A React/Next.js web application for automotive vendor sales representatives to monitor dealership websites and track competitor product changes.

**Core Value Proposition**: Answer "Which dealerships in my list just changed something?" in under 30 seconds.

**Target Users**: Sales reps for ANY automotive vendor (chat tools, CRM systems, digital retailing, trade tools, inventory management, analytics, marketing tools, finance solutions, etc.)

---

## 🏗️ TECHNICAL ARCHITECTURE

### **MANDATORY Technology Stack**

```typescript
// Required Framework Stack
- Frontend: Next.js 14+ with App Router (NOT Pages Router)
- UI Library: React 18+ with modern hooks
- Language: TypeScript (100% typed, no JavaScript files)
- Styling: Tailwind CSS (NO CSS-in-JS libraries)
- Animations: Framer Motion
- State: Zustand or React Context API
- Backend: Node.js with Next.js API Routes/Server Actions
- Development: Windows 10/11 optimized environment
```

### **Project Structure** (STRICT)
```
dealerscope-demo/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route groups
│   ├── dashboard/         # Sales rep dashboard
│   ├── admin/             # Admin interface
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── dashboard/        # Dashboard-specific components
│   └── admin/            # Admin-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

---

## 📋 DEVELOPMENT STANDARDS

### **Code Quality Rules** (FROM CLAUDE.md)

1. **File Size Limits**:
   - Maximum 500 lines per file (ENFORCED)
   - Break into modules at 400 lines
   - Never exceed 1000 lines temporarily

2. **Component Architecture**:
   - Single responsibility per component
   - Composition over inheritance
   - Server Components for static content
   - Client Components only when interactivity required

3. **Function/Component Size**:
   - Functions/hooks: 30-40 lines maximum
   - React Components: Split when over 200 lines
   - Always explain why you're splitting

4. **🚫 ABSOLUTE PROHIBITIONS**:
   - **NO EMOJIS** anywhere in code or UI (B2B professional requirement)
   - NO CSS-in-JS libraries (Tailwind only)
   - NO Pages Router (App Router only)
   - NO JavaScript files (TypeScript only)

### **Naming Conventions**
```typescript
// React Components: PascalCase
const DealershipTable = () => {}

// Custom Hooks: camelCase with "use" prefix
const useDealershipData = () => {}

// TypeScript Interfaces: PascalCase with descriptive names
interface DealershipData {
  name: string;
  status: 'active' | 'scanning' | 'error';
}

// CSS Classes: Tailwind utilities (no custom CSS classes)
<div className="bg-white border border-gray-200 rounded-lg p-4">
```

---

## 🎨 DESIGN SYSTEM REQUIREMENTS

### **Visual Standards** (FROM DESIGN-ELEMENTS.md)

**Color Palette**:
```css
/* Primary Colors */
--color-primary: #3B82F6;     /* Blue for actions */
--color-success: #10B981;     /* Green for success */
--color-warning: #F59E0B;     /* Yellow for warnings */
--color-error: #EF4444;       /* Red for errors */

/* Text Colors */
--color-text-primary: #1F2937;
--color-text-secondary: #6B7280;
```

**Status Indicators** (NO EMOJIS):
```typescript
// Use text labels and CSS classes only
const statusConfig = {
  active: { label: 'Active', className: 'text-green-600 bg-green-100' },
  changed: { label: 'Changed', className: 'text-red-600 bg-red-100' },
  opportunity: { label: 'Opportunity', className: 'text-yellow-600 bg-yellow-100' },
  scanning: { label: 'Scanning', className: 'text-blue-600 bg-blue-100' },
  error: { label: 'Error', className: 'text-red-600 bg-red-100' }
};
```

**Typography**:
```css
/* Use Tailwind classes */
h1: text-3xl font-semibold    /* Page titles */
h2: text-2xl font-semibold    /* Section titles */
h3: text-lg font-medium       /* Subsections */
body: text-sm                 /* Most UI text */
```

---

## 📐 WIREFRAME IMPLEMENTATION GUIDE

### **Build Priority Order**

1. **Foundation** (`08-design-system.md`):
   ```typescript
   // Implement base components first
   - Layout (TopBar, LeftNav, ContentPane)
   - Button variants (Primary, Secondary, Danger)
   - Table component with sorting/filtering
   - Modal component
   - Status badges
   ```

2. **Sales Rep Core** (`01-sales-rep-dashboard.md`, `02-sales-rep-reports.md`):
   ```typescript
   // Primary user workflow
   - Dealership table with status indicators
   - Geographic search (ZIP + radius)
   - Product category filtering
   - Recent changes feed
   ```

3. **Sales Rep Complete** (`03-sales-rep-alerts.md`):
   ```typescript
   // Notification system
   - Multi-channel alert configuration
   - Email digest settings
   - CRM integration interface
   ```

4. **Admin Interface** (`04-07-admin-*.md`):
   ```typescript
   // Business management
   - Executive dashboard with metrics
   - User management
   - Vendor/product management
   - AI selector builder
   ```

### **Key Features to Implement**

**Sales Rep Dashboard**:
```typescript
interface DealershipTableRow {
  id: string;
  name: string;
  location: string;
  trackedProducts: string[];
  lastChange: Date;
  status: 'active' | 'changed' | 'opportunity' | 'scanning' | 'error';
}

// Required functionality:
- Real-time status updates (simulated)
- Bulk selection and actions
- CRM export capability
- Product category filtering
- Geographic filtering
```

**Geographic Reports**:
```typescript
interface GeographicSearch {
  zipCode: string;
  radius: number; // miles
  productCategories: string[];
  excludeExisting: boolean;
}

// Required functionality:
- ZIP + radius search interface
- Distance calculations
- Opportunity identification
- Save/schedule reports
- Export to CRM
```

---

## 🗂️ FILE REFERENCE GUIDE

### **Read These Files IN ORDER**:

1. **`/CLAUDE.md`** 🔥 CRITICAL - Development standards and behavior
2. **`/DOCUMENTATION/WIREFRAME-SPEC.md`** - Functional requirements
3. **`/DOCUMENTATION/DESIGN-ELEMENTS.md`** - Visual design system
4. **`/WIREFRAMES/08-design-system.md`** - Component specifications
5. **`/WIREFRAMES/01-sales-rep-dashboard.md`** - Primary interface
6. **Individual wireframe files** - Detailed feature specs

### **Key Files Summary**:

- **CLAUDE.md**: Coding standards, NO EMOJIS policy, React/Next.js patterns
- **WIREFRAME-SPEC.md**: User types, navigation, acceptance criteria
- **DESIGN-ELEMENTS.md**: Colors, typography, animations, responsive design
- **FILE-SYSTEM-STANDARDS.md**: Organization rules and compliance
- **Wireframe files**: Complete UI specifications with ASCII layouts

---

## 🚀 IMPLEMENTATION WORKFLOW

### **Step 1: Environment Setup**
```bash
# Windows users (REQUIRED)
1. Check port availability: netstat -an | findstr ":3000"
2. If port 3000 is in use, Next.js will auto-assign (e.g., 3001, 3002, 3003)
3. Run: check-environment.bat
4. Run: start-dealerscope.bat
5. Verify: http://localhost:PORT opens (check console for actual port)

# Manual setup (if needed)
npx create-next-app@latest dealerscope-demo --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"

# Port Management
# Ensure no conflicts with other projects in C:\projects\
# Common ports used: 3000, 3001, 3002, 8080, 8000, 5000
# Next.js automatically finds available ports starting from 3000
```

### **Step 2: Base Architecture**
```typescript
// Create core structure first
1. Set up TypeScript interfaces (/types/)
2. Implement design system components (/components/ui/)
3. Create layout structure (app/layout.tsx)
4. Add navigation components
```

### **Step 3: Feature Implementation**
```typescript
// Follow wireframe specifications exactly
1. Implement dealership table with mock data
2. Add status indicators (text labels, NO EMOJIS)
3. Create filtering and search interfaces
4. Build admin dashboard with business metrics
```

### **Step 4: Polish & Integration**
```typescript
// Final touches
1. Add loading states and error handling
2. Implement responsive design (mobile/tablet)
3. Add animations with Framer Motion
4. Ensure accessibility compliance
```

---

## ⚠️ CRITICAL SUCCESS CRITERIA

### **Mandatory Requirements**:

✅ **NO EMOJIS**: Professional B2B appearance only
✅ **React/Next.js**: Modern web application (no mobile/native)
✅ **TypeScript**: 100% type coverage
✅ **30-Second Rule**: Answer core question in under 30 seconds
✅ **Windows Compatible**: Development environment works on Windows
✅ **Responsive Design**: Works on mobile/tablet/desktop
✅ **Accessibility**: Screen reader compatible

### **Quality Gates**:

1. **Code Quality**: Max 500 lines per file
2. **Performance**: Fast loading and interactions
3. **Design Consistency**: Follows wireframe specifications exactly
4. **User Experience**: Intuitive navigation and workflows
5. **Professional Appearance**: No emojis, clean B2B design

---

## 🎯 MOCK DATA STRATEGY

### **Realistic Demo Data**:
```typescript
// Use consistent data across all features
const mockDealerships = [
  {
    id: '1',
    name: 'Miller Honda',
    location: 'Austin, TX (78701)',
    trackedProducts: ['YourCRM', 'AutoTrader Digital Showroom'],
    status: 'changed',
    lastChange: new Date('2024-01-15T10:30:00')
  },
  {
    id: '2',
    name: 'City Toyota',
    location: 'Dallas, TX (75201)',
    trackedProducts: [],
    status: 'opportunity',
    lastChange: new Date('2024-01-14T15:45:00')
  }
  // ... more realistic entries
];
```

### **State Management Pattern**:
```typescript
// Use Zustand for global state
interface DealerscopeStore {
  dealerships: Dealership[];
  currentUser: User;
  filters: FilterState;
  // Actions
  updateDealership: (id: string, updates: Partial<Dealership>) => void;
  setFilters: (filters: FilterState) => void;
}
```

---

## 📚 QUICK REFERENCE

**When stuck, refer to**:
- Navigation issues → `08-design-system.md`
- Feature requirements → Individual wireframe files
- Code standards → `CLAUDE.md`
- Visual design → `DESIGN-ELEMENTS.md`
- Data structure → `WIREFRAME-SPEC.md`

**Remember**:
- This is a B2B SaaS web application for automotive sales reps
- Professional appearance (NO EMOJIS)
- React/Next.js/TypeScript stack
- Windows development environment
- 30-second core value proposition

---

**SUCCESS DEFINITION**: A professional, fully functional React/Next.js demo that automotive vendor sales reps can use to monitor dealership websites and identify opportunities in under 30 seconds, with zero emojis and complete Windows compatibility.