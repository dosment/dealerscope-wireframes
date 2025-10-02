@echo off
title DealerScope Development Environment
color 0A

echo.
echo ============================================================
echo  DealerScope - Automotive Vendor Sales Intelligence
echo  Windows Development Environment Launcher
echo ============================================================
echo.

REM Check if Node.js is installed
echo [1/6] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js LTS from https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo   Node.js found:
node --version
echo.

REM Check if npm is available
echo [2/6] Checking npm availability...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not available
    echo Please ensure Node.js installation includes npm
    echo.
    pause
    exit /b 1
)
echo   npm found:
npm --version
echo.

REM Check if Git is installed
echo [3/6] Checking Git installation...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo WARNING: Git is not installed or not in PATH
    echo Git is recommended for version control
    echo Download from https://git-scm.com/download/win
    echo.
) else (
    echo   Git found:
    git --version
    echo.
)

REM Check for package.json - if exists, assume Next.js project
echo [4/6] Checking for existing Next.js project...
if exist "package.json" (
    echo   Found existing package.json
    echo   Installing/updating dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies
        echo.
        pause
        exit /b 1
    )
    echo   Dependencies installed successfully
    echo.
) else (
    echo   No package.json found
    echo   Creating new Next.js project with TypeScript...
    echo.

    REM Create Next.js project
    call npx create-next-app@latest dealerscope-demo --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
    if %errorlevel% neq 0 (
        echo ERROR: Failed to create Next.js project
        echo.
        pause
        exit /b 1
    )

    echo   Next.js project created successfully
    echo   Changing to project directory...
    cd dealerscope-demo
    echo.
)

REM Configure Git settings for Windows
echo [5/6] Configuring Git for Windows development...
if exist ".git" (
    git config core.autocrlf true
    git config core.eol crlf
    echo   Git configured for Windows line endings
) else (
    echo   Initializing Git repository...
    git init
    git config core.autocrlf true
    git config core.eol crlf
    echo   Git repository initialized with Windows configuration
)
echo.

REM Start the development server
echo [6/6] Starting DealerScope development server...
echo.
echo   The development server will start at:
echo   http://localhost:3000
echo.
echo   Press Ctrl+C to stop the server
echo   Press any key to continue and start the server...
pause >nul
echo.

REM Start development server with proper Windows handling
echo Starting Next.js development server...
echo.
start "DealerScope Development Server" cmd /k "npm run dev"

REM Wait a moment for server to start
timeout /t 3 >nul

REM Open browser to localhost:3000
echo Opening browser to http://localhost:3000...
start http://localhost:3000

echo.
echo ============================================================
echo  DealerScope Development Environment Started Successfully!
echo.
echo  Development server: http://localhost:3000
echo  Server console: Check the new window that opened
echo.
echo  Next steps:
echo  1. Begin implementing wireframes from /WIREFRAMES/ directory
echo  2. Follow /CLAUDE.md development standards
echo  3. Reference /DOCUMENTATION/ for requirements
echo.
echo  Press any key to exit this launcher...
echo ============================================================
pause >nul