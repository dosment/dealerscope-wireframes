# DealerScope Demo Application - Design System

## Overview
A professional B2B SaaS application for automotive vendor sales intelligence. Features a clean, modern interface with multi-theme support and role-based views.

---

## Color Palette & Branding

### Primary Brand Colors
- **Brand Orange**: `#f97316` (Main brand color)
- **Orange Light**: `#fb923c` (Accents, gradients)
- **Orange Lightest**: `#fdba74` (Subtle highlights)
- **Alert Red**: `#ef4444` (Notifications, urgent items)

### Theme System
The application uses CSS custom properties for theming with three available themes:

#### 1. Clarity Theme (Default)
- Clean, bright interface
- High contrast for readability
- Professional appearance

#### 2. Low Contrast Theme
- Softer color palette
- Reduced eye strain
- Subtle visual hierarchy

#### 3. Dark Theme
- Dark backgrounds
- Light text
- Reduced blue light

### Theme Variables
```css
--text-primary: Main text color
--text-secondary: Secondary text
--text-muted: Subdued text
--text-hero: Hero/heading text
--text-tertiary: Least prominent text
--text-disabled: Disabled state text

--bg-primary: Main background
--bg-secondary: Secondary background
--bg-elevated: Elevated surfaces
--bg-accent: Accent background

--border-primary: Main borders
--border-secondary: Secondary borders

--success-50, --success-500, --success-600: Success colors
--warning-50, --warning-500, --warning-600: Warning colors
--danger-50, --danger-500, --danger-600: Danger colors
```

---

## Typography

### Font Families
- **Primary**: Inter (body text, UI elements)
- **Brand**: IBM Plex Sans (headings, brand elements)
- **Monospace**: IBM Plex Mono (code, data displays)

### Font Loading
```typescript
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  variable: '--font-ibm-plex-sans'
});
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: '--font-ibm-plex-mono'
});
```

### Type Scale
- **Hero Heading (h1)**: `text-2xl font-semibold` (24px)
- **Section Heading (h2)**: `text-lg font-medium` (18px)
- **Subsection (h3)**: `text-base font-medium` (16px)
- **Body**: `text-sm` (14px)
- **Small**: `text-xs` (12px)

### Text Colors
- **Hero text**: `text-hero` (highest contrast)
- **Primary text**: `text-primary` (standard content)
- **Secondary text**: `text-secondary` (supporting content)
- **Muted text**: `text-muted` (least prominent)

---

## Layout Structure

### Responsive Grid
```css
/* Standard container */
max-w-7xl mx-auto

/* Section spacing */
py-6 (vertical padding)
px-6 (horizontal padding)

/* Card spacing */
mb-8 (section margin bottom)
gap-4, gap-6, gap-8 (grid gaps)
```

### Component Hierarchy
```
Layout (TopBar + LeftNav + Content)
  ├─ TopBar (fixed height, horizontal)
  ├─ LeftNav (fixed width, vertical)
  └─ Content Area (flexible, scrollable)
```

### Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)
- **Large**: `xl:` (≥ 1280px)

---

## Component Design Patterns

### Page Headers
Consistent across all pages:
```tsx
<div className="mb-8">
  <h1 className="text-2xl font-semibold text-hero">Page Title</h1>
  <p className="text-secondary">Brief description of page purpose</p>
</div>
```

**Applied to**:
- My Dealers
- Alerts
- Prospecting
- Email Setup
- Admin Dashboard

### Cards
```css
/* Standard card */
bg-elevated
border border-primary
rounded-lg
p-6
```

### Tables
```css
/* Table container */
bg-elevated border border-primary

/* Table header */
px-6 py-3
text-xs font-medium
text-muted uppercase

/* Table rows */
px-6 py-4
hover:bg-secondary
```

### Buttons
```tsx
// Primary
<Button variant="primary">Action</Button>
// Secondary
<Button variant="secondary">Action</Button>
// Ghost
<Button variant="ghost">Action</Button>
```

### Status Badges
Color-coded indicators:
- **Changed**: Red background/text
- **Opportunity**: Yellow background/text
- **No Change**: Green background/text
- **Scanning**: Yellow with pulse animation
- **Error**: Red background/text

---

## Navigation Design

### LeftNav Specifications
```css
Width: 256px (w-64)
Background: bg-primary
Border: border-r border-primary
```

#### Logo Section
- Size: `w-16 h-16` (64px × 64px)
- Text: "DEALERSCOPE" (all caps)
- Font: IBM Plex Sans, font-semibold
- Border bottom: `border-b border-primary`

#### Navigation Items
```css
/* Default state */
px-4 py-3 rounded-md text-secondary

/* Active state */
bg-accent text-primary

/* Hover state */
hover:bg-accent hover:text-primary
```

#### Footer Section
- Border top: `border-t border-primary`
- Font size: `text-xs`
- Content varies by role (User vs Admin)

### TopBar Specifications
```css
Height: auto
Background: bg-primary
Border: border-b border-primary
Padding: px-6 py-4
```

#### Elements
- **Scan Button**: Primary button (user role only)
- **Notification Bell**: With badge counter
- **User Info**: Name + Company
- **Profile Icon**: Circular with initials

---

## Interactive Elements

### Loading States
Custom animated raccoon logo with gradient:

**Animation Specs**:
- **Duration**: 800ms
- **Gradient colors**: #f97316 → #fb923c → #fdba74
- **Animation**: `gradientShift` (3s ease infinite)
- **Pulse**: `pulse` (2s ease-in-out infinite)

**Logo specs**:
- Size: `w-16 h-16` (64px × 64px)
- Background: Circular gradient
- Icon: White raccoon with orange eyes

### Hover Effects
```css
/* Cards */
hover:bg-secondary transition-colors

/* Buttons */
hover:opacity-90 transition-opacity

/* Table rows */
hover:bg-secondary

/* Sortable headers */
hover:bg-opacity-70 transition-colors cursor-pointer
```

### Sorting Indicators
- **Inactive**: Faded double arrow icon (opacity-30)
- **Ascending**: Up arrow icon
- **Descending**: Down arrow icon
- Color: Current text color

---

## Icons & Illustrations

### Icon System
Using Heroicons (outline style):
- Line width: `strokeWidth={2}`
- Size: `w-5 h-5` (standard), `w-6 h-6` (large)
- Color: Inherits from parent

### Common Icons
- **Bell**: Notifications
- **Chart**: Reports/Analytics
- **Building**: Dealerships
- **Users**: User management
- **Cog**: Settings
- **Document**: Reports

### Brand Icon
- **Raccoon Logo**: Primary brand mark
- Formats: SVG (raccoon.svg, favicon.svg)
- Usage: Side nav, loading states, favicon

---

## Spacing System

### Scale
```css
0.25rem = 1  (4px)
0.5rem  = 2  (8px)
0.75rem = 3  (12px)
1rem    = 4  (16px)
1.25rem = 5  (20px)
1.5rem  = 6  (24px)
2rem    = 8  (32px)
3rem    = 12 (48px)
4rem    = 16 (64px)
```

### Common Patterns
- **Component padding**: `p-6` (24px)
- **Section margins**: `mb-8` (32px)
- **Grid gaps**: `gap-4` (16px) or `gap-6` (24px)
- **Button spacing**: `space-x-2` (8px)

---

## State Indicators

### Status Colors
```css
/* Success / No Change */
--success-50, --success-600 (green shades)

/* Warning / Opportunity */
--warning-50, --warning-600 (yellow shades)

/* Danger / Changed / Error */
--danger-50, --danger-600 (red shades)

/* Info / Scanning */
--info-50, --info-600 (blue shades)
```

### Badge Styles
```tsx
// Rounded full with padding
className="px-2 py-1 rounded-full text-xs font-semibold"

// With dot indicator
<span className="w-2 h-2 rounded-full" />
```

---

## Forms & Inputs

### Input Fields
```css
/* Standard input */
px-3 py-2
border border-secondary
rounded-md
focus:outline-none focus:ring-2 focus:ring-blue-500
```

### Select Dropdowns
```css
/* Standard select */
w-full px-3 py-2
border border-secondary
rounded-md
```

### Checkboxes
```css
h-4 w-4
text-blue-600
border-secondary
rounded
```

---

## Animations

### Page Transitions
```css
/* Loading state */
Duration: 800ms
Easing: ease-in-out

/* Hover transitions */
transition-colors
transition-opacity
Duration: 150ms
```

### Loading Animations
```css
/* Gradient shift */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
animation: gradientShift 3s ease infinite;

/* Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}
animation: pulse 2s ease-in-out infinite;
```

### Status Badge Pulse
Used for "Scanning" status:
```css
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

---

## Data Visualization

### Tables
- **Zebra striping**: Subtle alternating row colors
- **Hover highlight**: Clear hover state
- **Sortable columns**: Visual indicators
- **Responsive**: Horizontal scroll on mobile

### Cards
- **Metric cards**: Large number + label
- **Feature cards**: Icon + title + description
- **Summary cards**: Stats with icons

---

## Role-Based Design

### User (Sales Rep) View
**Color emphasis**: Professional, action-oriented
**Key elements**:
- My Dealers (primary focus)
- Scan Dealers button
- Notification emphasis
- Territory metrics

### Admin View
**Color emphasis**: System monitoring, control
**Key elements**:
- System health indicators
- User/dealership management
- Business metrics
- Revenue tracking

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Theme-specific contrast ratios maintained
- Status colors distinguishable beyond color alone

### Keyboard Navigation
- Tab order follows visual flow
- Focus indicators visible
- Skip links where appropriate

### Screen Readers
- Semantic HTML structure
- ARIA labels on interactive elements
- Proper heading hierarchy (h1 → h2 → h3)

### Motion
- Respects `prefers-reduced-motion`
- Optional animation toggles
- Smooth but not excessive

---

## Responsive Design

### Mobile Optimizations
- Collapsible navigation
- Stacked layouts
- Touch-friendly targets (44px min)
- Simplified tables (horizontal scroll)

### Tablet Optimizations
- Two-column layouts where appropriate
- Expanded navigation visible
- Grid layouts (2-3 columns)

### Desktop Optimizations
- Full navigation visible
- Multi-column layouts
- Hover states prominent
- Keyboard shortcuts

---

## Brand Assets

### Favicon
**File**: `/public/favicon.svg`
**Design**:
- Orange circular background (#f97316)
- White raccoon silhouette
- Orange eyes (#fb923c)
- Optimized for 16×16, 32×32, and larger

### Logo
**File**: `/public/raccoon.svg`
**Usage**:
- Side navigation (w-16 h-16)
- Loading states (w-16 h-16)
- Responsive sizing

### Typography
- **Brand name**: "DEALERSCOPE" (all caps)
- **Font**: IBM Plex Sans, semibold
- **Always paired with logo**

---

## Best Practices

### Component Development
1. Use theme variables (not hardcoded colors)
2. Follow established spacing scale
3. Maintain consistent hover states
4. Include loading states
5. Handle empty states
6. Provide error feedback

### Design Consistency
1. Use existing components first
2. Follow established patterns
3. Maintain visual hierarchy
4. Test in all themes
5. Verify responsive behavior
6. Check accessibility

### Performance
1. Optimize images and SVGs
2. Use CSS animations (GPU-accelerated)
3. Lazy load heavy components
4. Minimize re-renders
5. Code splitting where appropriate

---

## Future Considerations

### Scalability
- Component library ready for Storybook
- Design tokens defined
- Pattern library established
- Documentation maintained

### Theming
- Easy to add new themes
- CSS custom properties
- Theme switcher implemented
- User preference saved

### Extensions
- Dark mode fully supported
- High contrast mode ready
- RTL support possible
- Custom branding feasible