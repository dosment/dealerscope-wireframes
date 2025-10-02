# Admin Operations - User Management, Billing & Communications

**Primary Job:** Manage email communications, Stripe billing integration, and user account messaging

## Layout Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ TOP BAR                                                             │
│ [Logo] DealerScope Pro    [System Health: ⚡] [Profile ▼] [⚙️] [Help]│
└─────────────────────────────────────────────────────────────────────┘
┌──────────┬───────────────────────────────────────────────────────────┐
│ ADMIN NAV│ CONTENT PANE                                              │
│          │                                                           │
│ 📊 Dashboard│ ┌─ COMMUNICATIONS ──────────────────────────────────────┐    │
│ 👥 Users    │ │                                                     │    │
│ 🏢 Vendors  │ │ [Email Templates] [Send Email] [Billing] [Stripe]   │    │
│ 🏪 Dealerships│ │                                                     │    │
│ 💳 Billing  │ │ [Communication Interface - See Below]                │    │
│ 📧 Communications│ └─────────────────────────────────────────────────┘    │
│ 🔧 System Health│                                                       │
│              │ ┌─ BILLING MANAGEMENT ─────────────────────────────────────┐  │
│              │ │ [Stripe Integration Interface - See Below]            │  │
│              │ └─────────────────────────────────────────────────────┘    │
└──────────┴───────────────────────────────────────────────────────────┘
```

## Email Communications Tab
```
┌─────────────────────────────────────────────────────────────────────┐
│ EMAIL COMMUNICATIONS                                                │
│                                                                     │
│ ┌─ Email Templates ──────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─ Welcome & Onboarding ───────────────────────────────────────────┐ │ │
│ │ │ Welcome Email                           [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Welcome to DealerScope Pro                         │ │ │
│ │ │ ├─ Sent: Automatically on account creation                     │ │ │
│ │ │ └─ Last sent: 3 hours ago (2 recipients)                      │ │ │
│ │ │                                                                 │ │ │
│ │ │ Email Verification                      [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Verify your email address                          │ │ │
│ │ │ ├─ Sent: Automatically on signup                               │ │ │
│ │ │ └─ Last sent: 1 hour ago (1 recipient)                        │ │ │
│ │ │                                                                 │ │ │
│ │ │ Account Setup Guide                     [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Get started with DealerScope                       │ │ │
│ │ │ ├─ Sent: 1 day after first login                               │ │ │
│ │ │ └─ Last sent: Yesterday (5 recipients)                         │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─ Account Management ──────────────────────────────────────────────┐ │ │
│ │ │ Password Reset                          [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Reset your DealerScope password                    │ │ │
│ │ │ ├─ Sent: When user requests password reset                     │ │ │
│ │ │ └─ Last sent: 2 hours ago (1 recipient)                       │ │ │
│ │ │                                                                 │ │ │
│ │ │ Account Suspended                       [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Your account has been suspended                    │ │ │
│ │ │ ├─ Sent: When admin suspends account                           │ │ │
│ │ │ └─ Last sent: 1 week ago (1 recipient)                        │ │ │
│ │ │                                                                 │ │ │
│ │ │ Plan Upgrade Confirmation               [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Plan upgrade confirmed                             │ │ │
│ │ │ ├─ Sent: After successful plan change                          │ │ │
│ │ │ └─ Last sent: 3 days ago (2 recipients)                       │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─ Usage & Alerts ──────────────────────────────────────────────────┐ │ │
│ │ │ Usage Warning (80%)                     [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Approaching your scan limit                        │ │ │
│ │ │ ├─ Sent: At 80% of monthly scan quota                          │ │ │
│ │ │ └─ Last sent: 2 days ago (3 recipients)                       │ │ │
│ │ │                                                                 │ │ │
│ │ │ Usage Limit Reached                     [Edit] [Preview] [Send] │ │ │
│ │ │ ├─ Subject: Scan limit reached - upgrade needed                │ │ │
│ │ │ ├─ Sent: At 100% of monthly scan quota                         │ │ │
│ │ │ └─ Last sent: 1 week ago (1 recipient)                        │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ [Create New Template +] [Import Templates] [Email Settings]       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Send Manual Email Interface
```
┌─────────────────────────────────────────────────────────────────────┐
│ SEND MANUAL EMAIL                                                   │
│                                                                     │
│ ┌─ Recipients ───────────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Send to:                                                          │ │
│ │ ● All users                                                       │ │
│ │ ○ Users by plan: Starter ▼                                        │ │
│ │ ○ Users by status: Active ▼                                       │ │
│ │ ○ Specific users                                                  │ │
│ │ ○ Custom email list                                               │ │
│ │                                                                   │ │
│ │ [Preview Recipients] (247 users selected)                        │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Email Content ────────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ From Name                                                       │ │ │
│ │ │ DealerScope Team                                                │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Subject Line                                                    │ │ │
│ │ │ Important System Update - March 15, 2024                       │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Email Template:                                                   │ │
│ │ ● Use existing template: System Announcement ▼                    │ │
│ │ ○ Create custom email                                             │ │
│ │                                                                   │ │
│ │ ┌─ Email Body ───────────────────────────────────────────────────┐   │ │
│ │ │ Dear {first_name},                                             │   │ │
│ │ │                                                                │   │ │
│ │ │ We're excited to announce several improvements to              │   │ │
│ │ │ DealerScope Pro that will enhance your monitoring             │   │ │
│ │ │ experience:                                                    │   │ │
│ │ │                                                                │   │ │
│ │ │ • Improved chat tool detection accuracy                       │   │ │
│ │ │ • Faster scan processing times                                │   │ │
│ │ │ • Enhanced CRM integration features                           │   │ │
│ │ │ • New reporting capabilities                                   │   │ │
│ │ │                                                                │   │ │
│ │ │ These updates will be deployed this weekend and will be       │   │ │
│ │ │ available when you log in on Monday morning.                  │   │ │
│ │ │                                                                │   │ │
│ │ │ If you have any questions, please don't hesitate to reach     │   │ │
│ │ │ out to our support team.                                      │   │ │
│ │ │                                                                │   │ │
│ │ │ Best regards,                                                  │   │ │
│ │ │ The DealerScope Team                                           │   │ │
│ │ │                                                                │   │ │
│ │ │ [Update My Preferences] [Contact Support]                     │   │ │
│ │ └────────────────────────────────────────────────────────────────┘   │ │
│ │                                                                   │ │
│ │ Available Variables: {first_name}, {last_name}, {email},          │ │
│ │ {company}, {plan_name}, {scan_count}, {dealership_count}          │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Sending Options ──────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ● Send immediately                                                │ │
│ │ ○ Schedule for later: March 16, 2024 at 9:00 AM ▼                │ │
│ │                                                                   │ │
│ │ ☑️ Send test email to admin@dealerscope.com first                  │ │
│ │ ☑️ Track email opens and clicks                                    │ │
│ │ ☐ Require email confirmation before sending                       │ │
│ │                                                                   │ │
│ │ Estimated delivery time: 15-20 minutes for 247 recipients        │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Save Draft] [Send Test] [Preview] [Schedule/Send]                  │
└─────────────────────────────────────────────────────────────────────┘
```

## Billing & Stripe Integration Tab
```
┌─────────────────────────────────────────────────────────────────────┐
│ BILLING & STRIPE INTEGRATION                                        │
│                                                                     │
│ ┌─ Stripe Connection ────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Stripe Account: acct_1234567890                                   │ │
│ │ Connection Status: ✅ Connected                                    │ │
│ │ Environment: 🔴 Live Mode                                         │ │
│ │ Last Sync: 2 hours ago                                            │ │
│ │                                                                   │ │
│ │ Webhook Endpoint: https://api.dealerscope.com/stripe/webhook      │ │
│ │ Webhook Status: ✅ Active (last event: 15 minutes ago)            │ │
│ │                                                                   │ │
│ │ [Test Connection] [View Webhook Logs] [Reconnect] [Sync Now]      │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Product & Plan Management ────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─ Starter Plan ───────────────────────────────────────────────────┐ │ │
│ │ │ Stripe Product ID: prod_starter_2024                           │ │ │
│ │ │ Price: $49.00/month                                            │ │ │
│ │ │ Active Subscriptions: 89                                       │ │ │
│ │ │ Monthly Revenue: $4,361                                        │ │ │
│ │ │                                        [Edit] [View in Stripe] │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─ Professional Plan ──────────────────────────────────────────────┐ │ │
│ │ │ Stripe Product ID: prod_professional_2024                      │ │ │
│ │ │ Price: $99.00/month                                            │ │ │
│ │ │ Active Subscriptions: 127                                      │ │ │
│ │ │ Monthly Revenue: $12,573                                       │ │ │
│ │ │                                        [Edit] [View in Stripe] │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─ Enterprise Plan ─────────────────────────────────────────────────┐ │ │
│ │ │ Stripe Product ID: prod_enterprise_2024                        │ │ │
│ │ │ Price: $199.00/month                                           │ │ │
│ │ │ Active Subscriptions: 31                                       │ │ │
│ │ │ Monthly Revenue: $6,169                                        │ │ │
│ │ │                                        [Edit] [View in Stripe] │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ Total MRR: $23,103 | Growth: +8.2% vs last month                 │ │
│ │                                                                   │ │
│ │ [Create New Plan] [Update Pricing] [View Revenue Dashboard]       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Subscription Management ──────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Recent Subscription Events:                                       │ │
│ │                                                                   │ │
│ │ ✅ sarah.manager@autogroup.net upgraded to Enterprise             │ │
│ │    2 hours ago | +$100 MRR                                       │ │
│ │                                                                   │ │
│ │ ❌ mike.sales@vendor.com payment failed                           │ │
│ │    4 hours ago | $99 Professional plan                           │ │
│ │    Action: Retry scheduled for tomorrow                          │ │
│ │                                                                   │ │
│ │ ✅ john.doe@company.com payment succeeded                         │ │
│    6 hours ago | $49 Starter plan                                 │ │
│ │                                                                   │ │
│ │ 🔄 alex.territory@automotive.net plan change pending              │ │
│    8 hours ago | Starter → Professional                           │ │
│    Action: Waiting for proration calculation                      │ │
│ │                                                                   │ │
│ │ [View All Subscriptions] [Handle Failed Payments] [Export Data]   │ │
│ └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Failed Payment Management
```
┌─────────────────────────────────────────────────────────────────────┐
│ FAILED PAYMENT MANAGEMENT                                           │
│                                                                     │
│ ┌─ Current Failed Payments (12) ─────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─┬────────────────────┬─────────────┬──────────┬─────────────────┐ │ │
│ │ │#│ Customer           │ Plan        │ Amount   │ Action          │ │ │
│ │ ├─┼────────────────────┼─────────────┼──────────┼─────────────────┤ │ │
│ │ │1│ mike.sales@        │ Professional│ $99.00   │ [Retry Now]     │ │ │
│ │ │ │ vendor.com         │             │          │ [Contact]       │ │ │
│ │ │ │ Failed: 2 times    │             │          │ [Suspend]       │ │ │
│ │ ├─┼────────────────────┼─────────────┼──────────┼─────────────────┤ │ │
│ │ │2│ lisa.territory@    │ Starter     │ $49.00   │ [Retry Now]     │ │ │
│ │ │ │ automotive.net     │             │          │ [Contact]       │ │ │
│ │ │ │ Failed: 1 time     │             │          │ [Suspend]       │ │ │
│ │ ├─┼────────────────────┼─────────────┼──────────┼─────────────────┤ │ │
│ │ │3│ old.account@       │ Enterprise  │ $199.00  │ [Retry Now]     │ │ │
│ │ │ │ legacy.com         │             │          │ [Contact]       │ │ │
│ │ │ │ Failed: 3 times    │             │          │ [Cancel Sub]    │ │ │
│ │ └─┴────────────────────┴─────────────┴──────────┴─────────────────┘ │ │
│ │                                                                   │ │
│ │ Bulk Actions:                                                     │ │
│ │ [Retry All] [Send Payment Reminder] [Export Failed List]         │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Retry Configuration ──────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ Automatic Retry Schedule:                                         │ │
│ │ • Day 1: Immediate retry                                          │ │
│ │ • Day 3: Second attempt + email notification                     │ │
│ │ • Day 7: Final attempt + suspension warning                      │ │
│ │ • Day 10: Account suspension                                     │ │
│ │                                                                   │ │
│ │ Email Notifications:                                              │ │
│ │ ☑️ Payment failed notification                                     │ │
│ │ ☑️ Retry reminder emails                                           │ │
│ │ ☑️ Final warning before suspension                                 │ │
│ │ ☑️ Account suspended notification                                  │ │
│ │                                                                   │ │
│ │ [Edit Retry Schedule] [Customize Emails]                         │ │
│ └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Email Template Editor
```
┌─────────────────────────────────────────────────────────────────────┐
│ EMAIL TEMPLATE EDITOR: Welcome Email                               │
│                                                                     │
│ ┌─ Template Settings ────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─────────────────┐ ┌─────────────────────────────────────────────┐ │ │
│ │ │ Template Name   │ │ Template Category                           │ │ │
│ │ │ Welcome Email   │ │ Onboarding ▼                                │ │ │
│ │ └─────────────────┘ └─────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Send Trigger                                                    │ │ │
│ │ │ Automatically when user account is created ▼                   │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ From Name: DealerScope Team                                     │ │ │
│ │ │ From Email: welcome@dealerscope.com                            │ │ │
│ │ │ Reply-To: support@dealerscope.com                              │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Email Content ────────────────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Subject Line                                                    │ │ │
│ │ │ Welcome to DealerScope Pro, {first_name}!                      │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                   │ │
│ │ ┌─ Email Body ───────────────────────────────────────────────────┐   │ │
│ │ │ [Rich Text Editor]                                             │   │ │
│ │ │                                                                │   │ │
│ │ │ Hi {first_name},                                               │   │ │
│ │ │                                                                │   │ │
│ │ │ Welcome to DealerScope Pro! We're excited to help you track   │   │ │
│ │ │ dealership website changes and identify new opportunities.     │   │ │
│ │ │                                                                │   │ │
│ │ │ Here's how to get started:                                     │   │ │
│ │ │                                                                │   │ │
│ │ │ 1. Add your first dealerships to monitor                      │   │ │
│ │ │ 2. Set up email digest preferences                            │   │ │
│ │ │ 3. Configure CRM integration                                   │   │ │
│ │ │ 4. Run your first opportunity report                          │   │ │
│ │ │                                                                │   │ │
│ │ │ [Get Started Now] [Contact Support] [Watch Demo Video]        │   │ │
│ │ │                                                                │   │ │
│ │ │ Need help? Reply to this email or visit our help center.      │   │ │
│ │ │                                                                │   │ │
│ │ │ Best regards,                                                  │   │ │
│ │ │ The DealerScope Team                                           │   │ │
│ │ └────────────────────────────────────────────────────────────────┘   │ │
│ │                                                                   │ │
│ │ Available Variables:                                              │ │
│ │ {first_name}, {last_name}, {email}, {company}, {plan_name}       │ │
│ │ {account_url}, {support_url}, {unsubscribe_url}                  │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ [Preview Email] [Send Test] [Save Template] [Cancel]               │
└─────────────────────────────────────────────────────────────────────┘
```

## Email Delivery Dashboard
```
┌─────────────────────────────────────────────────────────────────────┐
│ EMAIL DELIVERY DASHBOARD                                            │
│                                                                     │
│ ┌─ Recent Email Campaigns ───────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ ┌─┬──────────────────┬──────────┬───────────┬───────────┬─────────┐ │ │
│ │ │#│ Campaign         │ Sent     │ Delivered │ Opened    │ Clicked │ │ │
│ │ ├─┼──────────────────┼──────────┼───────────┼───────────┼─────────┤ │ │
│ │ │1│ System Update    │ 247      │ 245 (99%) │ 156 (64%) │ 23 (9%) │ │ │
│ │ │ │ Mar 15, 3:45 PM  │          │           │           │         │ │ │
│ │ ├─┼──────────────────┼──────────┼───────────┼───────────┼─────────┤ │ │
│ │ │2│ Welcome Email    │ 12       │ 12 (100%) │ 8 (67%)   │ 5 (42%) │ │ │
│ │ │ │ Mar 15, 2:30 PM  │          │           │           │         │ │ │
│ │ ├─┼──────────────────┼──────────┼───────────┼───────────┼─────────┤ │ │
│ │ │3│ Usage Warning    │ 8        │ 8 (100%)  │ 6 (75%)   │ 2 (25%) │ │ │
│ │ │ │ Mar 14, 9:15 AM  │          │           │           │         │ │ │
│ │ └─┴──────────────────┴──────────┴───────────┴───────────┴─────────┘ │ │
│ │                                                                   │ │
│ │ [View Details] [Export Report] [Resend Failed]                   │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─ Email Performance Metrics ────────────────────────────────────────┐ │
│ │                                                                   │ │
│ │ This Month:                                                       │ │
│ │ • Total emails sent: 2,847                                       │ │
│ │ • Delivery rate: 98.5%                                           │ │
│ │ • Open rate: 42.3%                                               │ │
│ │ • Click rate: 8.7%                                               │ │
│ │ • Unsubscribe rate: 0.3%                                         │ │
│ │ • Bounce rate: 1.5%                                              │ │
│ │                                                                   │ │
│ │ Blacklisted domains: 3 | Spam complaints: 1                     │ │
│ │                                                                   │ │
│ │ [View Detailed Analytics] [Export Metrics]                       │ │
│ └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Features

### Email Management
- **Template System**: Pre-built templates for common scenarios
- **Automated Triggers**: Account creation, payment failures, usage alerts
- **Variable Substitution**: Personalized content with user data
- **A/B Testing**: Test subject lines and content variations

### Stripe Integration
- **Real-time Sync**: Automatic synchronization with Stripe data
- **Plan Management**: Create and modify subscription plans
- **Payment Tracking**: Monitor successful and failed payments
- **Revenue Analytics**: MRR tracking and growth metrics

### Communication Analytics
- **Delivery Tracking**: Monitor email delivery success rates
- **Engagement Metrics**: Open rates, click rates, unsubscribes
- **Campaign Performance**: Compare effectiveness across templates
- **Bounce Management**: Handle hard/soft bounces automatically

### Failed Payment Recovery
- **Automated Retries**: Smart retry scheduling with increasing delays
- **Customer Communication**: Automated reminder emails
- **Dunning Management**: Progressive warnings before suspension
- **Recovery Tracking**: Success rates and recovery analytics

## States

### Email System Healthy
```
┌─────────────────────────────────────────────────┐
│ ✅ Email System Operating Normally              │
│                                                 │
│ • 98.5% delivery rate this month               │
│ • No bounced or blocked emails                 │
│ • All templates active and sending             │
│ • Stripe webhook receiving events              │
│                                                 │
│ Last email sent: 5 minutes ago                 │
│ Next scheduled: Welcome emails (ongoing)       │
└─────────────────────────────────────────────────┘
```

### High Bounce Rate Alert
```
┌─────────────────────────────────────────────────┐
│ ⚠️ High Email Bounce Rate Detected              │
│                                                 │
│ Bounce rate: 8.3% (normal: <2%)                │
│                                                 │
│ Affected domains:                               │
│ • @oldemaildomain.com (12 bounces)             │
│ • @outdatedcompany.net (8 bounces)             │
│ • @expiredhosting.com (5 bounces)              │
│                                                 │
│ Possible causes:                                │
│ • Users changed email addresses                │
│ • Company domain changes                       │
│ • Aggressive spam filtering                    │
│                                                 │
│         [Review Bounced Emails]                 │
│         [Clean Email List] [Contact Support]    │
└─────────────────────────────────────────────────┘
```

### Stripe Connection Issue
```
┌─────────────────────────────────────────────────┐
│ 🔴 Stripe Connection Error                      │
│                                                 │
│ Last successful sync: 6 hours ago               │
│ Error: Webhook endpoint unreachable             │
│                                                 │
│ Impact:                                         │
│ • New subscriptions not being processed        │
│ • Payment failures not detected                │
│ • Revenue data may be outdated                 │
│                                                 │
│ Automatic retry in: 15 minutes                 │
│                                                 │
│         [Reconnect Now] [Check Webhook]         │
│         [Contact Stripe] [View Error Log]       │
└─────────────────────────────────────────────────┘
```

<function_calls>
<invoke name="TodoWrite">
<parameter name="todos">[{"content": "Redesign regular user wireframes for chat tool sales rep workflow", "status": "completed", "activeForm": "Redesigning regular user wireframes for chat tool sales rep workflow"}, {"content": "Create reports wireframe with ZIP radius and chat tool filtering", "status": "completed", "activeForm": "Creating reports wireframe with ZIP radius and chat tool filtering"}, {"content": "Design alerts and email digest configuration wireframes", "status": "completed", "activeForm": "Designing alerts and email digest configuration wireframes"}, {"content": "Create enhanced admin dashboard with metrics and revenue", "status": "completed", "activeForm": "Creating enhanced admin dashboard with metrics and revenue"}, {"content": "Design vendor/CSS selector management wireframes", "status": "completed", "activeForm": "Designing vendor/CSS selector management wireframes"}, {"content": "Create admin communications and billing wireframes", "status": "completed", "activeForm": "Creating admin communications and billing wireframes"}]