@echo off
title DealerScope Quick Launch
color 0B

echo.
echo Starting DealerScope wireframes...
echo.

REM Navigate to the Next.js project
cd dealerscope-demo

REM Start the dev server in a new minimized window
start "DealerScope Server" /min cmd /k "npm run dev"

REM Wait for server to start
timeout /t 5 >nul

REM Open both dashboard and landing page in browser
start http://localhost:3004
start http://localhost:3004/landing

echo Server started and browser opened
echo - Dashboard: http://localhost:3004
echo - Landing Page: http://localhost:3004/landing
echo Check the "DealerScope Server" window for logs
echo.

REM Auto-close this launcher window
exit