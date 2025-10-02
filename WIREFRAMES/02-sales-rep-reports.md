# Sales Rep Reports - Geographic Opportunity Builder

**Primary Job:** Find chat tool opportunities within geographic areas and specific vendor criteria

## Layout Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ TOP BAR                                                             │
│ [Logo] DealerScope Pro    [🔔 3] [Scan Now] [Profile ▼] [Help]      │
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬───────────────────────────────────────────────────────────┐
│ LEFT NAV │ CONTENT PANE                                              │
│          │                                                           │
│ 📊 Dashboard│ ┌─ OPPORTUNITY BUILDER ─────────────────────────────────┐    │
│ 🏢 Dealerships│ │                                                     │    │
│ 📋 Reports  │ │ Build Custom Report                                  │    │
│ 🔔 Alerts   │ │                                                     │    │
│ 📧 Email Setup│ │ [Report Builder - See Below]                        │    │
│ 📚 Help     │ │                                                     │    │
│              │ └─────────────────────────────────────────────────────┘    │
│              │                                                           │
│              │ ┌─ SAVED REPORTS ────────────────────────────────────────┐  │
│              │ │ [My Saved Reports - See Below]                       │  │
│              │ └─────────────────────────────────────────────────────┘    │
└──────────┴───────────────────────────────────────────────────────────┘
```

## Report Builder Interface
```
┌─────────────────────────────────────────────────────────────────────┐
│ OPPORTUNITY BUILDER                                                 │
│                                                                     │
│ ┌─ Step 1: Geographic Filter ───────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ○ All Locations                                                   │ │
│ │ ● ZIP Code + Radius                                               │ │
│ │   ┌─────────────────┐ ┌─────────────────────────────────────────┐ │ │
│ │   │ ZIP Code        │ │ Radius                                  │ │ │
│ │   │ 78701          │ │ 100 miles ▼                            │ │ │
│ │   └─────────────────┘ └─────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ○ State/Region                                                    │ │
│ │   ┌─────────────────────────────────────────────────────────────┐ │ │
│ │   │ Texas ▼                                                     │ │ │
│ │   └─────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ○ Custom List                                                     │ │
│ │   ┌─────────────────────────────────────────────────────────────┐ │ │
│ │   │ Upload CSV or select from saved dealership groups...        │ │ │
│ │   └─────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Step 2: Chat Tool Filter ────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Show dealerships with:                                            │ │
│ │                                                                   │ │
│ │ ☑️ No Chat Tool (primary opportunities)                           │ │
│ │ ☑️ Competitor Chat Tools:                                          │ │
│ │    ☑️ Intercom                                                     │ │
│ │    ☑️ Zendesk Chat                                                 │ │
│ │    ☑️ Tidio                                                        │ │
│ │    ☑️ Drift                                                        │ │
│ │    ☑️ Other/Unknown chat tools                                     │ │
│ │                                                                   │ │
│ │ Exclude dealerships with:                                         │ │
│ │ ☑️ LivePerson (our product)                                        │ │
│ │ ☐ Recently contacted (last 30 days)                              │ │
│ │ ☐ Do Not Contact list                                            │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Step 3: Additional Filters ──────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Dealership Size:                                                  │ │
│ │ ○ All sizes  ● Small-Medium only  ○ Large only  ○ Enterprise     │ │
│ │                                                                   │ │
│ │ Brands (optional):                                                │ │
│ │ ☐ Honda  ☐ Toyota  ☐ Ford  ☐ Chevrolet  ☐ Nissan  ☐ BMW        │ │
│ │                                                                   │ │
│ │ Recent Activity:                                                  │ │
│ │ ○ Any  ● Changed in last 30 days  ○ Stable for 90+ days          │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Preview Results] [Clear All] [Run Report]                         │
└─────────────────────────────────────────────────────────────────────┘
```

## Report Results View
```
┌─────────────────────────────────────────────────────────────────────┐
│ OPPORTUNITY REPORT RESULTS                                          │
│                                                                     │
│ ┌─ Report Summary ───────────────────────────────────────────────────┐ │
│ │ Austin, TX (100 mile radius) • No Chat + Competitors             │ │
│ │ Generated: March 15, 2024 at 3:45 PM                             │ │
│ │                                                                   │ │
│ │ 🎯 47 Total Opportunities Found                                   │ │
│ │ • 23 with no chat tool (high priority)                           │ │
│ │ • 18 with competitor tools (conversion opps)                     │ │
│ │ • 6 recently removed LivePerson (win-back)                       │ │
│ │                                                                   │ │
│ │ [Save Report] [Export CSV] [Export to CRM] [Schedule Email]      │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Filter Results ───────────────────────────────────────────────────┐ │
│ │ [Search...] [Priority ▼] [Brand ▼] [Distance ▼] [Contact Status ▼] │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Results Table:                                                      │
│ ┌─┬──────────────────────┬─────────────────┬──────────┬──────────────┐ │
│ │☑│ Dealership           │ Current Chat    │ Priority │ Actions      │ │
│ ├─┼──────────────────────┼─────────────────┼──────────┼──────────────┤ │
│ │☑│ Austin Honda Center  │ ❌ None         │ 🟢 High  │ [Contact]    │ │
│ │ │ 📍 5.2 mi • Honda    │ (Never had)     │          │ [Note] [CRM] │ │
│ ├─┼──────────────────────┼─────────────────┼──────────┼──────────────┤ │
│ │☑│ Round Rock Toyota    │ 🔴 Intercom     │ 🟡 Medium│ [Contact]    │ │
│ │ │ 📍 12.8 mi • Toyota  │ (Since Jan 24)  │          │ [Note] [CRM] │ │
│ ├─┼──────────────────────┼─────────────────┼──────────┼──────────────┤ │
│ │☑│ Cedar Park Ford      │ ❌ None         │ 🟢 High  │ [Contact]    │ │
│ │ │ 📍 18.3 mi • Ford    │ (Removed Drift) │          │ [Note] [CRM] │ │
│ ├─┼──────────────────────┼─────────────────┼──────────┼──────────────┤ │
│ │☑│ Lakeway Chevrolet    │ ⚠️ Unknown Tool │ 🟡 Medium│ [Research]   │ │
│ │ │ 📍 22.1 mi • Chevy   │ (Need analysis) │          │ [Note] [CRM] │ │
│ └─┴──────────────────────┴─────────────────┴──────────┴──────────────┘ │
│                                                                     │
│ Bulk Actions (12 selected):                                        │
│ [Contact All] [Export Selected] [Add to CRM] [Tag as High Priority] │
└─────────────────────────────────────────────────────────────────────┘
```

## Saved Reports Section
```
┌─────────────────────────────────────────────────────────────────────┐
│ MY SAVED REPORTS                                                    │
│                                                                     │
│ ┌─ Austin Territory (Weekly) ────────────────────────────────────────┐ │
│ │ ZIP: 78701, 100mi • No Chat + Competitors                        │ │
│ │ Last run: 2 days ago • 47 opportunities                          │ │
│ │ Auto-email: Mondays 8 AM to john.doe@liveperson.com              │ │
│ │                                    [Run Now] [Edit] [Delete]     │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Texas Honda Dealers ──────────────────────────────────────────────┐ │
│ │ State: Texas • Brand: Honda • No Chat only                       │ │
│ │ Last run: 1 week ago • 23 opportunities                          │ │
│ │ Auto-email: None                                                  │ │
│ │                                    [Run Now] [Edit] [Delete]     │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Competitor Analysis ──────────────────────────────────────────────┐ │
│ │ All locations • Intercom + Zendesk only                          │ │
│ │ Last run: 3 days ago • 156 conversion targets                    │ │
│ │ Auto-email: None                                                  │ │
│ │                                    [Run Now] [Edit] [Delete]     │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Create New Report] [Import Report Template]                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Save Report Modal
```
┌─────────────────────────────────────────────────────────────────────┐
│                          SAVE REPORT                               │
│                                                                     │
│ Report Details                                                      │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Report Name *                                                   │ │
│ │ Austin Territory Weekly                                         │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Description (optional)                                          │ │
│ │ Weekly opportunity scan for Austin territory prospects          │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Email Automation                                                    │
│ ☑️ Email me this report automatically                               │ │
│                                                                     │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────────┐ │
│ │ Frequency       │ │ Day             │ │ Time                    │ │
│ │ Weekly ▼        │ │ Monday ▼        │ │ 8:00 AM ▼               │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Send to email                                                   │ │
│ │ john.doe@liveperson.com                                         │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Email Format                                                        │
│ ○ Summary only (count + top 5 opportunities)                       │
│ ● Full report (all results in email)                               │
│ ○ Link only (email with link to view online)                       │
│                                                                     │
│ ☑️ Include "no changes" emails (send even if no new opportunities)  │ │
│                                                                     │
│                           [Cancel] [Save Report]                   │
└─────────────────────────────────────────────────────────────────────┘
```

## Export Options Modal
```
┌─────────────────────────────────────────────────────────────────────┐
│                         EXPORT REPORT                              │
│                                                                     │
│ Export Format                                                       │
│ ○ CSV File (Excel compatible)                                       │
│ ● CRM Integration                                                   │
│ ○ PDF Report                                                        │
│                                                                     │
│ CRM Integration Settings                                            │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ CRM System                                                      │ │
│ │ Salesforce ▼                                                    │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Lead Source                                                     │ │
│ │ DealerScope - Chat Tool Opportunity                             │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Assigned To                                                     │ │
│ │ John Doe (Auto-assign to me) ▼                                  │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Options                                                             │
│ ☑️ Create individual lead for each dealership                       │ │
│ ☑️ Include dealership website and contact info                      │ │
│ ☑️ Add priority level based on opportunity type                     │ │
│ ☐ Send email notification when export completes                    │ │
│                                                                     │
│ Preview: 47 dealerships will be exported as leads                  │
│                                                                     │
│                           [Cancel] [Export to CRM]                 │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Features

### Geographic Targeting
- **ZIP + Radius**: Precise territory mapping
- **State/Region**: Broader market analysis
- **Custom Lists**: Upload specific dealer sets
- **Distance Calculation**: Show proximity to sales rep location

### Chat Tool Intelligence
- **Opportunity Prioritization**: No tool > Competitor > Unknown
- **Vendor-Specific Filtering**: Focus on specific competitors
- **Historical Context**: Recent changes and installation dates
- **Win-Back Identification**: Previous customers who switched

### CRM Integration
- **One-Click Export**: Push opportunities directly to sales pipeline
- **Lead Enrichment**: Include website data and chat tool history
- **Auto-Assignment**: Route leads to appropriate sales reps
- **Progress Tracking**: Track which opportunities have been contacted

### Automation Features
- **Scheduled Reports**: Weekly/monthly automated delivery
- **Email Formats**: Summary, full report, or link options
- **Smart Filtering**: Exclude recently contacted dealerships
- **Change Alerts**: Get notified when report results change significantly

## States

### Building Report
```
┌─────────────────────────────────────────────────┐
│ 🔍 Building your opportunity report...          │
│                                                 │
│ Scanning dealerships in 100-mile radius        │
│ around Austin, TX (78701)                      │
│                                                 │
│ Progress: 234 of 456 dealerships               │
│ ████████████████░░░░░░░░ 51% complete           │
│                                                 │
│ Found 23 opportunities so far...               │
│                                                 │
│ ETA: 3 minutes remaining                        │
└─────────────────────────────────────────────────┘
```

### No Results
```
┌─────────────────────────────────────────────────┐
│                 🎯                              │
│         No Opportunities Found                  │
│                                                 │
│   Your search criteria didn't match any        │
│   dealerships in the selected area             │
│                                                 │
│   Try expanding your radius or adjusting       │
│   your chat tool filters                       │
│                                                 │
│         [Modify Search] [View All Dealers]      │
└─────────────────────────────────────────────────┘
```

### High Opportunity Count
```
┌─────────────────────────────────────────────────┐
│ 🚀 High Opportunity Alert!                      │
│                                                 │
│ Found 156 opportunities in your search          │
│                                                 │
│ This is higher than usual for this area.       │
│ Consider prioritizing by:                       │
│ • Distance (closest first)                     │
│ • Dealership size (larger prospects)           │
│ • Recent activity (fresh opportunities)        │
│                                                 │
│         [Prioritize Results] [Export All]       │
└─────────────────────────────────────────────────┘
```