# DealerScope Wireframing Requirements

## Context
DealerScope is a **dashboard-style SaaS** that monitors **dealership websites** and surfaces vendor product activity.

**Audience:** automotive vendor sales representatives, marketing companies, and automotive groups.
**Target Users:** Sales reps for ANY automotive vendor (chat tools, CRM systems, analytics platforms, marketing tools, finance solutions, etc.)
**Not a CRM** — complements existing workflows.  

**Primary Objective:**  
In under 30 seconds, a user can answer:  
**“Which dealerships in my list just changed something on their website?”**

---

## User Types

### 1. Regular User (Automotive Vendor Sales Rep, Marketer, Auto Group)
- Tracks a custom list of dealerships (territory, group, or arbitrary).
- Monitors installs, replacements, and removals of ANY vendor products (their own company's products AND competitors).
- Runs reports (e.g., within 100 miles of a ZIP code).
- Filters by product category (e.g., chat tools, CRM systems, digital retailing, trade tools, inventory management, analytics, marketing tools, finance solutions).
- Triggers **Scan Now** for real-time updates.
- Receives **CRM alerts**, **Slack/Teams notifications**, and **daily/weekly email digests**.  

### 2. Admin (System Administrator)
- Oversees users, billing, products, vendors, dealerships, and integrations.  
- Sees org-level KPIs (users, revenue, churn).  
- Manages users (invites, resets, activity).  
- Manages vendors and their products + CSS selectors.  
- De-dupes and edits dealership data.  
- Manages Stripe billing and product pricing.  
- Sends system emails (password resets, onboarding).  
- Configures alerts/digests/integrations.  
- Uses **AI-assisted selector builder** to generate robust CSS/XPath rules.  

---

## Navigation Layout

### Top Bar (Global)
- Logo/app name  
- Notifications (alerts)  
- **Scan Now** (regular users)  
- Profile (settings, logout)  

### Left Rail — Regular User
- **Dashboard (Home)** — dealership list w/ status  
- **Dealerships** — manage tracked list  
- **Reports** — geo search + filters  
- **Alerts** — digest of recent changes  
- **Email Digest Settings** — configure frequency + categories  
- **Help / Docs**  

### Left Rail — Admin (Additional)
- **Users** — manage accounts/roles  
- **Billing** — Stripe plans, usage, pricing  
- **Vendors & Products** — manage vendors, products, CSS selectors  
- **Dealerships** — dedupe, edit info, manage data quality  
- **Scanning Rules** — selector builder + version history  
- **System Health** — logs, scan jobs, performance  
- **Integrations** — CRM, Slack, Webhooks, Email Digest  

---

## Key Wireframes

### Regular User
1. **Dashboard (Home)**  
   - Dealership table (Name | Products | Last Change | Status).  
   - Change indicators: Installed / Replaced / Removed.  
   - Filters (category, vendor, region, ZIP).  
   - Header: last scan timestamp + **Scan Now**.  

2. **Dealerships**  
   - Add/remove dealers manually, via CSV, or by group.  
   - Show chips/tags for groupings.  

3. **Reports**
   - Builder: ZIP + radius, category filter (chat tools, CRM systems, digital retailing, trade tools, inventory management, analytics, marketing tools, finance solutions).
   - Results: dealers with target products, competitor products, or missing products.
   - Actions: Save, Export CSV, Share.  

4. **Dealership Detail**  
   - Summary card (info, current stack, last scan).  
   - Timeline of historical product changes.  
   - Notes section.  

5. **Alerts & Digests**  
   - In-app feed of changes.  
   - Email digest setup: daily/weekly, time of day, categories.  
   - Preview of sample digest.  

---

### Admin
1. **Dashboard (Home)**  
   - KPIs: total users, MRR, new users, cancellations.  
   - Quick links: pending invites, system alerts.  

2. **Users**  
   - User list (name, email, role, status, last login).  
   - Actions: add/disable, reset password, resend invite.  
   - **User Detail Page**: profile, activity log, linked billing info.  

3. **Vendors & Products**  
   - Vendor list.  
   - Each vendor → multiple products.  
   - Each product → multiple CSS selectors/rules.  
   - Editable with version history.  

4. **Dealerships**  
   - Master list view.  
   - Tools: dedupe dealerships, edit incorrect data, add manually.  
   - Change log for edits.  

5. **Billing & Products (Stripe)**  
   - Manage pricing tiers/plans.  
   - Add/edit Stripe products.  
   - Subscription overview.  

6. **System Communications**  
   - Trigger password reset and account management emails.  
   - Email send log with status.  

7. **System Health**  
   - Scan jobs (success/fail/duration).  
   - Error logs + filters.  
   - Performance stats.  

8. **Integrations**  
   - CRM: configure webhook/API mapping.  
   - Slack/Teams: channel + event routing.  
   - Email digests: global defaults + per-user overrides.  

---

### Admin — AI-Assisted Selector Builder
- **Paste Element Input**: outerHTML/DOM snippet + optional URL.  
- **Generate Suggestions**: calls LLM with pre-loaded prompt.  
- **Suggestions Panel**: 3–6 candidate selectors (CSS/XPath/JS), with confidence, rationale, fragility notes.  
- **Test Results**: run candidates across sample URLs; show matches, failures, warnings (fragile selectors).  
- **Save**: choose 1–3 selectors → auto-save with versioning.  
- **Auto-Save**: approve all high-confidence selectors in one click.  
- **Version History**: rollback or view prior rules.  
- **Preview Panel**: matched DOM excerpts highlighted.  

---

## States to Show
- Empty (no dealerships/users/vendors).  
- Loading (scan running, report building).  
- Error (bad selector, failed scan).  
- No results (report returns none).  
- Integration disabled/misconfigured.  

---

## Acceptance Criteria
- **Regular User**:  
  - Can identify recent dealership changes at a glance.  
  - Can run geographic reports filtered by category.  
  - Can configure email digests and receive daily summaries.  
  - Can receive CRM/Slack alerts on changes.  

- **Admin**:  
  - Sees user/revenue metrics on login.  
  - Can manage users, vendors/products, dealerships, billing.  
  - Can send system emails.  
  - Can use **AI-assisted selector builder** to generate/test/save rules.  
  - Can configure integrations + digests.  
