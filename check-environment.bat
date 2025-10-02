@echo off
title DealerScope Environment Check
color 0E

echo.
echo ============================================================
echo  DealerScope Development Environment Verification
echo ============================================================
echo.

set "ERROR_COUNT=0"

REM Check Node.js
echo [1/8] Node.js Check...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo   FAIL: Node.js not found
    set /a ERROR_COUNT+=1
) else (
    echo   PASS: Node.js installed
    node --version | findstr /r "v[0-9]*\.[0-9]*\.[0-9]*"
)
echo.

REM Check npm
echo [2/8] npm Check...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo   FAIL: npm not found
    set /a ERROR_COUNT+=1
) else (
    echo   PASS: npm available
    npm --version
)
echo.

REM Check Git
echo [3/8] Git Check...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo   WARNING: Git not found (recommended but not required)
) else (
    echo   PASS: Git installed
    git --version
)
echo.

REM Check Windows Terminal
echo [4/8] Windows Terminal Check...
wt --version >nul 2>&1
if %errorlevel% neq 0 (
    echo   INFO: Windows Terminal not found (recommended upgrade)
) else (
    echo   PASS: Windows Terminal available
)
echo.

REM Check PowerShell version
echo [5/8] PowerShell Check...
powershell -Command "$PSVersionTable.PSVersion" >nul 2>&1
if %errorlevel% neq 0 (
    echo   FAIL: PowerShell not accessible
    set /a ERROR_COUNT+=1
) else (
    echo   PASS: PowerShell available
    powershell -Command "Write-Host '  Version:' $PSVersionTable.PSVersion"
)
echo.

REM Check VS Code (optional)
echo [6/8] VS Code Check...
code --version >nul 2>&1
if %errorlevel% neq 0 (
    echo   INFO: VS Code not found (recommended but not required)
) else (
    echo   PASS: VS Code installed
    code --version | head -1
)
echo.

REM Check Documentation Files
echo [7/8] Documentation Check...
if not exist "CLAUDE.md" (
    echo   FAIL: CLAUDE.md not found - development standards missing
    set /a ERROR_COUNT+=1
) else (
    echo   PASS: CLAUDE.md found
)

if not exist "DOCUMENTATION\WIREFRAME-SPEC.md" (
    echo   FAIL: WIREFRAME-SPEC.md not found - requirements missing
    set /a ERROR_COUNT+=1
) else (
    echo   PASS: Requirements documentation found
)

if not exist "WIREFRAMES\01-sales-rep-dashboard.md" (
    echo   FAIL: Wireframe files not found
    set /a ERROR_COUNT+=1
) else (
    echo   PASS: Wireframe specifications found
)
echo.

REM Check Project Structure
echo [8/8] Project Structure Check...
if exist "package.json" (
    echo   INFO: Next.js project detected
    echo   Project ready for development
) else (
    echo   INFO: No Next.js project found
    echo   Run 'start-dealerscope.bat' to create new project
)
echo.

REM Summary
echo ============================================================
echo  ENVIRONMENT CHECK SUMMARY
echo ============================================================
if %ERROR_COUNT% equ 0 (
    echo   STATUS: READY FOR DEVELOPMENT
    echo   All critical requirements met
    color 0A
) else (
    echo   STATUS: SETUP REQUIRED
    echo   Errors found: %ERROR_COUNT%
    echo.
    echo   Required Actions:
    if not exist "node" (
        echo   - Install Node.js LTS from https://nodejs.org/
    )
    if not exist "npm" (
        echo   - Ensure npm is included with Node.js installation
    )
    color 0C
)
echo.
echo   Recommended Tools:
echo   - Git for Windows: https://git-scm.com/download/win
echo   - VS Code: https://code.visualstudio.com/download
echo   - Windows Terminal: Microsoft Store
echo.

if %ERROR_COUNT% equ 0 (
    echo   Ready to run: start-dealerscope.bat
) else (
    echo   Fix errors above, then re-run this check
)

echo.
echo   Press any key to exit...
pause >nul