# DealerScope - Automotive Vendor Sales Intelligence Platform

**Project:** Automotive Vendor Sales Intelligence - Dealership Monitoring SaaS
**Target Users:** ANY automotive vendor sales reps, marketing companies, automotive groups
**Core Value:** Answer "Which dealerships just changed something?" in under 30 seconds

---

## Design Focus

✅ **Automotive Vendor Sales Workflow:** Optimized for ANY vendor sales reps tracking their products AND competitor activity
✅ **Geographic Territory Management:** ZIP + radius reporting for precise territory coverage
✅ **Multi-Channel Alerts:** CRM, Slack/Teams, email digest integration for alerts without logging in
✅ **Admin Business Intelligence:** MRR tracking, Stripe integration, AI-powered rule management
✅ **Scalable Architecture:** Role-based navigation with clear user/admin separation

---

## Complete Wireframe Structure

### Sales Rep Experience (3 files)
**Target User:** Automotive vendor sales representatives (ANY vendor)

1. **[01-sales-rep-dashboard.md](01-sales-rep-dashboard.md)**
   - **Primary Job:** Instant identification of vendor product changes and opportunities
   - Dashboard with configurable product focus, recent changes feed, opportunity detection
   - Status indicators: Changed, Opportunity, Stable, Scanning, Error
   - Bulk actions for CRM export and contact management

2. **[02-sales-rep-reports.md](02-sales-rep-reports.md)**
   - **Primary Job:** Find product opportunities within geographic territories
   - ZIP + radius geographic filtering with distance calculation
   - Product category filters (chat tools, CRM, analytics, marketing, finance, etc.)
   - CRM integration for lead export and automated opportunity management
   - Saved reports with automated email delivery

3. **[03-sales-rep-alerts.md](03-sales-rep-alerts.md)**
   - **Primary Job:** Configure notifications to get alerts without logging in
   - Multi-channel setup: In-app, email digest, CRM tasks, Slack/Teams
   - Smart alert prioritization: Own product removals = HIGH priority
   - Email digest configuration with executive summary format
   - CRM workflow automation for immediate lead creation

### Admin Experience (4 files)
**Target User:** System administrators and business managers

4. **[04-admin-overview.md](04-admin-overview.md)**
   - **Primary Job:** Monitor business metrics, user activity, and system health
   - Executive dashboard: MRR, user growth, churn rate, system performance
   - Revenue analytics with Stripe integration and plan distribution
   - User activity tracking and engagement scoring
   - System monitoring with scan queue management and health alerts

5. **[05-admin-detection-rules.md](05-admin-detection-rules.md)**
   - **Primary Job:** Manage vendor products and maintain CSS detection accuracy
   - Hierarchical vendor/product organization by category (Chat, CRM, etc.)
   - Advanced CSS rule editor with multiple detection methods
   - Comprehensive testing tools: single URL and bulk validation
   - Version control with rollback capability and performance tracking

6. **[06-admin-operations.md](06-admin-operations.md)**
   - **Primary Job:** Manage users, billing, and customer communications
   - User management: accounts, roles, activity tracking, bulk operations
   - Stripe billing integration: plans, failed payments, revenue tracking
   - Email template management with automated triggers and campaigns
   - Communication analytics and delivery monitoring

7. **[07-admin-ai-builder.md](07-admin-ai-builder.md)**
   - **Primary Job:** AI-assisted CSS selector creation from DOM elements
   - LLM-powered analysis of pasted HTML elements
   - Multiple selector generation (CSS, XPath, JavaScript predicates)
   - Automated testing with confidence scoring and validation
   - Smart auto-save with safety guardrails and version control

### Design Foundation (1 file)
**Reference:** Shared components and design system

8. **[08-design-system.md](08-design-system.md)**
   - Master layout structure, navigation components, reusable patterns
   - Component library: buttons, forms, tables, modals, alerts
   - Color palette, typography, spacing guidelines, responsive breakpoints
   - Consistent design patterns across all user types

---

## Key User Workflows

### Sales Rep: Daily Territory Monitoring
```
1. Login → Dashboard (immediate view of chat tool changes)
2. Scan Recent Changes for HIGH priority (LivePerson removals)
3. Check Opportunities for new prospects (no chat tool detected)
4. Export opportunities to CRM for immediate follow-up
5. Configure alerts to catch future changes automatically
```

### Sales Rep: Weekly Prospecting
```
1. Reports → ZIP + Radius search for assigned territory
2. Filter: No Chat + Competitors (exclude existing LivePerson)
3. Save report with weekly automation and email delivery
4. Export qualified opportunities to CRM as warm leads
5. Set up Slack alerts for urgent changes in territory
```

### Admin: Business Management
```
1. Login → Overview (check MRR, user growth, system health)
2. Operations → Review new signups and manage user accounts
3. Operations → Monitor Stripe subscriptions and recover failed payments
4. Detection Rules → Update CSS selectors as vendor sites change
5. Operations → Send system updates and manage email campaigns
```

### Admin: Technical Maintenance
```
1. Detection Rules → Select product needing rule updates
2. AI Builder → Paste new DOM structure, generate selectors
3. Testing → Validate rules against known positive/negative sites
4. Deployment → Push changes with confidence scoring >95%
5. Monitoring → Track performance and rollback if needed
```

---

## Technical Architecture Highlights

### Chat Tool Intelligence
- **Multi-Method Detection:** Script tags, DOM elements, iframes, JavaScript APIs
- **Vendor Classification:** LivePerson vs competitor vs no tool vs unknown
- **Change Tracking:** Installation, removal, replacement with timestamps
- **Opportunity Scoring:** Priority based on sales potential and territory fit

### Geographic Sales Intelligence
- **Territory Mapping:** ZIP code + radius with distance calculations
- **Market Analysis:** Competitor density, opportunity concentration
- **Custom Boundaries:** State, region, or uploaded territory lists
- **Proximity Optimization:** Sort prospects by drive time from sales rep

### Revenue Operations
- **Stripe Integration:** Real-time MRR tracking, subscription lifecycle management
- **Failed Payment Recovery:** Automated retry sequences with customer communication
- **Usage Analytics:** Feature adoption, user engagement, churn prediction
- **Growth Metrics:** Cohort analysis, LTV calculations, expansion revenue

### AI-Enhanced Rule Management
- **LLM-Powered Analysis:** GPT-4 generates robust selectors from DOM samples
- **Quality Assurance:** Automated testing, confidence scoring, stability assessment
- **Version Control:** Complete change history with one-click rollback
- **Performance Monitoring:** Real-time accuracy tracking across all detection rules

---

## Success Metrics & Business Impact

### Sales Rep Effectiveness
- **Speed to Insight:** Identify opportunities in <30 seconds (target achieved)
- **Lead Quality:** CRM conversion rate from exported opportunities >25%
- **Territory Coverage:** Monitor 100% of assigned geographic area
- **Alert Response:** Act on high-priority alerts within 2 business hours

### Business Growth
- **Revenue Growth:** Consistent MRR growth via new signups and plan upgrades
- **User Retention:** <5% monthly churn through valuable competitive intelligence
- **System Reliability:** 99.5%+ uptime for continuous territory monitoring
- **Detection Accuracy:** >95% success rate on vendor identification across all rules

### Operational Excellence
- **Scan Efficiency:** Process 10,000+ dealership scans daily with <3s average response
- **Rule Maintenance:** AI builder reduces CSS rule creation time by 80%
- **Customer Communication:** 95%+ email delivery rate with <0.5% spam complaints
- **Failed Payment Recovery:** >60% recovery rate through automated retry sequences

---

## Implementation Phases

### Phase 1: Core Sales Rep Workflow (MVP)
1. **Sales Rep Dashboard** - Essential daily change detection
2. **Geographic Reports** - ZIP + radius opportunity identification
3. **Basic Alerts** - Email notifications for critical changes
4. **Admin Overview** - Business metrics and user management

### Phase 2: Integration & Automation
1. **CRM Integration** - Salesforce/HubSpot lead export and task creation
2. **Advanced Detection** - CSS rule management with manual testing
3. **Slack/Teams Alerts** - Real-time team notifications
4. **Billing Operations** - Stripe integration for subscription management

### Phase 3: AI Enhancement & Scale
1. **AI Selector Builder** - LLM-powered rule generation from DOM samples
2. **Advanced Analytics** - User behavior insights and territory optimization
3. **Email Automation** - Template management and campaign analytics
4. **Enterprise Features** - White-label options and API extensibility

---

## File Organization

Each wireframe is self-contained with:
- **Primary job statement** - Clear user goal
- **Complete interface layouts** - Detailed visual specifications
- **Interaction patterns** - User flows and state management
- **Component specifications** - Reusable design elements
- **Edge case handling** - Error states and empty conditions

This structure ensures each wireframe serves a specific user need while maintaining consistency across the entire application through the shared design system.

The result is a focused, efficient chat tool sales enablement platform that transforms website monitoring data into actionable sales intelligence while providing robust business management capabilities for sustainable growth.