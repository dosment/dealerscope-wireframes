# Dashboard Design Best Practices

## 1. Information Hierarchy

- Define the 1–2 primary jobs per persona your dashboard solves.
- Keep your hierarchy shallow: Home → Section → Detail (no deep nesting).
- Show a clear default state (what does a new/empty dashboard look like?).

## 2. Navigation

- Stick to a familiar pattern: left rail = sections, top bar = account/global, content pane = work.
- Limit side nav nesting to 1 level. Defer complexity into tabs or filters inside pages.
- Always show “where I am” (highlighted section, breadcrumb if needed).

## 3. Core Components

### Tables & Lists
- Wireframe columns, filters, and actions. Even if data isn’t final, block out:
  - Search + filter bar
  - Bulk action row
  - Empty/loading/error states
- Detail views: Start with a summary card up top, then sections of details.

## 4. States & Flows

- Include empty states, loading states, and error states in your wireframes.
- Show how a user adds something new (button placement, modal vs inline form).
- Wireframe confirmation/undo flows for destructive actions.

## 5. Data Visualization

- For wireframes, don’t design custom charts — just use placeholder boxes with labels (“Line chart: Revenue over time”).
- Emphasize the story each chart tells (what’s the question it answers?).

## 6. Layout & Responsiveness

- Use grids in wireframes (e.g., 12-column). This makes the jump to hi-fi smoother.
- Sketch mobile views early: what collapses, what becomes a card list, what hides?

## 7. User Guidance

- Plan for onboarding: a “first-run checklist” or “sample data” state.
- Placeholders for help icons, tooltips, and contextual guides.

## 8. Consistency

- Use consistent placeholder text and icons — this builds intuition.
- Repeat common patterns: one style of button, one style of filter bar, one card layout.
