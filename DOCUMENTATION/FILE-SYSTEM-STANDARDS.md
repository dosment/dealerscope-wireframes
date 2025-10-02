# DealerScope File System Standards

**STRICT COMPLIANCE REQUIRED** - This document defines the mandatory file organization, naming conventions, and structural standards for the DealerScope project.

---

## Core Principles

### 1. **Single Source of Truth**
- Each piece of information exists in exactly one place
- No duplicate specifications across files
- Clear hierarchical referencing system

### 2. **Modular Organization**
- Maximum 500 lines per file (per CLAUDE.md standards)
- Single responsibility per file
- Logical grouping with clear boundaries

### 3. **Predictable Structure**
- Consistent naming patterns across all files
- Standardized file types and purposes
- Clear dependency relationships

### 4. **NO EMOJIS POLICY**
- **ABSOLUTELY PROHIBITED** in all files and code
- Use descriptive text labels instead
- Professional B2B SaaS standards required
- Accessibility and cross-platform compatibility
- See CLAUDE.md for complete emoji prohibition details

---

## Directory Structure

```
C:\projects\wireframes3\
├── AI-DEVELOPER-PROMPT.md  # 🎯 MASTER PROMPT: Complete AI developer context (ZERO CONFUSION)
├── CLAUDE.md               # 🔥 CRITICAL: Development standards & AI behavior guide (ROOT LEVEL)
├── README.md               # Project overview and quick start guide
├── start-dealerscope.bat   # Windows launcher script - creates and starts development environment
├── dev-server.bat          # Quick development server launcher for existing projects
├── check-environment.bat   # Environment verification and setup validation
│
├── DOCUMENTATION/           # Core project documentation
│   ├── BESTPRACTICES.md    # Dashboard design principles
│   ├── WIREFRAME-SPEC.md   # Functional requirements & acceptance criteria
│   ├── DESIGN-ELEMENTS.md  # Visual design system & branding
│   └── FILE-SYSTEM-STANDARDS.md  # This file
│
├── WIREFRAMES/             # User interface specifications
│   ├── 00-project-overview.md      # Master project structure
│   ├── 01-sales-rep-dashboard.md   # Sales rep primary interface
│   ├── 02-sales-rep-reports.md     # Geographic opportunity builder
│   ├── 03-sales-rep-alerts.md      # Multi-channel notifications
│   ├── 04-admin-overview.md        # Executive dashboard
│   ├── 05-admin-detection-rules.md # Vendor/CSS management
│   ├── 06-admin-operations.md      # User/billing operations
│   ├── 07-admin-ai-selector-builder.md # AI-powered rule creation
│   └── 08-design-system.md         # Component library
│
└── ARCHIVE/                # Historical and reference files
    └── CLEANUP-COMPLETE.md # Project completion documentation
```

---

## File Naming Conventions

### **MANDATORY** Naming Rules

#### 1. **Documentation Files**
- **Format**: `FILENAME.md` (ALL CAPS for core docs)
- **Purpose**: Single word describing content
- **Examples**: `CLAUDE.md`, `WIREFRAME-SPEC.md`

#### 2. **Wireframe Specifications**
- **Format**: `##-category-specific-name.md`
- **Numbering**: Sequential 00-99 with logical grouping
- **Categories**:
  - `00-0#`: Project overview and structure
  - `01-03`: Sales rep user interfaces
  - `04-07`: Admin user interfaces
  - `08-09`: Design system and shared components

#### 3. **Prototype Files**
- **Format**: `descriptive-name.html` (lowercase with hyphens)
- **Purpose**: Interactive demonstrations of wireframe concepts
- **Styling**: Separate CSS files, grouped by functionality

#### 4. **Windows Batch Scripts**
- **Format**: `descriptive-action.bat` (lowercase with hyphens)
- **Purpose**: Windows development environment automation
- **Location**: Project root directory
- **Examples**: `start-dealerscope.bat`, `dev-server.bat`, `check-environment.bat`

#### 5. **Asset Organization**
- **Images**: `/assets/images/` (if added)
- **Icons**: `/assets/icons/` (if added)
- **Fonts**: `/assets/fonts/` (if added)

---

## Content Organization Standards

### **File Header Requirements**

Every file MUST begin with:
```markdown
# [File Title] - [Brief Purpose]

**Primary Job:** [Single sentence describing the file's main purpose]

[Optional context or background]

---
```

### **Section Structure Standards**

#### 1. **Wireframe Files**
```markdown
# Title - Purpose
**Primary Job:** Core function statement

## Layout Structure
[ASCII art layout diagram]

## Component Specifications
[Detailed interface descriptions]

## Key Features
[Bullet point feature list]

## States
[Different UI states and conditions]
```

#### 2. **Documentation Files**
```markdown
# Title
**Purpose:** What this document provides

## Section 1
[Organized content with clear hierarchies]

## Implementation Guidelines
[How to apply the information]

## Standards & Requirements
[Mandatory compliance items]
```

---

## Cross-File Reference System

### **Hierarchical Authority**
1. **CLAUDE.md** - Development and behavioral standards (highest authority)
2. **WIREFRAME-SPEC.md** - Functional requirements and acceptance criteria
3. **BESTPRACTICES.md** - UI/UX design principles
4. **DESIGN-ELEMENTS.md** - Visual design specifications
5. **Wireframe files** - Detailed implementation guidance

### **Reference Format**
- **File references**: `See [filename] for details`
- **Section references**: `As specified in CLAUDE.md Section X`
- **Cross-wireframe references**: `Implements workflow from 01-sales-rep-dashboard.md`

### **Dependency Rules**
- Wireframe files MAY reference documentation files
- Documentation files MUST NOT reference wireframe files
- Implementation files MUST reference specification files
- NO circular dependencies allowed

---

## Content Standards

### **Consistency Requirements**

#### 1. **Terminology**
- **Product Name**: "DealerScope" (consistent across all files)
- **User Types**: "Sales Rep", "Admin" (standardized)
- **Features**: Identical naming across all references
- **Status Indicators**: Consistent iconography and color coding

#### 2. **Data Examples**
- **Dealership Names**: Use same set across all wireframes
- **User Names**: Consistent personas throughout
- **Locations**: Texas-based examples for geographic features
- **Metrics**: Realistic, consistent numbers across admin views

#### 3. **UI Patterns**
- **Navigation**: Identical structure in all wireframes
- **Button Labels**: Consistent action verbs
- **Status Messages**: Standardized success/error/warning patterns
- **Modal Patterns**: Consistent layout and behavior

---

## Quality Assurance Checklist

### **Before Adding Any File**
- [ ] File name follows mandatory conventions
- [ ] Content fits within single responsibility scope
- [ ] No duplication of existing information
- [ ] Cross-references are accurate and necessary
- [ ] Header format is compliant
- [ ] Terminology is consistent with existing files

### **Before Modifying Existing Files**
- [ ] Change doesn't create contradictions
- [ ] Dependent files are updated accordingly
- [ ] File size remains under 500 lines
- [ ] Cross-references remain valid
- [ ] Consistency is maintained across related content

### **File Integration Requirements**
- [ ] New content supports existing user workflows
- [ ] Design patterns align with design system
- [ ] Technical specifications match development standards
- [ ] Business logic aligns with project objectives

---

## Violation Consequences

### **Immediate Rejection Criteria**
- File names not following conventions
- Duplicate content across files
- Contradictions with existing specifications
- Missing required headers or sections
- Files exceeding 500 lines

### **Review Requirements**
- All new files require approval against this standard
- Modifications must maintain system integrity
- Any structural changes require documentation update

---

## Maintenance Protocol

### **Regular Reviews**
- **Weekly**: Cross-reference validation
- **Monthly**: Terminology consistency check
- **Per Release**: Complete system compliance audit

### **Update Procedures**
1. Identify scope of change impact
2. Update primary file
3. Update all dependent references
4. Validate system consistency
5. Document change rationale

---

## Windows Development Environment Standards

### **Platform Requirements**
- **Operating System**: Windows 10/11 (primary development target)
- **Shell**: Windows Command Prompt (cmd) for batch scripts
- **Line Endings**: CRLF (Windows standard) - configured in Git and IDEs
- **Path Format**: Windows-style (`C:\projects\wireframes3\`) in documentation

### **Required Development Tools**
- **Node.js**: Latest LTS version for Next.js development
- **npm**: Package manager (included with Node.js)
- **Git for Windows**: Version control with Windows line ending handling

### **Recommended Tools**
- **VS Code**: Primary IDE with Windows-specific extensions
- **Windows Terminal**: Enhanced command line experience
- **PowerShell**: Advanced scripting capabilities

### **Automation Scripts**
- **`start-dealerscope.bat`**: Complete environment setup and project creation
- **`dev-server.bat`**: Quick development server launcher
- **`check-environment.bat`**: Environment verification and validation

### **Git Configuration for Windows**
```bash
git config core.autocrlf true
git config core.eol crlf
```

---

## Implementation Guidelines

### **For Developers**
- Read ../CLAUDE.md first for behavioral standards (located at root level)
- Use wireframe files for implementation guidance
- Reference design system for component specifications
- Maintain file organization in code structure
- Run `check-environment.bat` before starting development

### **For Designers**
- Follow BESTPRACTICES.md for UI/UX principles
- Implement DESIGN-ELEMENTS.md visual standards
- Ensure consistency with wireframe specifications
- Document new patterns in appropriate files

### **For Project Managers**
- Use WIREFRAME-SPEC.md for requirement validation
- Track feature completion against wireframe files
- Ensure cross-file consistency in requirements
- Maintain this file system standard compliance

---

**COMPLIANCE IS MANDATORY** - Deviation from these standards compromises project integrity and development efficiency. When in doubt, maintain consistency with existing patterns and consult the established hierarchy.