# Reusable Prompts for CPT Web App

## Build and Deploy to GitHub Pages

The application is now configured to deploy directly from the master branch using the `docs/` folder.

### Quick Deploy (Recommended)

Simply run:
```powershell
.\deploy.ps1
```

Or manually:
```bash
npm run build
git add docs CNAME
git commit -m "Deploy: [description]"
git push origin master
```

### Manual Steps

1. **Build the application:**
   - Ensure you're on master branch: `git checkout master`
   - Run `npm install` if dependencies are not installed
   - Run `npm run build` to create a production build
   - Build output will be in `docs/` directory

2. **Deploy:**
   - Copy CNAME to docs folder: `Copy-Item CNAME docs/CNAME`
   - Stage build files: `git add docs`
   - Commit: `git commit -m "Deploy: [description]"`
   - Push: `git push origin master`

3. **GitHub Pages Configuration:**
   - Go to repository Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `master`
   - Select folder: `/docs`
   - Save

### Notes:
- The `docs/` folder contains the build output and is committed to master
- The `CNAME` file should be in the `docs/` folder for custom domain support
- No need to switch branches - everything happens on master
- GitHub Pages will automatically serve from the `/docs` folder
