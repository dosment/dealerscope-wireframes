@echo off
title DealerScope Development Server
color 0B

echo.
echo ============================================================
echo  DealerScope - Quick Development Server Launcher
echo ============================================================
echo.

REM Check if we're in a Next.js project directory
if not exist "package.json" (
    echo ERROR: No package.json found in current directory
    echo This script must be run from the Next.js project root
    echo.
    echo Run 'start-dealerscope.bat' first to create a new project
    echo.
    pause
    exit /b 1
)

echo [1/2] Installing/updating dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    echo.
    pause
    exit /b 1
)
echo   Dependencies updated successfully
echo.

echo [2/2] Starting development server...
echo.
echo   Development server will start at: http://localhost:3000
echo   Press Ctrl+C in the server window to stop
echo.

REM Start development server
start "DealerScope Dev Server" cmd /k "npm run dev"

REM Wait for server to start
timeout /t 3 >nul

REM Open browser
start http://localhost:3000

echo   Server started and browser opened
echo   Check the development server window for logs
echo.
echo   Press any key to exit this launcher...
pause >nul