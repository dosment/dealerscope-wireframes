# DESIGN AUDIT CHECKLIST

**Design Philosophy Compliance Check - All Pages**

## Design System Requirements

### Core Standards
- ✅ **Rounded Corners**: `rounded-xl` (NOT rounded-lg, rounded-md)
- ✅ **Colors**: Design system only (accent, hero, primary, secondary, tertiary, danger-600, success, warning)
- ✅ **NO Blue**: No `bg-blue-*`, `text-blue-*`, `border-blue-*`, `ring-blue-*`
- ✅ **Icons**: Lucide-React only (NO inline SVG, NO emoji)
- ✅ **Icon Stroke**: `strokeWidth={1.5}` or `{2}` for consistency
- ✅ **Transitions**: `transition-all duration-200` for smooth interactions
- ✅ **Buttons**: Use Button component (NOT inline buttons with blue colors)
- ✅ **Focus Rings**: `focus:ring-accent` (NOT focus:ring-blue-500)
- ✅ **Tier Names**: "Tier 1/2/3" (NOT Enterprise/Professional/Starter)

---

## Page Audit Status

### ✅ COMPLETED - Design Compliant
1. ✅ **Admin Dashboard** (`/admin/page.tsx`) - Updated with Lucide icons, rounded-xl
2. ✅ **Admin Billing** (`/admin/billing/page.tsx`) - Updated to Tier system, design colors
3. ✅ **Admin Users** (`/admin/users/page.tsx`) - Updated to Tier system, design colors
4. ✅ **Admin Dealerships Detail** (`/admin/dealerships/[id]/page.tsx`) - New page, fully compliant
5. ✅ **Profile Page** (`/profile/page.tsx`) - Just updated with all design standards
6. ✅ **Sales Rep Dashboard** (`/page.tsx`) - Updated with Lucide icons

### 🔍 NEEDS REVIEW
7. ⏳ **Dealerships List** (`/dealerships/page.tsx`)
8. ⏳ **Dealership Detail** (`/dealerships/[id]/page.tsx`)
9. ⏳ **Reports/Prospecting** (`/reports/page.tsx`)
10. ⏳ **Alerts** (`/alerts/page.tsx`)
11. ⏳ **Settings** (`/settings/page.tsx`)
12. ⏳ **Admin Dealerships List** (`/admin/dealerships/page.tsx`)
13. ⏳ **Admin Vendors** (`/admin/vendors/page.tsx`)
14. ⏳ **Admin Vendor Detail** (`/admin/vendors/[id]/page.tsx`)
15. ⏳ **Admin Alerts** (`/admin/alerts/page.tsx`)
16. ⏳ **Automotive Group Dashboard** (`/automotive-group/page.tsx`)
17. ⏳ **Landing Page** (`/landing/page.tsx`)

---

## Audit Checklist Per Page

For each page, verify:

### 1. Rounded Corners
- [ ] All cards/containers use `rounded-xl`
- [ ] All buttons use `rounded-xl`
- [ ] All inputs/selects use `rounded-lg` (inputs can be lg)
- [ ] NO `rounded-md` anywhere

### 2. Colors
- [ ] NO `bg-blue-*` classes
- [ ] NO `text-blue-*` classes
- [ ] NO `border-blue-*` classes
- [ ] NO `focus:ring-blue-*` classes
- [ ] Uses `text-accent` for primary interactive text
- [ ] Uses `text-hero` for headings
- [ ] Uses `text-primary`, `text-secondary`, `text-tertiary` for content
- [ ] Uses `bg-elevated`, `bg-secondary` for backgrounds
- [ ] Uses `border-primary`, `border-secondary`, `border-hover` for borders

### 3. Icons
- [ ] All icons are Lucide-React imports
- [ ] NO inline SVG paths
- [ ] NO emoji characters
- [ ] Icons use `strokeWidth={1.5}` or `{2}`
- [ ] Icons use design system colors

### 4. Buttons
- [ ] All buttons use `<Button>` component
- [ ] NO inline `<button>` with `bg-blue-600`
- [ ] Proper variants: primary, secondary, tertiary, ghost, danger
- [ ] Cancel buttons use `tertiary` variant
- [ ] Delete buttons use `danger` variant

### 5. Interactive Elements
- [ ] Links use `text-accent hover:text-hero`
- [ ] All hover states include `transition-all duration-200`
- [ ] Focus rings use `focus:ring-accent`
- [ ] Checkboxes use `text-accent focus:ring-accent`

### 6. Typography
- [ ] Headings use proper hierarchy (text-2xl, text-lg, text-sm)
- [ ] Font weights: font-semibold, font-medium
- [ ] Letter spacing: tracking-wide or tracking-tight where appropriate

### 7. Tier System
- [ ] Plan names show "Tier 1/2/3" (NOT Enterprise/Professional/Starter)
- [ ] Tier 1 = Free/Trial
- [ ] Tier 2 = Pro
- [ ] Tier 3 = Enterprise

---

## Common Issues to Watch For

### ❌ Anti-Patterns (DO NOT USE)
```tsx
// BAD - Blue colors
className="bg-blue-600 text-white"
className="text-blue-600 hover:text-blue-900"
className="focus:ring-blue-500"

// BAD - Wrong rounded corners
className="rounded-md"
className="rounded-lg" // (except inputs)

// BAD - Inline SVG
<svg>...</svg>

// BAD - Inline buttons
<button className="bg-blue-600...">

// BAD - Old tier names
<span>Enterprise</span>
<span>Professional</span>
```

### ✅ Correct Patterns (USE THESE)
```tsx
// GOOD - Design system colors
className="bg-accent text-white"
className="text-accent hover:text-hero"
className="focus:ring-accent"

// GOOD - Rounded corners
className="rounded-xl" // cards, buttons
className="rounded-lg" // inputs

// GOOD - Lucide icons
import { Icon } from 'lucide-react'
<Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />

// GOOD - Button component
<Button variant="primary">Save</Button>
<Button variant="tertiary">Cancel</Button>
<Button variant="danger">Delete</Button>

// GOOD - New tier names
<span>Tier 1</span>
<span>Tier 2</span>
<span>Tier 3</span>
```

---

## Audit Process

1. Open page file
2. Search for anti-patterns:
   - `blue-` (any blue color)
   - `rounded-md` (wrong corners)
   - `<svg` (inline SVG)
   - `Enterprise|Professional|Starter` (old tier names)
3. Check all buttons use Button component
4. Verify all icons are Lucide imports
5. Check transitions on interactive elements
6. Update and commit changes
7. Mark page as ✅ COMPLETED

---

## Files to Update (if needed)

After auditing, common updates needed:
- Replace blue colors with accent/hero/primary
- Change rounded-md to rounded-xl
- Import Lucide icons and replace inline SVG
- Wrap buttons in Button component
- Add transition-all duration-200 to hover states
- Update tier names

---

## Notes

- **LoadingState** component already updated (no raccoon logo, uses Lucide Loader2)
- **Button** component already updated (danger variant fixed)
- **LeftNav** already updated (all Lucide icons)
- **TopBar** already updated (all Lucide icons)

This checklist ensures EVERY page follows the Swiss luxury spa aesthetic with:
- Clean, minimal design
- Consistent rounded-xl corners
- Professional design system colors (no generic blue)
- Lucide icons only
- Smooth transitions
- Proper button variants

---

## IMPORTANT: New Pages Must Follow Design System

**ALL NEW PAGES, COMPONENTS, AND FEATURES MUST FOLLOW THE DESIGN SYSTEM FROM DAY ONE.**

This checklist documents the design system used throughout DealerScope. When creating new pages:

1. **Review this entire checklist BEFORE writing code**
2. **Reference `CLAUDE.md` Design Philosophy section for complete standards**
3. **Use only approved colors, components, and patterns from this guide**
4. **Test your page against the audit checklist before committing**

**Completed Audit Summary:**
- ✅ 16 of 17 main pages are fully design-compliant
- ✅ All user-facing pages follow Swiss luxury spa aesthetic
- ⚠️ Only admin vendor detail sub-components remain (low priority)

**Systematic Fixes Applied (January 2025):**
- Replaced all hardcoded blue/green/red/yellow/purple colors with design system tokens
- Changed rounded-md/rounded-lg to rounded-xl throughout
- Updated all focus rings from blue-500 to accent
- Converted status badges to use success-soft/warning-soft/danger-soft patterns
- Fixed table dividers from divide-gray-200 to divide-primary
- Standardized all form inputs with consistent design system styling

**Design system is now the source of truth - no exceptions for new code.**

