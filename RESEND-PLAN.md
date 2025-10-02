# RESEND-PLAN.md

**Resend Email Integration Plan for DealerScope**

This document outlines the Resend email integration strategy for DealerScope's transactional and notification emails.

------------------------------------------------------------------------

## Email Service Overview

**Provider:** Resend (https://resend.com)
- Modern email API built for developers
- React Email template support
- High deliverability rates
- Simple API with great DX
- Built-in analytics and tracking

------------------------------------------------------------------------

## Email Categories

### 1. Transactional Emails
**Purpose:** Critical user actions and account management

- **Welcome Email** - New user signup confirmation
- **Password Reset** - Secure password recovery link
- **Email Verification** - Confirm email address ownership
- **Account Activation** - Tier upgrade/subscription confirmation
- **Payment Receipts** - Successful payment confirmation (integrates with Stripe)
- **Payment Failed** - Failed payment notification with retry instructions

### 2. Alert Notifications
**Purpose:** Time-sensitive dealership change alerts

- **Product Change Alert** - New product detected on dealership website
- **Product Removal Alert** - Product removed from dealership website
- **Dealership Status Change** - Site down, moved, or major changes
- **Scan Complete** - Manual scan finished notification
- **Daily Digest** - Summary of all changes (Tier 2+)

### 3. Administrative Emails
**Purpose:** Platform updates and admin communications

- **New User Registration** - Admin notification of new signup
- **Subscription Changes** - User upgraded/downgraded/canceled
- **System Alerts** - Critical system issues or maintenance
- **Merge Notifications** - Dealership merge completion

### 4. Marketing/Engagement Emails
**Purpose:** User engagement and retention (future)

- **Feature Announcements** - New features and updates
- **Usage Reports** - Monthly activity summary
- **Tier Upgrade Prompts** - Suggest upgrade based on usage
- **Re-engagement** - Inactive user campaigns

------------------------------------------------------------------------

## Email Templates

### Template Technology
- **React Email** - Component-based email templates
- **Tailwind CSS** - Inline styling for email clients
- **Responsive Design** - Mobile-first templates

### Template Structure
```
/emails/
  /templates/
    - WelcomeEmail.tsx
    - PasswordResetEmail.tsx
    - ProductChangeAlert.tsx
    - DailyDigestEmail.tsx
    - PaymentReceiptEmail.tsx
    - PaymentFailedEmail.tsx
  /components/
    - EmailLayout.tsx
    - EmailHeader.tsx
    - EmailFooter.tsx
    - EmailButton.tsx
```

### Branding Guidelines
- Use DealerScope brand colors (from design system)
- Professional B2B aesthetic (no emojis)
- Clear CTAs with action-primary button styling
- Minimal design, high readability
- Consistent header/footer across all emails

------------------------------------------------------------------------

## Resend API Implementation

### Environment Variables
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@dealerscope.com
RESEND_FROM_NAME=DealerScope
```

### Email Sending Service
**File:** `/lib/email/resend.ts`

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  react,
  scheduledAt
}: {
  to: string | string[];
  subject: string;
  react: React.ReactElement;
  scheduledAt?: Date;
}) {
  const { data, error } = await resend.emails.send({
    from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
    to,
    subject,
    react,
    scheduledAt
  });

  if (error) {
    console.error('Email send failed:', error);
    throw new Error(error.message);
  }

  return data;
}
```

### Email Queue System (Future Enhancement)
- Use background jobs for bulk emails
- Implement retry logic for failed sends
- Rate limiting to respect Resend limits
- Priority queue for critical emails

------------------------------------------------------------------------

## Tier-Based Email Features

### Tier 1 (Free)
- Welcome email only
- Password reset emails
- Critical account notifications
- NO product change alerts
- NO email notifications for scans

### Tier 2 (Pro)
- All Tier 1 emails
- Product change alerts (email)
- Daily digest email (optional)
- Scan complete notifications
- Up to 100 emails/month per user

### Tier 3 (Enterprise)
- All Tier 2 emails
- Real-time alerts (immediate emails)
- Custom email preferences
- Weekly/monthly reports
- Unlimited emails

------------------------------------------------------------------------

## Email Preferences

### User Settings Table
**Database fields (users table):**
- `email_notifications_enabled` (boolean, default: true)
- `email_digest_frequency` (enum: 'realtime', 'daily', 'weekly', 'never')
- `email_product_changes` (boolean, default: true for Tier 2+)
- `email_dealership_status` (boolean, default: true)
- `email_marketing` (boolean, default: false)

### Preference UI Location
- Settings page: Email preferences section
- Toggle switches for each email type
- Digest frequency dropdown
- "Unsubscribe from all" option (except critical emails)

------------------------------------------------------------------------

## Email Content Strategy

### Product Change Alert Email
**Trigger:** New product detected on dealership website

**Subject:** `[DealerScope] New Product Detected: {dealership_name}`

**Content:**
- Dealership name and logo
- Product details (name, description, image)
- Link to dealership detail page
- "View All Changes" CTA button
- Footer with unsubscribe link

### Daily Digest Email
**Trigger:** End of day if changes detected

**Subject:** `[DealerScope] Daily Digest: {count} changes today`

**Content:**
- Summary stats (new products, removed products, status changes)
- Grouped by dealership
- Top 5 changes with preview
- "View Full Report" CTA
- Next scheduled digest time

### Payment Failed Email
**Trigger:** Stripe webhook: `invoice.payment_failed`

**Subject:** `[DealerScope] Payment Failed - Action Required`

**Content:**
- Clear explanation of failed payment
- Instructions to update payment method
- Link to Stripe Customer Portal
- Grace period information (14 days before downgrade)
- Support contact info

------------------------------------------------------------------------

## Integration Points

### 1. Stripe Webhook Integration
- Payment success → Send receipt email
- Payment failed → Send failure notification
- Subscription canceled → Send confirmation email
- Sync email sending with webhook events

### 2. Scan Job Integration
- Manual scan complete → Send notification (Tier 2+)
- Product changes detected → Queue alert emails
- Scan errors → Admin notification

### 3. Dealership Change Detection
- Product added/removed → Alert email (Tier 2+)
- Status change → Notification email
- Batch changes → Digest email

### 4. User Management
- New signup → Welcome email
- Password reset → Reset link email
- Email verification → Verification email

------------------------------------------------------------------------

## Deliverability Best Practices

### Domain Setup
1. Configure SPF record for dealerscope.com
2. Add DKIM signing via Resend
3. Set up DMARC policy
4. Verify domain in Resend dashboard

### Email Hygiene
- Validate email addresses before sending
- Remove bounced emails from lists
- Honor unsubscribe requests immediately
- Monitor spam complaints

### Content Guidelines
- Clear, concise subject lines
- Personalize with user's name
- Include plain text version
- Test across email clients
- Avoid spam trigger words

------------------------------------------------------------------------

## Testing Strategy

### Resend Test Mode
- Use test API key during development
- Test emails sent to verified addresses only
- Preview templates in Resend dashboard

### Test Scenarios
1. Welcome email on new user signup
2. Password reset flow
3. Product change alert (single change)
4. Daily digest (multiple changes)
5. Payment receipt (Stripe integration)
6. Payment failed notification
7. Unsubscribe functionality
8. Email preferences update

### Email Preview Tools
- React Email preview server (localhost)
- Resend dashboard preview
- Litmus/Email on Acid for cross-client testing

------------------------------------------------------------------------

## Rate Limits & Quotas

### Resend Limits (Free Plan)
- 100 emails/day
- 3,000 emails/month
- API rate limit: 10 requests/second

### Resend Limits (Pro Plan - Recommended)
- 50,000 emails/month
- Pay-as-you-go after limit
- Higher API rate limits
- Email analytics and tracking

### DealerScope Implementation
- Queue system to batch emails
- Rate limiting on per-user basis
- Prioritize critical emails
- Use digest emails to reduce volume

------------------------------------------------------------------------

## Email Analytics

### Track Metrics
- Open rates (Tier 3 only for privacy)
- Click-through rates on CTAs
- Bounce rates (hard/soft)
- Unsubscribe rates
- Spam complaint rates

### Dashboard Integration (Future)
- Admin view: Email performance metrics
- User view: Email activity log
- Alerts for deliverability issues

------------------------------------------------------------------------

## Security Considerations

### Data Privacy
- No PII in email subjects
- Secure links with time-limited tokens
- HTTPS for all email links
- Comply with CAN-SPAM, GDPR

### API Security
- Store API keys in environment variables
- Never expose in client-side code
- Rotate keys periodically
- Monitor API usage for anomalies

### Email Content Security
- Sanitize user-generated content
- Validate all email addresses
- Use signed URLs for sensitive actions
- Implement CSRF protection on links

------------------------------------------------------------------------

## Error Handling

### Failed Send Strategy
1. Log error with details
2. Retry up to 3 times with exponential backoff
3. Alert admin if critical email fails
4. Store failed email for manual review

### Bounce Handling
- Hard bounces → Mark email as invalid
- Soft bounces → Retry with delay
- Update user record with bounce status
- Admin dashboard for bounce management

------------------------------------------------------------------------

## Future Enhancements

### Advanced Features
- A/B testing for email content
- Personalized send times (AI-optimized)
- SMS notifications (via Twilio integration)
- Webhooks for email events
- Multi-language email templates
- Email scheduling and automation workflows

### AI-Powered Features
- Smart digest timing based on user activity
- Content recommendations for emails
- Spam score prediction before sending
- Automated email optimization

------------------------------------------------------------------------

## Related Documentation

- Payment integration: `STRIPE-PLAN.md`
- Database schema: `BACKEND-PLAN.md`
- User roles and tiers: `types/index.ts`
- Email preferences UI: `app/settings/page.tsx` (future)
