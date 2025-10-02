# Variant-3 Design Specification: Dark & Light Mode

## Overview
A sleek, modern B2B SaaS landing page for DealerScope with automotive industry sophistication. Features dynamic animations, gradient text effects, and professional styling optimized for both dark and light themes.

---

## Color Palette & Theme

### Dark Mode (Current)
- **Background**: Deep grays (`gray-900`, `gray-800`) with gradient overlays
- **Primary brand gradient**: Orange to red (`from-orange-500 to-red-600`, `from-orange-400 via-red-500 to-pink-500`)
- **Accent colors**: Orange (`#FF6B00` custom), red, pink gradients
- **Text hierarchy**:
  - Primary: `text-white`
  - Secondary: `text-gray-300`
  - Tertiary: `text-gray-400`, `text-gray-500`

### Light Mode (Proposed)
- **Background**: Pure whites (`white`) and very light grays (`gray-50`, `gray-100`)
- **Primary brand gradient**: Same orange to red (`from-orange-500 to-red-600`) - maintains brand consistency
- **Accent colors**: Keep the orange/red/pink gradients but against light backgrounds
- **Text hierarchy**:
  - Primary: `text-gray-900`, `text-black`
  - Secondary: `text-gray-700`
  - Tertiary: `text-gray-500`, `text-gray-400`

---

## Typography & Fonts

### Both Modes
- **Primary font**: Poppins (used explicitly for brand name)
- **Hierarchy**:
  - Hero headings: `text-6xl md:text-7xl font-bold`
  - Section headings: `text-4xl font-bold`
  - Subheadings: `text-2xl font-bold`
  - Body text: `text-xl`, `text-lg`
  - Small text: `text-sm`
- **Weight variations**: Bold for headings, semibold for buttons, regular for body

---

## Visual Style Characteristics

### Dark Mode
- **Glass morphism**: `backdrop-blur-lg`, `backdrop-blur-sm` with dark overlays
- **Card design**: Semi-transparent cards (`bg-gray-800/50`) with subtle borders (`border-gray-700`)
- **Gradient text**: Brand-colored gradient using `bg-clip-text text-transparent`
- **Button styles**:
  - Primary: `bg-gradient-to-r from-orange-500 to-red-600 text-white`
  - Secondary: `border border-gray-600 text-gray-300 hover:bg-gray-800`

### Light Mode
- **Glass morphism**: Light backdrop blur with subtle white/gray overlays (`bg-white/80`, `bg-gray-50/50`)
- **Card design**: White cards with soft shadows (`bg-white shadow-lg`) and light borders (`border-gray-200`)
- **Gradient text**: Same brand gradients - pop beautifully against light backgrounds
- **Button styles**:
  - Primary: `bg-gradient-to-r from-orange-500 to-red-600 text-white` (same)
  - Secondary: `bg-gray-100 text-gray-900 hover:bg-gray-200`

---

## Animation & Interactions

### Both Modes (Consistent)
- **Entrance animations**: Slide-up with opacity fade
  - Initial: `translate-y-8 opacity-0`
  - Final: `translate-y-0 opacity-100`
  - Duration: `transition-all duration-700`
- **Hover effects**:
  - Scale transforms: `hover:scale-105`, `hover:scale-110`
  - Color transitions with smooth timing
- **Staggered delays**: Sequential timing (300ms, 600ms, 900ms, 1200ms intervals)
- **Dynamic elements**:
  - Rotating text animation (2-second intervals)
  - Expandable FAQ sections
  - Hover state changes

---

## Layout & Spacing

### Both Modes (Consistent)
- **Section spacing**: `py-20` for major sections
- **Container padding**: `px-6` for horizontal spacing
- **Margin hierarchy**: `mb-4`, `mb-6`, `mb-8`, `mb-12`, `mb-16`
- **Responsive grid**: CSS Grid with breakpoints
  - Mobile: Single column
  - Tablet: `md:grid-cols-3`
  - Desktop: `lg:grid-cols-3`
- **Container constraints**:
  - Large sections: `max-w-7xl mx-auto`
  - Content sections: `max-w-4xl mx-auto`
  - Narrow content: `max-w-2xl mx-auto`

---

## Component Specifications

### Header
**Dark Mode:**
```css
bg-gray-900/80 backdrop-blur-lg border-b border-gray-800
```
**Light Mode:**
```css
bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm
```

### Hero Section
**Dark Mode:**
```css
bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
```
**Light Mode:**
```css
bg-gradient-to-br from-gray-50 via-white to-gray-50
```

### Feature Cards
**Dark Mode:**
```css
bg-gray-800/50 border-2 border-gray-700 hover:border-orange-500
```
**Light Mode:**
```css
bg-white border-2 border-gray-200 hover:border-orange-500 shadow-lg hover:shadow-xl
```

### Floating Icons
**Dark Mode:**
```css
bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg
```
**Light Mode:**
```css
bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg
```

### Stats Cards
**Dark Mode:**
- Numbers: `text-white text-3xl font-bold`
- Labels: `text-gray-300 text-sm`

**Light Mode:**
- Numbers: `text-gray-900 text-3xl font-bold`
- Labels: `text-gray-600 text-sm`

### Process Cards
**Dark Mode:**
```css
bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70
```
**Light Mode:**
```css
bg-white border border-gray-200 hover:bg-gray-50 shadow-md hover:shadow-lg
```

### FAQ Section
**Dark Mode:**
```css
bg-gray-900/50 border border-gray-700
```
**Light Mode:**
```css
bg-white border border-gray-200 shadow-sm
```

### Footer
**Dark Mode:**
```css
bg-gray-900 border-t border-gray-800
```
**Light Mode:**
```css
bg-gray-50 border-t border-gray-200
```

---

## Special Elements

### Gradient Text (Both Modes)
```css
bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent
```

### Form Elements
**Dark Mode:**
```css
bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500
```
**Light Mode:**
```css
bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500
```

### Dashboard Preview
**Dark Mode:**
```css
bg-gray-800/50 border border-gray-700 backdrop-blur-sm
```
**Light Mode:**
```css
bg-white/50 border border-gray-200 backdrop-blur-sm shadow-lg
```

---

## Responsive Breakpoints

- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Desktop**: `xl:` prefix (1280px+)

### Key Responsive Adjustments
- Hero text: `text-6xl md:text-7xl`
- Grid layouts: Single column → `md:grid-cols-3`
- Button layouts: `flex-col sm:flex-row`
- Spacing adjustments for mobile viewing

---

## Accessibility Considerations

### Both Modes
- **Color contrast**: Ensure WCAG AA compliance
- **Focus states**: Visible focus indicators on all interactive elements
- **Keyboard navigation**: Tab order follows logical flow
- **Screen reader support**: Proper heading hierarchy, alt text, ARIA labels
- **Motion preferences**: Respect `prefers-reduced-motion`

### Dark Mode Specific
- Higher contrast ratios required for text visibility
- Ensure gradient text maintains readability

### Light Mode Specific
- Softer shadows to avoid harsh contrasts
- Sufficient color saturation for brand elements

---

## Brand Consistency

### Maintained Across Both Modes
- Orange-red gradient identity
- Poppins font for branding
- Animation timing and easing
- Component proportions and spacing
- Interactive behavior patterns

### Mode-Specific Adaptations
- Background and surface colors
- Text color hierarchy
- Border and shadow treatments
- Glass morphism opacity levels