# Sales Rep Dashboard - Product Change Detection

**Primary Job:** In under 30 seconds, answer "Which dealerships in my list just changed something?"

## Layout Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ TOP BAR                                                             │
│ [Logo] DealerScope        [🔔 3] [Scan Now] [Profile ▼] [Help]      │
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬───────────────────────────────────────────────────────────┐
│ LEFT NAV │ CONTENT PANE                                              │
│          │                                                           │
│ 📊 Dashboard│ ┌─ TRACKED DEALERSHIPS ─────────────────────────────────┐    │
│ 🏢 Dealerships│ │                                                     │    │
│ 📋 Reports  │ │ Last Scan: 2 hours ago [Scan Now] [Auto: 4x daily]   │    │
│ 🔔 Alerts   │ │                                                     │    │
│ 📧 Email Setup│ │ [Search...] [Product Category ▼] [Status ▼] [Region ▼] │    │
│ 📚 Help     │ │                                                     │    │
│              │ │ Showing 47 of 125 dealerships                       │    │
│              │ │                                                     │    │
│              │ │ [Dealership Table - See Below]                      │    │
│              │ └─────────────────────────────────────────────────────┘    │
│              │                                                           │
│              │ ┌─ RECENT CHANGES (LAST 24H) ──────────────────────────┐    │
│              │ │ 🔴 5 new changes | 🟡 3 opportunities                 │    │
│              │ │ [Change Activity Feed - See Below]                   │    │
│              │ └─────────────────────────────────────────────────────┘    │
└──────────┴───────────────────────────────────────────────────────────┘
```

## Dealership Table (Product Focus)
```
┌─┬──────────────────────┬─────────────────────┬──────────────┬─────────────┬────────────┐
│☑│ Dealership Name      │ Tracked Products    │ Last Change  │ Status      │ Actions    │
├─┼──────────────────────┼─────────────────────┼──────────────┼─────────────┼────────────┤
│☑│ Miller Honda         │ 🔴 YourCRM →        │ 2h ago       │ 🔴 Changed  │ [View]     │
│ │ Austin, TX (78701)   │ CompetitorCRM       │              │             │ [Note]     │
├─┼──────────────────────┼─────────────────────┼──────────────┼─────────────┼────────────┤
│☑│ City Toyota          │ ❌ No CRM System    │ 1 day ago    │ 🟡 Opportunity│ [Contact] │
│ │ Dallas, TX (75201)   │                     │              │             │ [Note]     │
├─┼──────────────────────┼─────────────────────┼──────────────┼─────────────┼────────────┤
│☑│ West Ford            │ 🟢 YourProduct      │ 3 days ago   │ ⚡ Stable   │ [View]     │
│ │ Houston, TX (77001)  │ (since Jan 2024)    │              │             │ [Note]     │
├─┼──────────────────────┼─────────────────────┼──────────────┼─────────────┼────────────┤
│☑│ Elite Chevy          │ 🔄 Scanning...      │ --           │ 🔄 Scanning │ [Wait]     │
│ │ San Antonio, TX      │                     │              │             │            │
├─┼──────────────────────┼─────────────────────┼──────────────┼─────────────┼────────────┤
│☑│ Premium Auto         │ ❌ Site Error       │ 2 days ago   │ ❌ Error    │ [Retry]    │
│ │ Fort Worth, TX       │                     │              │             │ [Report]   │
└─┴──────────────────────┴─────────────────────┴──────────────┴─────────────┴────────────┘
```

## Filter Bar Details
```
┌─────────────────────────────────────────────────────────────────────┐
│ FILTERS & SEARCH                                                    │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search dealership name or location...                        │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────────┐ │
│ │ Product Type ▼  │ │ Status ▼        │ │ Region ▼                │ │
│ │ All Products    │ │ All             │ │ All                     │ │
│ │ Chat Tools      │ │ Changed         │ │ Texas                   │ │
│ │ CRM Systems     │ │ Opportunity     │ │ California              │ │
│ │ Digital Retail  │ │ Stable          │ │ Florida                 │ │
│ │ Trade Tools     │ │ Error           │ │ New York                │ │
│ │ Inventory Mgmt  │ │ Scanning        │ │ Custom ZIP...           │ │
│ │ Analytics       │ │                 │ │                         │ │
│ │ Marketing       │ │                 │ │                         │ │
│ │ Finance         │ │                 │ │                         │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────────────┘ │
│                                                                     │
│ [Clear Filters] [Save Filter Set]                                  │
└─────────────────────────────────────────────────────────────────────┘
```

## Recent Changes Feed
```
┌─────────────────────────────────────────────────────────────────────┐
│ RECENT CHANGES (LAST 24 HOURS)                                     │
│                                                                     │
│ 🔴 REMOVED: LivePerson at Miller Honda (Austin, TX)                │
│ ├─ 2 hours ago | Previously installed since Jan 2024              │
│ ├─ 🎯 OPPORTUNITY: No chat tool currently detected                 │
│ └─ [Contact Dealer] [Add Note] [Set Reminder]                     │
│                                                                     │
│ 🟡 INSTALLED: Intercom at Miller Honda (Austin, TX)                │
│ ├─ 2 hours ago | Competitor tool detected                          │
│ ├─ ⚠️ ALERT: Customer switched to competitor                       │
│ └─ [Contact Dealer] [Add Note] [Escalate]                         │
│                                                                     │
│ 🟢 REMOVED: Zendesk at City Toyota (Dallas, TX)                    │
│ ├─ 6 hours ago | No replacement detected yet                       │
│ ├─ 🎯 OPPORTUNITY: Potential new customer                          │
│ └─ [Contact Dealer] [Add Note] [Schedule Call]                    │
│                                                                     │
│ 🔴 NEW OPPORTUNITY: Downtown Ford (Houston, TX)                     │
│ ├─ 8 hours ago | No chat tool detected on new scan                │
│ ├─ 🎯 OPPORTUNITY: Fresh lead for outreach                         │
│ └─ [Contact Dealer] [Add Note] [Research]                         │
│                                                                     │
│ [Show All Changes] [Mark as Reviewed] [Export Feed]                │
└─────────────────────────────────────────────────────────────────────┘
```

## Quick Action Buttons
```
┌─────────────────────────────────────────────────────────────────────┐
│ BULK ACTIONS (when dealerships selected)                           │
│                                                                     │
│ Selected: 3 dealerships                                            │
│                                                                     │
│ [Contact All] [Add Bulk Note] [Export to CRM] [Schedule Follow-up] │
│ [Remove from List] [Change Priority] [Set Alerts]                  │
└─────────────────────────────────────────────────────────────────────┘
```

## Scan Status Widget
```
┌─────────────────────────────────────────────────────────────────────┐
│ SCAN STATUS                                                         │
│                                                                     │
│ ⚡ Last Full Scan: March 15, 2024 at 2:47 PM                       │
│ 🔄 Auto Scan: Every 6 hours (next: 8:47 PM)                        │
│                                                                     │
│ Recent Performance:                                                 │
│ • 125 dealerships scanned                                          │
│ • 5 changes detected                                               │
│ • 3 opportunities identified                                       │
│ • Avg scan time: 2.3 seconds                                      │
│                                                                     │
│ [Scan Now] [Change Frequency] [View History]                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Features

### Status Indicators
- **🔴 Changed**: Recent vendor tool change detected
- **🟡 Opportunity**: No chat tool or competitor detected
- **⚡ Stable**: Has desired tool, no recent changes
- **🔄 Scanning**: Currently being scanned
- **❌ Error**: Unable to access website

### Product Categories
- **Chat Tools**: LivePerson, Intercom, Zendesk (communication platforms)
- **CRM Systems**: Customer relationship management platforms
- **Digital Retailing**: Online showrooms, digital financing, e-commerce
- **Trade Tools**: Vehicle appraisal, trade valuation, ICO platforms
- **Inventory Management**: Stock management, merchandising, pricing
- **Analytics**: Web analytics and tracking tools
- **Marketing Tools**: Email marketing, automation platforms
- **Finance Solutions**: Payment processing, financing tools

### Quick Actions
- **Contact Dealer**: Launches CRM contact flow
- **Add Note**: Quick note-taking for follow-up
- **Set Reminder**: Schedule follow-up tasks
- **Export to CRM**: Push lead to sales pipeline

## States

### Empty State (New User)
```
┌─────────────────────────────────────────────────┐
│                 🏢                              │
│         No Dealerships Tracked Yet              │
│                                                 │
│   Start monitoring dealerships to track         │
│   chat tool installations and changes           │
│                                                 │
│         [Add Your First Dealerships]           │
│                                                 │
│   💡 Pro tip: Import your territory list or     │
│       add high-value prospects first            │
└─────────────────────────────────────────────────┘
```

### Scanning State
```
┌─────────────────────────────────────────────────┐
│ 🔄 Scanning Your Dealerships...                 │
│                                                 │
│ Progress: 87 of 125 dealerships complete        │
│ ████████████████████░░░░ 70% complete           │
│                                                 │
│ Currently scanning: Elite Motors (Austin, TX)   │
│ ETA: 2 minutes remaining                        │
│                                                 │
│ 🎯 Found 3 new opportunities so far             │
└─────────────────────────────────────────────────┘
```

### Error State
```
┌─────────────────────────────────────────────────┐
│ ⚠️ Some Dealerships Couldn't Be Scanned         │
│                                                 │
│ 8 dealerships had connection issues:            │
│ • Premium Auto (website down)                   │
│ • Miller Honda (temporary block)                │
│ • City Toyota (changed domain)                  │
│ • ... 5 more                                    │
│                                                 │
│ These will be retried automatically in 1 hour  │
│                                                 │
│         [Retry Now] [View All Errors]           │
└─────────────────────────────────────────────────┘
```

### High Activity State
```
┌─────────────────────────────────────────────────┐
│ 🚨 High Activity Alert                          │
│                                                 │
│ 12 changes detected in the last 24 hours!       │
│                                                 │
│ Breakdown:                                      │
│ • 5 new opportunities (no chat tool)           │
│ • 3 competitor installations                    │
│ • 2 LivePerson removals                        │
│ • 2 unknown tool installations                 │
│                                                 │
│         [Review All Changes]                    │
│         [Send to CRM] [Export Report]           │
└─────────────────────────────────────────────────┘
```