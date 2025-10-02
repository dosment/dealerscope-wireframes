# Design System - Shared Components & Layout Patterns

**Purpose:** Define reusable UI patterns and components across all views

## Master Layout Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ TOP BAR (60px height)                                               │
│ [Component details below]                                           │
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬───────────────────────────────────────────────────────────┐
│ LEFT NAV │ CONTENT PANE                                              │
│ (240px)  │ [Dynamic content based on selected nav item]              │
│          │                                                           │
│ [Component│ [Header section - optional]                              │
│ details  │ [Main content area]                                       │
│ below]   │ [Footer section - optional]                               │
│          │                                                           │
│          │                                                           │
│          │                                                           │
│          │                                                           │
│          │                                                           │
│          │                                                           │
│          │                                                           │
│          │                                                           │
│          │                                                           │
│          │                                                           │
└──────────┴───────────────────────────────────────────────────────────┘
```

## Top Bar Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo] [Product Name]                    [Actions] [User] [Status]  │
│                                                                     │
│ Logo Area (60x40px):                                               │
│ • Company/product logo                                             │
│ • Clickable → returns to home                                      │
│                                                                     │
│ Product Name:                                                       │
│ • "DealerScope Pro" or custom branding                            │
│ • Typography: 18px, medium weight                                  │
│                                                                     │
│ Right Section (flex-end):                                          │
│ • Action Buttons (context-specific)                               │
│ • User Menu Dropdown                                               │
│ • System Status Indicator                                          │
│                                                                     │
│ Background: White (#FFFFFF)                                         │
│ Border: 1px solid #E5E7EB (bottom only)                           │
│ Shadow: 0 1px 3px rgba(0,0,0,0.1)                                 │
└─────────────────────────────────────────────────────────────────────┘
```

### Top Bar Variations

#### Regular User Top Bar
```
[🏢 Logo] DealerScope Pro        [Scan Now] [👤 John D.] [⚡ Healthy]
```

#### Admin User Top Bar
```
[🏢 Logo] DealerScope Pro    [System Health] [👤 Admin] [⚙️] [⚡ Healthy]
```

## Left Navigation Component
```
┌──────────────────────────┐
│ NAVIGATION (240px wide)  │
│                          │
│ User Context (if needed) │
│ [User info section]      │
│                          │
│ Primary Navigation       │
│ ├─ 📊 Dashboard          │
│ ├─ 🏢 Dealerships        │
│ ├─ 📈 Analytics          │
│ ├─ ⚡ Alerts             │
│ └─ ⚙️ Settings            │
│                          │
│ Secondary Navigation     │
│ ├─ 📚 Help & Support     │
│ ├─ 📋 What's New         │
│ └─ 🚪 Sign Out           │
│                          │
│ Footer Info              │
│ • Plan: Enterprise       │
│ • Usage: 25/50 dealers   │
│ • Last scan: 2h ago      │
│                          │
│ Background: #F9FAFB      │
│ Border: 1px #E5E7EB      │
│ (right side only)        │
└──────────────────────────┘
```

### Navigation Item States
```
Default State:
├─ 📊 Dashboard
   Color: #6B7280, Hover: #374151

Active State:
├─ 🏢 Dealerships  ←
   Color: #1F2937, Background: #EBF8FF, Border-left: 3px #3B82F6

Hover State:
├─ 📈 Analytics    (on hover)
   Background: #F3F4F6
```

### Navigation Variations

#### Regular User Navigation
```
📊 Dashboard        (home/dealership list)
🏢 Dealerships      (manage dealerships)
📈 Analytics        (usage reports)
⚡ Alerts          (notifications)
⚙️ Settings         (user preferences)
```

#### Admin User Navigation
```
👥 Users           (user management)
💳 Billing         (subscription management)
🔍 Scan Rules      (detection rules)
📊 Monitoring      (system health)
⚙️ Settings        (system configuration)
```

## Content Pane Layout Patterns

### Pattern 1: List/Table View
```
┌─────────────────────────────────────────────────────────────────────┐
│ PAGE HEADER                                                         │
│ [Page Title] [Context Info]                      [Primary Actions]  │
│                                                                     │
│ FILTERS & SEARCH BAR                                                │
│ [Search...] [Filter ▼] [Filter ▼] [Sort ▼]        [Secondary Actions] │
│                                                                     │
│ CONTENT AREA                                                        │
│ [Data table or card grid with consistent spacing]                  │
│                                                                     │
│ PAGINATION (if needed)                                              │
│ [← Previous] [1] [2] [3] [Next →]               [Items per page ▼] │
└─────────────────────────────────────────────────────────────────────┘
```

### Pattern 2: Detail View
```
┌─────────────────────────────────────────────────────────────────────┐
│ BREADCRUMB & NAVIGATION                                             │
│ ← Back to List | Dashboard > Dealerships > Miller Honda             │
│                                                                     │
│ DETAIL HEADER                                                       │
│ [Large Title] [Status Badge]                    [Action Buttons]    │
│ [Subtitle/Meta Information]                                         │
│                                                                     │
│ CONTENT SECTIONS                                                    │
│ ┌─ Section 1 ────────────────────────────────────────────────────┐  │
│ │ [Content cards, tables, or other components]                   │  │
│ └────────────────────────────────────────────────────────────────┘  │
│                                                                     │
│ ┌─ Section 2 ────────────────────────────────────────────────────┐  │
│ │ [Content organized in logical groups]                          │  │
│ └────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

### Pattern 3: Dashboard/Overview
```
┌─────────────────────────────────────────────────────────────────────┐
│ SUMMARY CARDS ROW                                                   │
│ ┌─ Card 1 ──┐ ┌─ Card 2 ──┐ ┌─ Card 3 ──┐ ┌─ Card 4 ──┐           │
│ │ [Metric]  │ │ [Metric]  │ │ [Metric]  │ │ [Status]  │           │
│ └───────────┘ └───────────┘ └───────────┘ └───────────┘           │
│                                                                     │
│ MAIN CONTENT GRID                                                   │
│ ┌─ Primary Widget ─────────────────┐ ┌─ Secondary Widget ────────┐   │
│ │ [Chart, table, or main focus]    │ │ [Supporting info]        │   │
│ │                                  │ │                          │   │
│ └──────────────────────────────────┘ └──────────────────────────┘   │
│                                                                     │
│ ┌─ Supporting Content ─────────────────────────────────────────────┐ │
│ │ [Additional information, feeds, or secondary data]              │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Reusable Component Library

### 1. Status Indicators
```
⚡ Active      - Green (#10B981)
🔴 Changed     - Red (#EF4444)
🟡 Warning     - Yellow (#F59E0B)
🔄 Processing  - Blue (#3B82F6)
❌ Error       - Red (#EF4444)
⏸️ Paused      - Gray (#6B7280)
```

### 2. Button Styles
```
Primary Button:
[Save Changes]
- Background: #3B82F6
- Text: White
- Hover: #2563EB
- Padding: 8px 16px
- Border-radius: 6px

Secondary Button:
[Cancel]
- Background: White
- Text: #374151
- Border: 1px #D1D5DB
- Hover: #F9FAFB

Danger Button:
[Delete]
- Background: #EF4444
- Text: White
- Hover: #DC2626
```

### 3. Input Fields
```
Text Input:
┌─────────────────────────────────────┐
│ Placeholder text...                 │
└─────────────────────────────────────┘
- Border: 1px #D1D5DB
- Focus: 2px #3B82F6
- Padding: 8px 12px
- Border-radius: 6px

Dropdown:
┌─────────────────────────────────────┐
│ Selected Option                  ▼ │
└─────────────────────────────────────┘
- Same styling as text input
- Chevron icon on right
```

### 4. Data Table
```
┌─┬──────────────────┬─────────────┬──────────┬────────────┐
│☑│ Column Header    │ Column 2    │ Status   │ Actions    │
├─┼──────────────────┼─────────────┼──────────┼────────────┤
│☑│ Data row 1       │ Value       │ ⚡ Active │ [Edit]     │
│☑│ Data row 2       │ Value       │ 🔴 Error │ [Edit]     │
└─┴──────────────────┴─────────────┴──────────┴────────────┘

Features:
- Checkbox column for bulk selection
- Sortable headers (with arrow indicators)
- Consistent row height (48px)
- Zebra striping (alternating row colors)
- Hover state highlighting
```

### 5. Modal Dialog
```
                    ┌─────────────────────────────────────┐
                    │ ✕ Modal Title                      │
                    │                                     │
                    │ Modal content goes here with        │
                    │ appropriate spacing and formatting  │
                    │                                     │
                    │ ┌─────────────────────────────────┐ │
                    │ │ Form fields or other content    │ │
                    │ └─────────────────────────────────┘ │
                    │                                     │
                    │               [Cancel] [Save]       │
                    └─────────────────────────────────────┘

Features:
- Backdrop overlay (rgba(0,0,0,0.5))
- Centered on screen
- Max-width: 600px
- Padding: 24px
- Border-radius: 12px
- Shadow: 0 20px 25px rgba(0,0,0,0.1)
```

### 6. Alert/Notification
```
Success:
┌────────────────────────────────────────────────────────┐
│ ✅ Action completed successfully                        │
│ Your dealership has been added to monitoring           │
└────────────────────────────────────────────────────────┘

Warning:
┌────────────────────────────────────────────────────────┐
│ ⚠️ Attention required                                   │
│ Some scans are taking longer than expected             │
└────────────────────────────────────────────────────────┘

Error:
┌────────────────────────────────────────────────────────┐
│ ❌ Action failed                                        │
│ Unable to connect to dealership website                │
└────────────────────────────────────────────────────────┘
```

## Color Palette
```
Primary Colors:
- Blue: #3B82F6 (primary actions, links)
- Dark Blue: #1E40AF (hover states)
- Light Blue: #EBF8FF (selected states)

Semantic Colors:
- Success: #10B981 (green)
- Warning: #F59E0B (yellow)
- Error: #EF4444 (red)
- Info: #6366F1 (purple)

Neutral Colors:
- Text Primary: #1F2937
- Text Secondary: #6B7280
- Border: #D1D5DB
- Background: #F9FAFB
- White: #FFFFFF
```

## Typography Scale
```
Headings:
- H1: 30px, font-weight: 600 (page titles)
- H2: 24px, font-weight: 600 (section titles)
- H3: 18px, font-weight: 600 (subsection titles)
- H4: 16px, font-weight: 600 (card titles)

Body Text:
- Large: 16px (primary content)
- Normal: 14px (most UI text)
- Small: 12px (meta information, labels)
- Tiny: 10px (timestamps, fine print)

Line Height:
- Headings: 1.2
- Body text: 1.5
- UI elements: 1.4
```

## Spacing System
```
Spacing Scale (based on 4px grid):
- xs: 4px   (tight spacing)
- sm: 8px   (small gaps)
- md: 16px  (standard spacing)
- lg: 24px  (section spacing)
- xl: 32px  (large gaps)
- 2xl: 48px (major sections)
- 3xl: 64px (page-level spacing)

Component Padding:
- Buttons: 8px 16px
- Input fields: 8px 12px
- Cards: 16px
- Modals: 24px
- Page content: 24px
```

## Responsive Breakpoints
```
Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Mobile Adaptations:
- Left nav becomes collapsible drawer
- Top bar height reduces to 56px
- Content padding reduces to 16px
- Tables become horizontally scrollable
- Action buttons stack vertically
- Modal width adjusts to screen - 32px
```