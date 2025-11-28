# Deploy script for GitHub Pages
# This script builds the app and deploys to the docs/ folder on master branch

Write-Host "Building application..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Staging build files..." -ForegroundColor Green
git add docs
git add CNAME

Write-Host "Committing changes..." -ForegroundColor Green
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: $timestamp"

Write-Host "Pushing to master..." -ForegroundColor Green
git push origin master

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Note: Make sure GitHub Pages is configured to serve from /docs folder" -ForegroundColor Yellow

