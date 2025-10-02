# DealerScope Project - Complete Specification Suite

**Automotive Vendor Sales Enablement SaaS Platform for ANY Automotive Vendor Sales Representatives**

This directory contains the complete specification suite for DealerScope, organized according to strict file system standards for maximum clarity and maintainability.

---

## Quick Start

### **For AI Developers Building the Demo**
1. **🎯 START HERE**: `/AI-DEVELOPER-PROMPT.md` - MASTER PROMPT with complete context and zero confusion
2. **🔥 CRITICAL**: `/CLAUDE.md` - Development standards and NO EMOJIS policy (ROOT LEVEL)
3. **🚀 SETUP**: Run `check-environment.bat` then `start-dealerscope.bat` (Windows)
4. **📋 REQUIREMENTS**: `/DOCUMENTATION/WIREFRAME-SPEC.md` - Functional requirements
5. **🎨 DESIGN**: `/DOCUMENTATION/DESIGN-ELEMENTS.md` - Visual design system
6. **📐 WIREFRAMES**: `/WIREFRAMES/` directory - Complete interface specifications

### **For Human Developers Building the Demo (Windows)**
1. **🔥 FIRST**: Run `check-environment.bat` to verify your Windows development setup
2. **🚀 LAUNCH**: Run `start-dealerscope.bat` to create and start the development environment
3. **📖 READ**: `/CLAUDE.md` - Essential development standards and behavior guidelines (ROOT LEVEL)
4. **📋 REQUIREMENTS**: `/DOCUMENTATION/WIREFRAME-SPEC.md` - Core functional requirements
5. **🎨 DESIGN**: `/DOCUMENTATION/DESIGN-ELEMENTS.md` - Visual design system
6. **📐 WIREFRAMES**: `/WIREFRAMES/` directory - Complete interface specifications

### **For Designers & UX**
1. **Design principles**: `/DOCUMENTATION/BESTPRACTICES.md` - Dashboard design standards
2. **Visual system**: `/DOCUMENTATION/DESIGN-ELEMENTS.md` - Colors, typography, animations
3. **Component library**: `/WIREFRAMES/08-design-system.md` - Reusable UI patterns
4. **User flows**: `/WIREFRAMES/01-07-*.md` - Detailed interface specifications

### **For Project Managers**
1. **Project overview**: `/WIREFRAMES/00-project-overview.md` - Master project structure
2. **Requirements**: `/DOCUMENTATION/WIREFRAME-SPEC.md` - Functional specs and acceptance criteria
3. **Feature breakdown**: Individual wireframe files for detailed feature requirements
4. **Standards compliance**: `/DOCUMENTATION/FILE-SYSTEM-STANDARDS.md` - Organization rules

---

## Directory Structure

```
CLAUDE.md                # 🔥 CRITICAL: Development standards & AI behavior guide (ROOT LEVEL)

/DOCUMENTATION/           # Core project documentation
├── WIREFRAME-SPEC.md    # Functional requirements & acceptance criteria
├── BESTPRACTICES.md     # Dashboard design principles
├── DESIGN-ELEMENTS.md   # Visual design system (colors, typography, animations)
└── FILE-SYSTEM-STANDARDS.md  # Strict organizational standards

/WIREFRAMES/             # Complete UI specifications (numbered for build order)
├── 00-project-overview.md     # Master project structure & user workflows
├── 01-sales-rep-dashboard.md  # Primary dashboard with change detection
├── 02-sales-rep-reports.md    # Geographic opportunity builder
├── 03-sales-rep-alerts.md     # Multi-channel notification setup
├── 04-admin-overview.md       # Executive dashboard with business metrics
├── 05-admin-detection-rules.md # Vendor/CSS selector management
├── 06-admin-operations.md     # User management, billing, communications
├── 07-admin-ai-selector-builder.md # AI-powered rule generation
└── 08-design-system.md        # Component library & layout patterns


/ARCHIVE/               # Historical documentation
└── CLEANUP-COMPLETE.md # Project completion log
```

---

## Key Project Information

### **Core Value Proposition**
> "Answer 'Which dealerships in my list just changed something?' in under 30 seconds"

### **Target Users**
- **Sales Representatives**: Automotive vendor sales reps for ANY company (chat tools, CRM, analytics, marketing, finance, etc.)
- **Admin Users**: System administrators and business managers
- **Use Cases**: Territory monitoring, opportunity identification, competitive intelligence across ALL automotive technology sectors

### **Technical Stack (React/Node.js)**
- **Frontend Framework**: Next.js 14+ with App Router and TypeScript
- **UI Library**: React 18+ with modern hooks
- **Styling**: Tailwind CSS + Framer Motion for animations
- **State Management**: Zustand or React Context API
- **Backend**: Node.js with Next.js API Routes/Server Actions
- **Database**: Mock data for demo (ready for real database integration)
- **Development**: Windows-optimized environment with batch scripts
- **Design System**: Complete component library specified in wireframes

---

## File System Rules

### **🚨 CRITICAL COMPLIANCE REQUIREMENTS**

1. **No file modifications without reading `/DOCUMENTATION/FILE-SYSTEM-STANDARDS.md`**
2. **Maximum 500 lines per file** (enforced per CLAUDE.md)
3. **Single responsibility per file** - no feature overlap
4. **Consistent naming conventions** - see FILE-SYSTEM-STANDARDS.md
5. **Cross-reference validation** - maintain system integrity

### **Authority Hierarchy**
1. `/CLAUDE.md` - Development standards (highest authority, ROOT LEVEL)
2. `/DOCUMENTATION/WIREFRAME-SPEC.md` - Functional requirements
3. `/DOCUMENTATION/BESTPRACTICES.md` - UI/UX principles
4. `/DOCUMENTATION/DESIGN-ELEMENTS.md` - Visual specifications
5. `/WIREFRAMES/` files - Implementation details

---

## Windows Development Automation

### **Batch Scripts Available**
- **`check-environment.bat`**: Verify Windows development environment setup
- **`start-dealerscope.bat`**: Create new Next.js project and launch development server
- **`dev-server.bat`**: Quick launcher for existing projects

### **First Time Setup**
1. Run `check-environment.bat` to verify your system
2. Install any missing requirements (Node.js, Git)
3. Run `start-dealerscope.bat` to create and launch the project
4. Development server opens automatically at http://localhost:3000

### **Daily Development**
- Run `dev-server.bat` to quickly start your existing project
- All scripts handle Windows-specific configurations automatically

---

## Implementation Guidance

### **Build Order for Demo**
1. **Infrastructure**: Design system + navigation (`08-design-system.md`)
2. **Sales Rep Core**: Dashboard + reports (`01-sales-rep-dashboard.md`, `02-sales-rep-reports.md`)
3. **Sales Rep Complete**: Alerts integration (`03-sales-rep-alerts.md`)
4. **Admin Core**: Overview dashboard (`04-admin-overview.md`)
5. **Admin Advanced**: Detection rules + operations (`05-admin-detection-rules.md`, `06-admin-operations.md`)
6. **Admin Premium**: AI selector builder (`07-admin-ai-selector-builder.md`)

### **Quality Gates**
- All features must support the "under 30 seconds" core value proposition
- Every interface must be accessible for both user types
- Complete responsive design (mobile/tablet/desktop)
- Dark/light mode support per DESIGN-ELEMENTS.md
- All states documented and implemented (empty, loading, error, success)

---

## Getting Support

### **For Technical Questions**
- Reference /CLAUDE.md for development approach and standards (ROOT LEVEL)
- Check wireframe files for specific implementation details
- Validate against /DOCUMENTATION/FILE-SYSTEM-STANDARDS.md for compliance

### **For Design Questions**
- BESTPRACTICES.md for UI/UX principles
- DESIGN-ELEMENTS.md for visual specifications
- 08-design-system.md for component patterns

### **For Requirements Questions**
- WIREFRAME-SPEC.md for functional requirements
- 00-project-overview.md for workflow understanding
- Individual wireframe files for feature details

---

**This specification suite provides everything needed to build a production-quality DealerScope demo. Every detail has been carefully considered and cross-validated for consistency and completeness.**