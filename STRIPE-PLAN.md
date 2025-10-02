# STRIPE-PLAN.md

**Stripe Payment Integration Plan for DealerScope**

This document outlines the Stripe integration strategy for DealerScope's SaaS subscription billing.

------------------------------------------------------------------------

## Subscription Tiers

### Tier 1 - Free/Trial
- **Price**: $0/month
- **Stripe Product**: Free tier (no Stripe subscription required)
- **Features**:
  - 10 dealerships maximum
  - Manual scans only
  - No alerts
  - No email notifications
  - Basic reporting

### Tier 2 - Pro
- **Price**: TBD (e.g., $49/month or $490/year)
- **Stripe Product**: `prod_dealerscope_tier2`
- **Stripe Price IDs**:
  - Monthly: `price_tier2_monthly`
  - Annual: `price_tier2_annual` (discounted)
- **Features**:
  - 100 dealerships maximum
  - Daily automated scans
  - Email + in-app alerts
  - Advanced reporting
  - Territory management

### Tier 3 - Enterprise
- **Price**: TBD (e.g., $199/month or $1990/year)
- **Stripe Product**: `prod_dealerscope_tier3`
- **Stripe Price IDs**:
  - Monthly: `price_tier3_monthly`
  - Annual: `price_tier3_annual` (discounted)
- **Features**:
  - Unlimited dealerships
  - Real-time scanning
  - All notification channels
  - Priority support
  - White-label options
  - API access

------------------------------------------------------------------------

## Stripe Implementation Plan

### Products & Prices
1. Create Stripe Products for Tier 2 and Tier 3
2. Create Price objects for monthly and annual billing
3. Set up percentage discounts for annual plans (e.g., 15-20% off)
4. Enable automatic tax collection via Stripe Tax

### Customer Management
- Create Stripe Customer on user signup
- Store `stripe_customer_id` in `users` table
- Sync customer email and metadata between DealerScope and Stripe

### Subscription Flow
1. **User selects plan** → Redirect to Stripe Checkout
2. **Stripe Checkout** → Handles payment method collection
3. **Webhook: `checkout.session.completed`** → Activate subscription in database
4. **Webhook: `invoice.paid`** → Log successful payment
5. **Webhook: `invoice.payment_failed`** → Downgrade to Tier 1 or suspend account

### Webhooks to Implement
- `checkout.session.completed` - New subscription created
- `customer.subscription.updated` - Plan changes (upgrades/downgrades)
- `customer.subscription.deleted` - Cancellation
- `invoice.paid` - Successful payment
- `invoice.payment_failed` - Failed payment (retry logic)
- `customer.updated` - Customer info changes

### Database Fields (users table)
- `stripe_customer_id` (string, unique)
- `stripe_subscription_id` (string, unique)
- `subscription_tier` (enum: 'Tier 1', 'Tier 2', 'Tier 3')
- `subscription_status` (enum: 'active', 'past_due', 'canceled', 'trialing')
- `subscription_current_period_end` (timestamp)

------------------------------------------------------------------------

## Upgrade/Downgrade Logic

### Upgrading (Tier 1 → Tier 2 or Tier 2 → Tier 3)
- Immediate access to new features
- Stripe proration: charge difference immediately
- Update `subscription_tier` in database via webhook

### Downgrading (Tier 3 → Tier 2 or Tier 2 → Tier 1)
- Schedule downgrade for end of current billing period
- User retains current features until period ends
- Stripe proration: credit applied to next invoice (if staying paid)
- Update `subscription_tier` at period end via webhook

### Cancellation
- Access continues until end of current billing period
- Automatically downgrade to Tier 1 when period ends
- No refunds (standard SaaS practice)

------------------------------------------------------------------------

## Payment Failure Handling

### First Failure
1. Stripe automatically retries 3 times over 2 weeks
2. Send email notification to user
3. Display in-app banner: "Payment failed - please update payment method"
4. Subscription status: `past_due`

### Final Failure (after retries exhausted)
1. Downgrade user to Tier 1
2. Dealership limit enforced (can view all, can only scan 10)
3. Send final email notification
4. Subscription status: `canceled`

------------------------------------------------------------------------

## Testing Strategy

### Stripe Test Mode
- Use test API keys during development
- Test card: `4242 4242 4242 4242` (successful payment)
- Test card: `4000 0000 0000 0341` (payment failure)

### Test Scenarios
1. New subscription checkout (Tier 2, Tier 3)
2. Upgrade flow (Tier 2 → Tier 3)
3. Downgrade flow (Tier 3 → Tier 2)
4. Cancellation flow
5. Payment failure → retry → success
6. Payment failure → retry → final failure → downgrade
7. Annual vs monthly billing
8. Webhook delivery and processing

------------------------------------------------------------------------

## Security Considerations

- Store Stripe API keys in environment variables (`.env.local`)
- Verify webhook signatures using Stripe's signing secret
- Never expose secret keys in client-side code
- Use Stripe's official SDK for all API calls
- Implement idempotency keys for payment operations

------------------------------------------------------------------------

## Customer Portal

Stripe provides a hosted Customer Portal for users to:
- Update payment methods
- View billing history
- Download invoices
- Cancel subscription
- Update billing email

**Implementation**: Add "Manage Billing" button in user settings → redirect to Stripe Customer Portal

------------------------------------------------------------------------

## Pricing Strategy Notes

**Considerations for final pricing:**
- Market research on competitor pricing
- Target customer: automotive sales reps and dealership groups
- Value proposition: time saved, opportunities discovered
- Pricing model: per-user or per-dealership count
- Annual discount to encourage commitment (15-20% off)

**Suggested Initial Pricing (TBD):**
- Tier 2: $49/month or $490/year (save $98)
- Tier 3: $199/month or $1990/year (save $398)

------------------------------------------------------------------------

## Future Enhancements

- Add-ons (e.g., extra dealership slots, premium support)
- Usage-based billing for API calls
- Multi-seat pricing for automotive groups
- Custom enterprise contracts (off-platform)
- Referral discounts
- Free trial period (14-30 days) for Tier 2/3

------------------------------------------------------------------------

## Related Documentation

- Database schema: `BACKEND-PLAN.md`
- User roles and tiers: `types/index.ts`
- UI for plan selection: `app/admin/users/page.tsx`
