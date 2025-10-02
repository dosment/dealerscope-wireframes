# Admin Detection Rules - Vendor & CSS Selector Management

**Primary Job:** Manage vendor products and maintain CSS selectors for accurate product detection

## Layout Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ TOP BAR                                                             │
│ [Logo] DealerScope Pro    [System Health: ⚡] [Profile ▼] [⚙️] [Help]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬───────────────────────────────────────────────────────────┐
│ ADMIN NAV│ CONTENT PANE                                              │
│          │                                                           │
│ 📊 Dashboard│ ┌─ VENDOR MANAGEMENT ───────────────────────────────────┐    │
│ 👥 Users    │ │                                                     │    │
│ 🏢 Vendors  │ │ [Vendor List] [Product Management] [CSS Rules]      │    │
│ 🏪 Dealerships│ │                                                     │    │
│ 💳 Billing  │ │ [Vendor/Product Tree - See Below]                   │    │
│ 📧 Communications│ └─────────────────────────────────────────────────┘    │
│ 🔧 System Health│                                                       │
│              │ ┌─ CSS RULE EDITOR ────────────────────────────────────────┐  │
│              │ │ [Rule Management Interface - See Below]              │  │
│              │ └─────────────────────────────────────────────────────┘    │
└──────────┴───────────────────────────────────────────────────────────┘
```

## Vendor/Product Hierarchy
```
┌─────────────────────────────────────────────────────────────────────┐
│ VENDOR & PRODUCT MANAGEMENT                                         │
│                                                                     │
│ [Add New Vendor +] [Import Vendor List] [Export All] [Bulk Edit]    │
│                                                                     │
│ ▼ Chat Tools (5 vendors, 12 products)                              │
│   ├─ ▼ LivePerson                                   [Edit] [Delete] │
│   │   ├─ LivePerson Chat Widget (3 CSS rules)       [Edit] [Test]  │
│   │   ├─ LivePerson Mobile SDK (2 CSS rules)        [Edit] [Test]  │
│   │   └─ LivePerson Voice (1 CSS rule)              [Edit] [Test]  │
│   │                                                                 │
│   ├─ ▼ Intercom                                     [Edit] [Delete] │
│   │   ├─ Intercom Chat Widget (4 CSS rules)         [Edit] [Test]  │
│   │   └─ Intercom Help Center (2 CSS rules)         [Edit] [Test]  │
│   │                                                                 │
│   ├─ ▼ Zendesk                                      [Edit] [Delete] │
│   │   ├─ Zendesk Chat (3 CSS rules)                 [Edit] [Test]  │
│   │   ├─ Zendesk Talk (2 CSS rules)                 [Edit] [Test]  │
│   │   └─ Zendesk Guide (1 CSS rule)                 [Edit] [Test]  │
│   │                                                                 │
│   ├─ ► Drift (2 products)                           [Edit] [Delete] │
│   └─ ► Other Chat Tools (8 products)                [Edit] [Delete] │
│                                                                     │
│ ▼ CRM Systems (3 vendors, 8 products)                              │
│   ├─ ▼ Salesforce                                   [Edit] [Delete] │
│   │   ├─ Salesforce CRM (2 CSS rules)               [Edit] [Test]  │
│   │   └─ Salesforce Service Cloud (3 CSS rules)     [Edit] [Test]  │
│   │                                                                 │
│   ├─ ► HubSpot (3 products)                         [Edit] [Delete] │
│   └─ ► Pipedrive (1 product)                        [Edit] [Delete] │
│                                                                     │
│ ▶ Analytics Tools (4 vendors, 15 products)                         │
│ ▶ Marketing Tools (6 vendors, 23 products)                         │
│ ▶ Finance Tools (3 vendors, 7 products)                            │
└─────────────────────────────────────────────────────────────────────┘
```

## CSS Rule Editor Interface
```
┌─────────────────────────────────────────────────────────────────────┐
│ CSS RULE EDITOR: LivePerson Chat Widget                            │
│                                                                     │
│ ┌─ Product Information ──────────────────────────────────────────────┐ │
│ │ Vendor: LivePerson                                              │ │
│ │ Product: Chat Widget                                            │ │
│ │ Category: Chat Tools                                            │ │
│ │ Priority: High (our product)                                    │ │
│ │ Status: ⚡ Active                                               │ │
│ │ Last Updated: March 10, 2024 by admin@dealerscope.com          │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Detection Rules ──────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Rule 1: Script Tag Detection                                     │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ script[src*="liveperson.net"],                                 │ │ │
│ │ │ script[src*="lpcdn.com"],                                      │ │ │
│ │ │ script[data-service*="liveperson"]                             │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │ Confidence: High | Match Count: Must find ≥2 | Success: 98.5%    │ │
│ │                                      [Test Rule] [Edit] [Delete] │ │
│ │                                                                   │ │
│ │ Rule 2: DOM Element Detection                                    │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ #lpChat, .lpChat, [data-lp-event],                            │ │ │
│ │ │ .LPMcontainer, #LPMcontainer                                   │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │ Confidence: Medium | Match Count: Must find ≥1 | Success: 95.2%  │ │
│ │                                      [Test Rule] [Edit] [Delete] │ │
│ │                                                                   │ │
│ │ Rule 3: Meta Tag Detection                                       │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ meta[name*="liveperson"],                                      │ │ │
│ │ │ meta[content*="liveperson.net"]                                │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │ Confidence: Low | Match Count: Must find ≥1 | Success: 67.3%     │ │
│ │                                      [Test Rule] [Edit] [Delete] │ │
│ │                                                                   │ │
│ │ [Add New Rule +]                                                  │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Detection Logic ──────────────────────────────────────────────────┐ │
│ │ Overall Confidence Calculation:                                   │ │
│ │ ● Require ANY rule to match (OR logic)                           │ │
│ │ ○ Require ALL rules to match (AND logic)                         │ │
│ │ ○ Custom scoring (weighted average)                              │ │
│ │                                                                   │ │
│ │ Final Confidence: High (if ≥1 high confidence rule matches)      │ │
│ │ Page Types: ☑️ All ☑️ Homepage ☑️ Contact ☐ Inventory ☐ Service │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Save Rules] [Test All Rules] [View History] [Clone to Product]    │
└─────────────────────────────────────────────────────────────────────┘
```

## Rule Testing Interface
```
┌─────────────────────────────────────────────────────────────────────┐
│ CSS RULE TESTING TOOL                                               │
│                                                                     │
│ ┌─ Test Configuration ───────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Test Target:                                                      │ │
│ │ ● Single URL                                                      │ │
│ │ ○ Bulk URL list                                                   │ │
│ │ ○ Known positive sites (has LivePerson)                          │ │
│ │ ○ Known negative sites (no LivePerson)                           │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Test URL                                                        │ │ │
│ │ │ https://www.millerautohonda.com                                 │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Test Options:                                                     │ │
│ │ ☑️ Test all rules for this product                                 │ │
│ │ ☑️ Show detailed match results                                     │ │
│ │ ☑️ Include page source preview                                     │ │
│ │ ☐ Test on mobile viewport                                         │ │
│ │                                                                   │ │
│ │                                                [Run Test]         │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Test Results ─────────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ✅ LIVEPERSON DETECTED - High Confidence                          │ │
│ │                                                                   │ │
│ │ Rule 1: Script Tag Detection ✅                                   │ │
│ │ └─ Found: script[src="//server.iad.liveperson.net/hc/88203..."]  │ │
│ │ └─ Found: script[src="//lpcdn.com/widget/bootstrap.js"]           │ │
│ │ └─ Confidence: High (2 of 2 required matches)                    │ │
│ │                                                                   │ │
│ │ Rule 2: DOM Element Detection ✅                                  │ │
│ │ └─ Found: <div id="LPMcontainer-1647875432618-0">                 │ │
│ │ └─ Found: <div class="lpChat lpChat_open">                        │ │
│ │ └─ Confidence: High (2 of 1 required matches)                    │ │
│ │                                                                   │ │
│ │ Rule 3: Meta Tag Detection ❌                                     │ │
│ │ └─ No matches found                                               │ │
│ │ └─ Confidence: None                                               │ │
│ │                                                                   │ │
│ │ Overall Result: POSITIVE MATCH (High Confidence)                  │ │
│ │ Scan Duration: 2.3 seconds                                        │ │
│ │                                                                   │ │
│ │ ┌─ Page Source Preview ─────────────────────────────────────────┐   │ │
│ │ │ <script src="//server.iad.liveperson.net/hc/88203432/...">   │   │ │
│ │ │ <div id="LPMcontainer-1647875432618-0" class="LPMcontainer"> │   │ │
│ │ │ <div class="lpChat lpChat_open" data-lp-event="click">        │   │ │
│ │ │ ...                                                           │   │ │
│ │ └───────────────────────────────────────────────────────────────┘   │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Test Another URL] [Save Results] [Update Rules] [Close]           │
└─────────────────────────────────────────────────────────────────────┘
```

## Bulk Testing Results
```
┌─────────────────────────────────────────────────────────────────────┐
│ BULK RULE TESTING RESULTS                                           │
│                                                                     │
│ Test Set: LivePerson Chat Widget Rules                             │
│ URLs Tested: 50 (25 positive, 25 negative)                         │
│ Test Duration: 3 minutes 45 seconds                                │
│                                                                     │
│ ┌─ Overall Performance ──────────────────────────────────────────────┐ │
│ │ Accuracy: 96.0% (48/50 correct classifications)                  │ │
│ │ Precision: 96.0% (24/25 true positives identified)               │ │
│ │ Recall: 96.0% (24/25 actual positives detected)                  │ │
│ │ False Positives: 1 (4.0%)                                        │ │
│ │ False Negatives: 1 (4.0%)                                        │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Detailed Results ─────────────────────────────────────────────────┐ │
│ │ ✅ True Positives (24):                                           │ │
│ │ • millerautohonda.com - High confidence                          │ │
│ │ • cityToyota.net - High confidence                               │ │
│ │ • westford.com - Medium confidence                               │ │
│ │ • ... 21 more [View All]                                         │ │
│ │                                                                   │ │
│ │ ❌ False Positives (1):                                           │ │
│ │ • competitors-chat.com - Detected LivePerson incorrectly         │ │
│ │   Issue: Generic lpChat class name collision                     │ │
│ │   Recommendation: Add more specific selectors                    │ │
│ │                                                                   │ │
│ │ ❌ False Negatives (1):                                           │ │
│ │ • premium-auto.net - Has LivePerson but not detected             │ │
│ │   Issue: Uses custom implementation, different DOM structure     │ │
│ │   Recommendation: Add fallback detection rule                    │ │
│ │                                                                   │ │
│ │ ✅ True Negatives (24):                                           │ │
│ │ • intercom-test.com, zendesk-site.net, drift-demo.com...         │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Rule Performance Breakdown ───────────────────────────────────────┐ │
│ │ Rule 1 (Script Tags): 92% success rate                           │ │
│ │ Rule 2 (DOM Elements): 98% success rate                          │ │
│ │ Rule 3 (Meta Tags): 45% success rate (consider removing)         │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Recommendations:                                                    │
│ • Deploy rules (accuracy above 95% threshold)                      │
│ • Consider removing Rule 3 (low performance)                       │
│ • Add fallback rule for custom implementations                     │
│                                                                     │
│ [Deploy Rules] [Fix Issues] [Export Report] [Run Again]            │
└─────────────────────────────────────────────────────────────────────┘
```

## Version History & Rollback
```
┌─────────────────────────────────────────────────────────────────────┐
│ RULE VERSION HISTORY: LivePerson Chat Widget                       │
│                                                                     │
│ ┌─┬──────────────┬─────────────────┬──────────────┬─────────────────┐ │
│ │#│ Date         │ Changed By      │ Changes      │ Performance     │ │
│ ├─┼──────────────┼─────────────────┼──────────────┼─────────────────┤ │
│ │5│ Mar 15, 2024 │ admin@dealer... │ Added Rule 3 │ 96.0% accuracy  │ │
│ │ │ 2:30 PM      │ scope.com       │ (meta tags)  │ (current)       │ │
│ │ │              │                 │              │ [Current]       │ │
│ ├─┼──────────────┼─────────────────┼──────────────┼─────────────────┤ │
│ │4│ Mar 10, 2024 │ tech@dealer...  │ Updated      │ 94.2% accuracy  │ │
│ │ │ 9:15 AM      │ scope.com       │ Script URLs  │                 │ │
│ │ │              │                 │              │ [Rollback]      │ │
│ ├─┼──────────────┼─────────────────┼──────────────┼─────────────────┤ │
│ │3│ Feb 28, 2024 │ admin@dealer... │ Added DOM    │ 91.8% accuracy  │ │
│ │ │ 4:45 PM      │ scope.com       │ selectors    │                 │ │
│ │ │              │                 │              │ [Rollback]      │ │
│ ├─┼──────────────┼─────────────────┼──────────────┼─────────────────┤ │
│ │2│ Feb 15, 2024 │ admin@dealer... │ Fixed typo   │ 89.5% accuracy  │ │
│ │ │ 11:30 AM     │ scope.com       │ in selector  │                 │ │
│ │ │              │                 │              │ [Rollback]      │ │
│ ├─┼──────────────┼─────────────────┼──────────────┼─────────────────┤ │
│ │1│ Feb 1, 2024  │ system@dealer...│ Initial      │ 87.2% accuracy  │ │
│ │ │ 10:00 AM     │ scope.com       │ creation     │                 │ │
│ │ │              │                 │              │ [Rollback]      │ │
│ └─┴──────────────┴─────────────────┴──────────────┴─────────────────┘ │
│                                                                     │
│ Change Notes for Version 5:                                        │
│ "Added meta tag detection to catch edge cases where LivePerson     │
│ is referenced in page metadata. Initial testing shows promise      │
│ but may need refinement."                                          │
│                                                                     │
│ [View Diff] [Clone Version] [Export History]                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Add New Vendor/Product
```
┌─────────────────────────────────────────────────────────────────────┐
│                        ADD NEW PRODUCT                             │
│                                                                     │
│ ┌─ Basic Information ────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─────────────────┐ ┌─────────────────────────────────────────────┐ │ │
│ │ │ Vendor          │ │ Product Name                                │ │ │
│ │ │ Intercom ▼      │ │ Intercom Resolution Bot                     │ │ │
│ │ └─────────────────┘ └─────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────────┐ │ │
│ │ │ Category        │ │ Priority        │ │ Status                  │ │ │
│ │ │ Chat Tools ▼    │ │ High ▼          │ │ Active ▼                │ │ │
│ │ └─────────────────┘ └─────────────────┘ └─────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Description                                                     │ │ │
│ │ │ Intercom's automated resolution bot for customer service       │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Initial CSS Rules ────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ☑️ Start with template rules for Intercom products                 │ │
│ │ ☑️ Copy rules from similar product: Intercom Chat Widget           │ │
│ │ ☐ Create rules from scratch                                       │ │
│ │                                                                   │ │
│ │ Template will include:                                            │ │
│ │ • Common Intercom script detection                                │ │
│ │ • Standard DOM element patterns                                   │ │
│ │ • Generic Intercom identifiers                                   │ │
│ │                                                                   │ │
│ │ ⚠️ Rules will need testing and refinement after creation          │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Vendor Management ────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ○ Add to existing vendor: Intercom                               │ │
│ │ ● Create new vendor                                               │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ New Vendor Name                                                 │ │ │
│ │ │ CustomChatBot Inc.                                              │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Vendor Description                                              │ │ │
│ │ │ Emerging chat bot platform for automotive dealers              │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│                     [Cancel] [Create Product]                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Features

### Hierarchical Organization
- **Vendor Groups**: Organize by business category
- **Product Lines**: Multiple products per vendor
- **Rule Sets**: Multiple detection rules per product
- **Version Control**: Track changes with rollback capability

### Advanced Rule Testing
- **Single URL Testing**: Quick validation of rules
- **Bulk Testing**: Comprehensive accuracy assessment
- **Performance Metrics**: Precision, recall, accuracy tracking
- **False Positive/Negative Analysis**: Detailed failure investigation

### Rule Management
- **Multiple Detection Methods**: Scripts, DOM elements, meta tags
- **Confidence Scoring**: Weighted rule combinations
- **Page Type Filtering**: Specific page targeting
- **Success Rate Tracking**: Historical performance data

### Quality Assurance
- **Version History**: Complete change log with rollback
- **Template System**: Consistent rule patterns
- **Bulk Operations**: Efficient management workflows
- **Testing Requirements**: Mandatory validation before deployment

## States

### New Installation
```
┌─────────────────────────────────────────────────┐
│                 🏢                              │
│         No Vendors Configured                   │
│                                                 │
│   Start by adding the vendors and products      │
│   you want to monitor across dealerships        │
│                                                 │
│   Recommended starting set:                     │
│   • LivePerson (your product)                  │
│   • Major competitors (Intercom, Zendesk)      │
│   • Popular CRM systems                        │
│                                                 │
│         [Import Starter Pack]                   │
│         [Add Vendors Manually]                  │
└─────────────────────────────────────────────────┘
```

### Rule Deployment Warning
```
┌─────────────────────────────────────────────────┐
│ ⚠️ Deploy Rule Changes?                         │
│                                                 │
│ You're about to deploy changes to:              │
│ • LivePerson Chat Widget (3 rules modified)    │
│ • Intercom Detection (1 new rule)              │
│                                                 │
│ This will affect scanning for 1,247 dealers    │
│ across 89 active users                         │
│                                                 │
│ All rules have passed testing with >95%        │
│ accuracy requirements                           │
│                                                 │
│ Rollback is available if issues are detected   │
│                                                 │
│         [Cancel] [Deploy Changes]               │
└─────────────────────────────────────────────────┘
```

### Performance Alert
```
┌─────────────────────────────────────────────────┐
│ 📉 Rule Performance Alert                       │
│                                                 │
│ Several rules are underperforming:              │
│                                                 │
│ • Zendesk Chat: 73% accuracy (target: 95%)     │
│ • Drift Detection: 68% accuracy (target: 95%)  │
│ • HubSpot CRM: 81% accuracy (target: 95%)      │
│                                                 │
│ Impact: 156 dealers may have incorrect data     │
│                                                 │
│ Possible causes:                                │
│ • Vendor updated their implementation          │
│ • New website technologies blocking detection  │
│ • Rules need refinement                        │
│                                                 │
│         [Investigate Issues] [Run Diagnostics]  │
│         [Update Rules] [Notify Users]           │
└─────────────────────────────────────────────────┘
```