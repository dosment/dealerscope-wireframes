# Admin - AI-Assisted Selector Builder

**Primary Job:** Generate robust CSS/XPath/JS selectors from pasted DOM elements with LLM intelligence and automated testing

## Layout Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ TOP BAR                                                             │
│ [Logo] DealerScope Pro    [System Health: ⚡] [Profile ▼] [⚙️] [Help]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬───────────────────────────────────────────────────────────┐
│ ADMIN NAV│ CONTENT PANE                                              │
│          │                                                           │
│ 📊 Dashboard│ ┌─ AI SELECTOR BUILDER ─────────────────────────────────┐    │
│ 👥 Users    │ │                                                     │    │
│ 🏢 Vendors  │ │ [Input Panel] [AI Suggestions] [Test Results]       │    │
│ 🏪 Dealerships│ │                                                     │    │
│ 💳 Billing  │ │ [Two-Column Interface - See Below]                  │    │
│ 📧 Communications│ └─────────────────────────────────────────────────┘    │
│ 🔧 System Health│                                                       │
│ 🤖 AI Builder│ ┌─ VALIDATION & SAVE ───────────────────────────────────┐  │
│              │ │ [Rule Management Interface - See Below]              │  │
│              │ └─────────────────────────────────────────────────────┘    │
└──────────┴───────────────────────────────────────────────────────────┘
```

## Input Panel (Left Column)
```
┌─────────────────────────────────────────────────────────────────────┐
│ INPUT & CONTEXT                                                     │
│                                                                     │
│ ┌─ Target Product ───────────────────────────────────────────────────┐ │
│ │ ┌─────────────────┐ ┌─────────────────────────────────────────────┐ │ │
│ │ │ Vendor          │ │ Product                                     │ │ │
│ │ │ Intercom ▼      │ │ Intercom Messenger Widget ▼                │ │ │
│ │ └─────────────────┘ └─────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Category: Chat Tools • Priority: High • Status: Active         │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ DOM Element Input ────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Paste HTML Element:                                               │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ <div id="intercom-container" class="intercom-namespace">       │ │ │
│ │ │   <div class="intercom-messenger-frame">                       │ │ │
│ │ │     <iframe src="https://widget.intercom.io/widget/abc123"     │ │ │
│ │ │             title="Intercom live chat"                         │ │ │
│ │ │             data-intercom-app-id="abc123456">                   │ │ │
│ │ │     </iframe>                                                   │ │ │
│ │ │     <div class="intercom-launcher"                             │ │ │
│ │ │          data-intercom="launcher">                             │ │ │
│ │ │       <span class="intercom-launcher-text">Chat with us</span> │ │ │
│ │ │     </div>                                                     │ │ │
│ │ │   </div>                                                       │ │ │
│ │ │ </div>                                                         │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Input Type: ● OuterHTML ○ InnerHTML ○ CSS Selector ○ Other       │ │
│ │                                                                   │ │
│ │ 🔒 Privacy: PII detection active (phone, email auto-redacted)     │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Context URLs (Optional) ──────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Source URL (for context):                                        │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ https://www.millerautohonda.com                                 │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Test URLs (for validation):                                       │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ https://www.cityToyota.com                                      │ │ │
│ │ │ https://www.westford.net                                        │ │ │
│ │ │ https://www.elitemotors.com                                     │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ [Add URL] [Import from Product] [Use Benchmark URLs]             │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Generation Options ───────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Selector Types:                                                   │ │
│ │ ☑️ CSS Selectors (most compatible)                                 │ │
│ │ ☑️ XPath expressions (precise)                                     │ │
│ │ ☑️ JavaScript predicates (flexible)                               │ │
│ │                                                                   │ │
│ │ Robustness Level:                                                 │ │
│ │ ○ Strict (exact match)                                           │ │
│ │ ● Balanced (stability + accuracy)                                │ │
│ │ ○ Permissive (catch variations)                                   │ │
│ │                                                                   │ │
│ │ Include Fallbacks: ☑️ Generate backup selectors                   │ │
│ │ Text Matching: ☑️ Include content-based rules                     │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Generate AI Suggestions] [Clear] [Load Example]                   │
└─────────────────────────────────────────────────────────────────────┘
```

## AI Suggestions Panel (Right Column)
```
┌─────────────────────────────────────────────────────────────────────┐
│ AI-GENERATED SUGGESTIONS                        [Regenerate] [Help] │
│                                                                     │
│ Generated 6 selector candidates • Analysis time: 2.3s              │
│                                                                     │
│ ┌─ Suggestion 1: CSS Selector (HIGH CONFIDENCE) ───────────────────┐ │
│ │                                                                   │ │
│ │ 🟢 [data-intercom-app-id], #intercom-container                   │ │
│ │                                                                   │ │
│ │ Confidence: 95% • Type: CSS • Stability: High                    │ │
│ │                                                                   │ │
│ │ Test Results:                                                     │ │
│ │ ✅ millerautohonda.com (2 matches)                               │ │
│ │ ✅ cityToyota.com (1 match)                                      │ │
│ │ ✅ westford.net (1 match)                                        │ │
│ │ ❌ elitemotors.com (0 matches - no Intercom)                     │ │
│ │                                                                   │ │
│ │ Analysis:                                                         │ │
│ │ • data-intercom-app-id is vendor-specific and stable             │ │
│ │ • Fallback to #intercom-container for older implementations      │ │
│ │ • Low risk of false positives                                    │ │
│ │                                                                   │ │
│ │ [Test Again] [Edit Selector] [Save Rule] [Preview Matches]       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Suggestion 2: XPath Expression (HIGH CONFIDENCE) ───────────────┐ │
│ │                                                                   │ │
│ │ 🟢 //iframe[contains(@src,'widget.intercom.io')]                 │ │
│ │                                                                   │ │
│ │ Confidence: 92% • Type: XPath • Stability: High                  │ │
│ │                                                                   │ │
│ │ Test Results:                                                     │ │
│ │ ✅ millerautohonda.com (1 match)                                 │ │
│ │ ✅ cityToyota.com (1 match)                                      │ │
│ │ ✅ westford.net (1 match)                                        │ │
│ │ ❌ elitemotors.com (0 matches - no Intercom)                     │ │
│ │                                                                   │ │
│ │ Analysis:                                                         │ │
│ │ • Targets Intercom's widget domain directly                      │ │
│ │ • Resilient to CSS class changes                                 │ │
│ │ • May miss custom implementations                                │ │
│ │                                                                   │ │
│ │ [Test Again] [Edit Selector] [Save Rule] [Preview Matches]       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Suggestion 3: CSS + Text Content (MEDIUM CONFIDENCE) ───────────┐ │
│ │                                                                   │ │
│ │ 🟡 .intercom-launcher:contains("Chat"), [data-intercom]          │ │
│ │                                                                   │ │
│ │ Confidence: 78% • Type: CSS+JS • Stability: Medium               │ │
│ │                                                                   │ │
│ │ Test Results:                                                     │ │
│ │ ✅ millerautohonda.com (3 matches)                               │ │
│ │ ✅ cityToyota.com (2 matches)                                    │ │
│ │ ⚠️ westford.net (1 match) - different text                      │ │
│ │ ❌ elitemotors.com (0 matches)                                   │ │
│ │                                                                   │ │
│ │ Analysis:                                                         │ │
│ │ • Combines visual elements with data attributes                   │ │
│ │ • Text matching may vary by language/customization               │ │
│ │ • Good for catching launcher buttons                             │ │
│ │                                                                   │ │
│ │ [Test Again] [Edit Selector] [Save Rule] [Preview Matches]       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Suggestion 4: JavaScript Predicate (MEDIUM CONFIDENCE) ─────────┐ │
│ │                                                                   │ │
│ │ 🟡 window.Intercom && document.querySelector('.intercom-frame')  │ │
│ │                                                                   │ │
│ │ Confidence: 82% • Type: JS • Stability: Medium                   │ │
│ │                                                                   │ │
│ │ Test Results:                                                     │ │
│ │ ✅ millerautohonda.com (true - API + DOM present)                │ │
│ │ ✅ cityToyota.com (true - API + DOM present)                     │ │
│ │ ✅ westford.net (true - API + DOM present)                       │ │
│ │ ❌ elitemotors.com (false - no Intercom)                         │ │
│ │                                                                   │ │
│ │ Analysis:                                                         │ │
│ │ • Checks for both JavaScript API and DOM presence                │ │
│ │ • Most reliable for active Intercom installations                │ │
│ │ • Requires JavaScript execution capability                       │ │
│ │                                                                   │ │
│ │ [Test Again] [Edit Selector] [Save Rule] [Preview Matches]       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ⚠️ Low Confidence Suggestions (2) [Show] [Hide]                     │
│                                                                     │
│ [Test All Suggestions] [Save High-Confidence (2)] [Refine Selected]│
└─────────────────────────────────────────────────────────────────────┘
```

## Detailed Test Results View
```
┌─────────────────────────────────────────────────────────────────────┐
│ DETAILED TEST RESULTS: Suggestion 1                                │
│                                                                     │
│ Selector: [data-intercom-app-id], #intercom-container              │
│                                                                     │
│ ┌─ Test URL 1: millerautohonda.com ─────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Status: ✅ 2 matches found                                        │ │
│ │ Scan time: 1.2 seconds                                           │ │
│ │                                                                   │ │
│ │ Matched Elements:                                                 │ │
│ │ ┌─ Match 1 ─────────────────────────────────────────────────────┐   │ │
│ │ │ <iframe data-intercom-app-id="abc123456"                     │   │ │
│ │ │         src="https://widget.intercom.io/widget/abc123">      │   │ │
│ │ │ Path: /html/body/div[3]/div/iframe                            │   │ │
│ │ │ Attributes: data-intercom-app-id="abc123456"                  │   │ │
│ │ └───────────────────────────────────────────────────────────────┘   │ │
│ │                                                                   │ │
│ │ ┌─ Match 2 ─────────────────────────────────────────────────────┐   │ │
│ │ │ <div id="intercom-container" class="intercom-namespace">      │   │ │
│ │ │ Path: /html/body/div[3]                                       │   │ │
│ │ │ Attributes: id="intercom-container", class="intercom-..."     │   │ │
│ │ └───────────────────────────────────────────────────────────────┘   │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Test URL 2: cityToyota.com ──────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Status: ✅ 1 match found                                          │ │
│ │ Scan time: 1.8 seconds                                           │ │
│ │                                                                   │ │
│ │ ┌─ Match 1 ─────────────────────────────────────────────────────┐   │ │
│ │ │ <div data-intercom-app-id="xyz789012"                        │   │ │
│ │ │      class="intercom-chat-widget">                           │   │ │
│ │ │ Path: /html/body/div[7]                                       │   │ │
│ │ │ Attributes: data-intercom-app-id="xyz789012"                  │   │ │
│ │ └───────────────────────────────────────────────────────────────┘   │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Test URL 3: westford.net ────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Status: ✅ 1 match found                                          │ │
│ │ Scan time: 2.1 seconds                                           │ │
│ │                                                                   │ │
│ │ ┌─ Match 1 ─────────────────────────────────────────────────────┐   │ │
│ │ │ <script data-intercom-app-id="def456789">                    │   │ │
│ │ │ Path: /html/head/script[15]                                   │   │ │
│ │ │ Attributes: data-intercom-app-id="def456789"                  │   │ │
│ │ └───────────────────────────────────────────────────────────────┘   │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Test URL 4: elitemotors.com ─────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Status: ❌ 0 matches found (Expected - no Intercom detected)      │ │
│ │ Scan time: 1.5 seconds                                           │ │
│ │                                                                   │ │
│ │ Analysis: No Intercom-related elements found. This is expected   │ │
│ │ for negative test cases and confirms selector specificity.       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Summary: 4/4 tests passed (3 positive, 1 negative)                 │
│ Recommendation: ✅ Ready for production use                         │ │
│                                                                     │
│ [Save as Rule] [Test More URLs] [Edit Selector] [Back to List]     │
└─────────────────────────────────────────────────────────────────────┘
```

## Save Rules Interface
```
┌─────────────────────────────────────────────────────────────────────┐
│ SAVE DETECTION RULES                                                │
│                                                                     │
│ Selected Suggestions: 2 high-confidence rules                      │
│                                                                     │
│ ┌─ Rule 1 Configuration ─────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Rule Name                                                       │ │ │
│ │ │ Intercom Data Attribute Detection                               │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Selector: [data-intercom-app-id], #intercom-container            │ │
│ │ Type: CSS Selector                                                │ │
│ │ Confidence: 95%                                                   │ │
│ │                                                                   │ │
│ │ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────────┐ │ │
│ │ │ Priority        │ │ Match Mode      │ │ Minimum Matches         │ │ │
│ │ │ High ▼          │ │ Presence ▼      │ │ 1 ▼                     │ │ │
│ │ └─────────────────┘ └─────────────────┘ └─────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Page Types: ☑️ All ☑️ Homepage ☑️ Contact ☐ Inventory ☐ Service    │ │
│ │                                                                   │ │
│ │ Notes:                                                            │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Primary detection rule for Intercom widgets. Uses stable       │ │ │
│ │ │ data attributes that are consistent across implementations.    │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Rule 2 Configuration ─────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Rule Name                                                       │ │ │
│ │ │ Intercom Widget iframe Detection                                │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Selector: //iframe[contains(@src,'widget.intercom.io')]          │ │
│ │ Type: XPath Expression                                            │ │
│ │ Confidence: 92%                                                   │ │
│ │                                                                   │ │
│ │ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────────┐ │ │
│ │ │ Priority        │ │ Match Mode      │ │ Minimum Matches         │ │ │
│ │ │ Medium ▼        │ │ Presence ▼      │ │ 1 ▼                     │ │ │
│ │ └─────────────────┘ └─────────────────┘ └─────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Page Types: ☑️ All ☑️ Homepage ☑️ Contact ☐ Inventory ☐ Service    │ │
│ │                                                                   │ │
│ │ Notes:                                                            │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Fallback rule targeting Intercom's iframe domain. Complements  │ │ │
│ │ │ primary data attribute rule for comprehensive detection.       │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Validation & Deployment ──────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ☑️ Run validation against benchmark URLs (47 sites)                │ │
│ │ ☑️ Create new rule version (v2.1.0)                                │ │
│ │ ☑️ Enable rules immediately                                        │ │
│ │ ☐ Send notification to admin team                                 │ │
│ │                                                                   │ │
│ │ Expected Impact:                                                  │ │
│ │ • 1,247 dealerships will use new rules                           │ │
│ │ • 89 active users affected                                       │ │
│ │ • Estimated improvement: +3% detection accuracy                  │ │
│ │                                                                   │ │
│ │ [Run Validation] Preview impact before saving                    │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Cancel] [Save Draft] [Save & Deploy Rules]                        │
└─────────────────────────────────────────────────────────────────────┘
```

## Auto-Save Configuration
```
┌─────────────────────────────────────────────────────────────────────┐
│ AUTO-SAVE CONFIGURATION                                             │
│                                                                     │
│ ┌─ Auto-Save Settings ───────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ☑️ Enable auto-save for high-confidence suggestions                │ │
│ │                                                                   │ │
│ │ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────────┐ │ │
│ │ │ Confidence      │ │ Max Rules       │ │ Validation Required     │ │ │
│ │ │ Threshold       │ │ per Session     │ │                         │ │ │
│ │ │ ≥90% ▼          │ │ 3 ▼             │ │ Yes ▼                   │ │ │
│ │ └─────────────────┘ └─────────────────┘ └─────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Auto-save criteria:                                               │ │
│ │ ☑️ All test URLs pass (100% success rate)                         │ │
│ │ ☑️ No fragile selectors (auto-generated classes)                  │ │
│ │ ☑️ Selector specificity appropriate (not too broad/narrow)        │ │
│ │ ☑️ No conflicts with existing rules                               │ │
│ │                                                                   │ │
│ │ Notification options:                                             │ │
│ │ ☑️ Email admin team when rules auto-saved                         │ │
│ │ ☑️ Log auto-save actions in audit trail                           │ │
│ │ ☑️ Require manual approval for deployment                         │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Safety Guardrails ────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ PII Protection:                                                   │ │
│ │ ☑️ Redact phone numbers before LLM processing                     │ │
│ │ ☑️ Redact email addresses before LLM processing                   │ │
│ │ ☑️ Redact credit card patterns before LLM processing              │ │
│ │ ☑️ Log redaction actions for audit                                │ │
│ │                                                                   │ │
│ │ Rate Limiting:                                                    │ │
│ │ • Max 50 AI generations per hour per admin                       │ │
│ │ • Max 20 URL fetches per session                                 │ │
│ │ • Fallback to HTML-only analysis if fetch limits reached         │ │ │
│ │                                                                   │ │
│ │ Quality Controls:                                                 │ │
│ │ ☑️ Flag selectors with auto-generated class patterns              │ │
│ │ ☑️ Warn on overly broad selectors (>50 matches)                   │ │
│ │ ☑️ Suggest alternatives for fragile patterns                      │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Save Settings] [Reset Defaults] [Test Configuration]              │
└─────────────────────────────────────────────────────────────────────┘
```

## AI Analysis Report
```
┌─────────────────────────────────────────────────────────────────────┐
│ AI ANALYSIS REPORT                                                  │
│                                                                     │
│ Generated for: Intercom Messenger Widget                           │
│ Analysis time: 2.3 seconds • Model: GPT-4o • Tokens used: 2,847    │
│                                                                     │
│ ┌─ Element Analysis ─────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Detected Vendor: Intercom (99% confidence)                       │ │
│ │ Product Type: Live chat widget                                    │ │
│ │ Implementation Pattern: Modern iframe + launcher                  │ │
│ │                                                                   │ │
│ │ Key Identifiers Found:                                            │ │
│ │ • data-intercom-app-id attribute (most reliable)                 │ │
│ │ • widget.intercom.io domain in iframe src                        │ │
│ │ • intercom-specific CSS classes                                  │ │
│ │ • Intercom launcher button structure                             │ │
│ │                                                                   │ │
│ │ Stability Assessment:                                             │ │
│ │ ✅ High: data-intercom-app-id (vendor controlled)                │ │
│ │ ✅ High: widget.intercom.io domain (vendor controlled)           │ │
│ │ ⚠️ Medium: CSS classes (may change with updates)                 │ │
│ │ ⚠️ Medium: DOM structure (customizable by implementation)        │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Generated Strategies ─────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Strategy 1: Attribute-based (Recommended)                        │ │
│ │ └─ Target vendor-controlled data attributes                       │ │
│ │ └─ Pros: Stable, specific, low false-positive rate               │ │
│ │ └─ Cons: May miss custom implementations                         │ │
│ │                                                                   │ │
│ │ Strategy 2: Domain-based                                         │ │
│ │ └─ Target iframe sources and script URLs                         │ │
│ │ └─ Pros: Catches all official implementations                    │ │
│ │ └─ Cons: May miss custom domains or proxied content              │ │
│ │                                                                   │ │
│ │ Strategy 3: Hybrid approach                                      │ │
│ │ └─ Combine multiple detection methods                             │ │
│ │ └─ Pros: Maximum coverage and reliability                        │ │
│ │ └─ Cons: More complex rule management                            │ │
│ │                                                                   │ │
│ │ Strategy 4: JavaScript runtime                                   │ │
│ │ └─ Check for window.Intercom API presence                        │ │
│ │ └─ Pros: Detects active installations                            │ │
│ │ └─ Cons: Requires JavaScript execution                           │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Recommendations ──────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Primary Rule: [data-intercom-app-id], #intercom-container        │ │
│ │ └─ Use as main detection method (95% confidence)                 │ │
│ │                                                                   │ │
│ │ Fallback Rule: //iframe[contains(@src,'widget.intercom.io')]     │ │
│ │ └─ Catches edge cases missed by primary rule                     │ │
│ │                                                                   │ │
│ │ Validation Rule: window.Intercom && typeof Intercom === 'object' │ │
│ │ └─ Confirms active installation when JS execution available      │ │
│ │                                                                   │ │
│ │ Risk Assessment: Low risk of false positives                     │ │
│ │ Expected Accuracy: 96-98% based on similar implementations       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [View Raw Analysis] [Regenerate] [Download Report] [Save Analysis]  │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Features

### AI-Powered Analysis
- **LLM Intelligence**: GPT-4 analyzes DOM structure and generates robust selectors
- **Vendor Recognition**: Automatically identifies vendor patterns and best practices
- **Stability Assessment**: Evaluates selector fragility and suggests improvements
- **Multiple Strategies**: Generates diverse approaches for comprehensive coverage

### Smart Testing
- **Multi-URL Validation**: Tests against positive and negative examples
- **Match Analysis**: Shows exactly what elements are detected
- **Performance Metrics**: Confidence scores and stability ratings
- **Edge Case Detection**: Identifies potential false positives/negatives

### Intelligent Rule Generation
- **Multiple Selector Types**: CSS, XPath, JavaScript predicates
- **Fallback Strategies**: Primary + backup selectors for robustness
- **Context Awareness**: Considers page types and implementation variations
- **Version Control**: Automatic versioning with rollback capability

### Safety & Privacy
- **PII Protection**: Automatic redaction of sensitive information
- **Rate Limiting**: Prevents API abuse and controls costs
- **Quality Gates**: Validation requirements before auto-save
- **Audit Logging**: Complete history of AI-generated rules

## States

### Invalid Input
```
┌─────────────────────────────────────────────────┐
│ ⚠️ Invalid HTML Input                           │
│                                                 │
│ Issues detected:                                │
│ • Malformed HTML structure                     │
│ • Missing required attributes                  │
│ • Contains suspicious patterns                 │
│                                                 │
│ Suggested fixes:                                │
│ • Use "Copy outerHTML" from DevTools           │
│ • Ensure complete element structure            │
│ • Remove any sensitive information             │ │
│                                                 │
│         [Fix Input] [Show Examples]             │
└─────────────────────────────────────────────────┘
```

### LLM Analysis Failure
```
┌─────────────────────────────────────────────────┐
│ 🤖 AI Analysis Temporarily Unavailable          │
│                                                 │
│ The AI analysis service is currently           │
│ experiencing issues. You can:                   │
│                                                 │
│ • Try again in a few minutes                   │
│ • Use manual selector creation                 │
│ • Fall back to template-based rules            │
│                                                 │
│ Error: Rate limit exceeded (resets in 15 min)  │
│                                                 │
│         [Retry] [Manual Mode] [Contact Support] │
└─────────────────────────────────────────────────┘
```

### High-Confidence Auto-Save Success
```
┌─────────────────────────────────────────────────┐
│ ✅ Rules Auto-Saved Successfully                │
│                                                 │
│ 2 high-confidence rules were automatically     │
│ saved for Intercom Messenger Widget:           │
│                                                 │
│ • Data attribute detection (95% confidence)    │
│ • iframe domain detection (92% confidence)     │
│                                                 │
│ All rules passed validation against 47 test    │
│ URLs with 100% accuracy.                       │
│                                                 │
│ Next steps:                                     │
│ • Rules deployed to production                 │
│ • Admin team notified                          │
│ • Monitoring active for 24 hours               │
│                                                 │
│         [View Rules] [Monitor Performance]      │
└─────────────────────────────────────────────────┘
```

This AI-Assisted Selector Builder revolutionizes how admins create detection rules by combining human expertise with AI intelligence, dramatically reducing the time and technical skill required to build robust, accurate vendor detection systems.
