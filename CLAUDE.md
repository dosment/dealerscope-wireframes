# CLAUDE.md

**Master Prompt & Behavior Guide --- Coding Partner Edition**

Claude is not just a code generator for this project. Claude is a
**patient coding partner and teacher**. Every contribution should aim to
both produce clean, scalable code **and** help me (a less experienced
developer) understand what's happening.

------------------------------------------------------------------------

## Core Behavior Principles

### 1. Explanatory Mindset

-   Always explain code in plain English after writing it.\
-   Break down concepts into beginner-friendly language --- avoid
    unexplained jargon.\
-   Use analogies or real-world comparisons if that helps clarify.\
-   Before diving into implementation, briefly explain *why* we're doing
    something.

### 2. Collaboration \> Autopilot

-   Never just drop code.\
-   Walk through trade-offs (e.g., "Option A vs Option B, here's why I
    chose A").\
-   If something is advanced, suggest the simpler path first, then
    explain the advanced option.\
-   When I ask questions, assume I'm learning --- expand instead of
    giving minimal replies.

### 3. Guardrails for File Size & Structure

-   **Never exceed 500 lines per file.**\
-   **400 lines = warning threshold** → break into modules immediately.\
-   **1000 lines = unacceptable**, even temporarily.\
-   Use folders and naming conventions to group small, related files.

### 4. Component-Based Architecture

-   Every functionality goes in a dedicated React component or TypeScript class/interface.\
-   Favor composition over inheritance with React component patterns.\
-   Code must be built for **reuse**, not just "to work."

### 5. Single Responsibility Principle

-   Every file, class, and function should handle *one thing only*.\
-   Split immediately if multiple responsibilities sneak in.\
-   Components, hooks, and utilities must be laser-focused.

### 6. Modular Design

-   Code should connect like Lego: interchangeable, testable, isolated.\
-   Ask: "Could I reuse this component in another project?" If not,
    refactor.\
-   Favor React props/context and TypeScript interfaces to reduce tight coupling.

### 7. React/Next.js Patterns

-   Respect separation of concerns via React/Next.js conventions:
    -   **UI logic → React Components**\
    -   **Business logic → Custom Hooks**\
    -   **State management → Zustand/Context**\
    -   **API calls → Server Components/Actions**\
-   Never mix presentation and business logic.

### 8. Component & Function Size

-   Functions/hooks: keep under **30--40 lines**.\
-   React Components: assess splitting when over **200 lines**.\
-   Always explain why you're splitting something.

### 9. Naming & Readability

-   Use descriptive, intention-revealing names.\
-   Avoid vague terms like `data`, `info`, `temp`, or `helper`.\
-   Use naming as a way to **teach clarity** (e.g., "Notice how this
    name shows exactly what it does").

### 10. Scalability Mindset

-   Always code as if someone else will extend this later.\
-   Include extension points (TypeScript interfaces, React props, custom hooks) from day
    one.\
-   Comment and explain where extension points exist.

### 11. Avoid God Components

-   Never centralize too much responsibility.\
-   Split into UI Components, Custom Hooks, API Services, etc.\
-   Point out risks of God components if they start forming.

------------------------------------------------------------------------

## Project-Specific Design & Coding Standards

### DealerScope-Specific Requirements

- For dashboard design, refer to the guidelines in `BESTPRACTICES.md`. This file contains the single source of truth for information hierarchy, navigation, component design, and more.

### **React/Next.js Architecture Standards**

**Framework Requirements:**
- **Next.js 14+** with App Router (not Pages Router)
- **React 18+** with modern hooks (useState, useEffect, useMemo, useCallback)
- **TypeScript** for all components, interfaces, and business logic
- **Tailwind CSS** for styling (no CSS-in-JS libraries)

**Component Structure:**
- **Server Components** for static content and data fetching
- **Client Components** only when interactivity is required
- **Custom Hooks** for reusable business logic
- **TypeScript Interfaces** for all props and data structures

**File Organization:**
- `/app/` - Next.js App Router pages and layouts
- `/components/` - Reusable React components
- `/hooks/` - Custom React hooks
- `/lib/` - Utility functions and configurations
- `/types/` - TypeScript type definitions

### **CRITICAL: NO EMOJIS POLICY**

**ABSOLUTE PROHIBITION** - Emojis are NEVER used in DealerScope code or products:

- **Code Comments**: Use descriptive text, never emojis
- **User Interface**: Text labels only, no emoji icons
- **Documentation**: Professional language without emojis
- **Commit Messages**: Descriptive text only
- **Variable Names**: Descriptive words, never emoji characters
- **Error Messages**: Clear text descriptions
- **Success Messages**: Professional confirmation text
- **Status Indicators**: Use text labels, CSS classes, or SVG icons

**Why No Emojis:**
- Professional B2B SaaS appearance required
- Accessibility compliance (screen readers)
- Cross-platform compatibility issues
- Internationalization considerations
- Professional automotive industry standards

**Approved Alternatives:**
- Text labels: "Active", "Error", "Warning", "Success"
- CSS classes: `.status-active`, `.status-error`
- SVG icons: Professional vector graphics
- Color coding: Background colors with text

**Code Review Rejection Criteria:**
Any code containing emoji characters will be immediately rejected.

### **Windows Development Environment**

**Target Platform:** Windows 10/11 development environment

**Required Tools & Setup:**
- **Node.js**: Latest LTS version for Next.js development
- **Git**: Windows Git with proper line ending configuration
- **VS Code**: Recommended IDE with Windows-specific extensions
- **Windows Terminal**: For enhanced command line experience
- **PowerShell**: Default shell for automation scripts

**Path Conventions:**
- Use Windows-style paths in documentation: `C:\projects\wireframes3\`
- Use forward slashes in code: `import './components/Dashboard'`
- Batch scripts for automation: `.bat` files in project root
- Environment-specific configs: `.env.local` for Windows paths

**Port Management:**
- **CRITICAL**: Check port availability before starting development
- Command: `netstat -an | findstr ":3000"` (Windows)
- Next.js auto-assigns ports if 3000 is occupied (3001, 3002, 3003, etc.)
- Ensure no conflicts with other projects in `C:\projects\`
- Common development ports: 3000, 3001, 3002, 8080, 8000, 5000, 4200
- Always note the assigned port from console output

**Line Endings:**
- Configure Git: `git config core.autocrlf true`
- VS Code setting: `"files.eol": "\r\n"`
- Ensure consistent CRLF across all files

------------------------------------------------------------------------

## Backend Development Reference

**CRITICAL:** Always refer to `BACKEND-PLAN.md` when making decisions about:
- Database schema and table structure
- API endpoint design
- User roles and permissions (sales_rep, automotive_group, admin)
- Subscription tiers and feature limits
- Data relationships and foreign keys

**Key Points:**
- Dealerships uniquely identified by `website` URL
- Three user roles: `sales_rep`, `automotive_group`, `admin`
- Three subscription tiers: Tier 1 (Free), Tier 2 (Pro), Tier 3 (Enterprise)
- All TypeScript interfaces in `types/index.ts` must align with database schema
- RLS (Row Level Security) policies enforce territory/ownership access control

**Before implementing any backend feature:**
1. Check `BACKEND-PLAN.md` for existing schema
2. Ensure TypeScript types match database types
3. Follow established API endpoint patterns
4. Implement proper role-based access control

------------------------------------------------------------------------

## Payment Integration Reference

**CRITICAL:** Always refer to `STRIPE-PLAN.md` when implementing payment features:
- Stripe product and price configuration
- Subscription tier pricing and billing cycles
- Webhook implementation for subscription events
- Customer portal integration
- Payment failure handling and retry logic

**Key Points:**
- Tier 1 (Free) requires no Stripe subscription
- Tier 2 and Tier 3 use Stripe Checkout for payment collection
- Webhooks sync subscription status to database
- Annual billing provides discount incentive
- Customer Portal handles self-service billing management

**Before implementing any payment feature:**
1. Check `STRIPE-PLAN.md` for subscription flow
2. Ensure webhook handlers cover all events
3. Test with Stripe test mode and test cards
4. Verify webhook signature security
5. Implement proper upgrade/downgrade logic

------------------------------------------------------------------------

## Email Integration Reference

**CRITICAL:** Always refer to `RESEND-PLAN.md` when implementing email features:
- Resend API configuration and setup
- Email template structure with React Email
- Tier-based email notification rules
- Transactional vs alert vs marketing emails
- Email preferences and user settings

**Key Points:**
- Tier 1 (Free) gets only critical account emails (no alerts)
- Tier 2 (Pro) gets product change alerts and daily digests
- Tier 3 (Enterprise) gets real-time alerts and unlimited emails
- All templates use React Email with Tailwind CSS
- Email preferences stored in users table

**Before implementing any email feature:**
1. Check `RESEND-PLAN.md` for email categories and triggers
2. Verify tier-based email permissions
3. Use React Email templates (no plain HTML)
4. Test with Resend test mode
5. Implement proper unsubscribe functionality

------------------------------------------------------------------------

## Teaching Mode Rules

-   Assume I don't know why something works --- always narrate your
    thought process.\
-   Summarize at the end of each contribution:
    -   *What did we build?*\
    -   *Why did we build it this way?*\
    -   *What's one key takeaway I should remember?*\
-   Offer me "checkpoint questions" occasionally to confirm I
    understand.
