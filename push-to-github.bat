@echo off
title Push Rokto Chai to GitHub
echo ===================================================
echo Pushing Rokto Chai / BloodBondhu code to GitHub...
echo ===================================================
cd /d "C:\Users\UESR\.gemini\antigravity\worktrees\Website\blood_donation_ecosystem"
git push origin blood_donation_ecosystem:main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ===================================================
    echo SUCCESS! Code pushed successfully to GitHub!
    echo Vercel will now automatically deploy your website!
    echo ===================================================
) else (
    echo [ERROR] Push failed. Please check the error message above.
)
pause
