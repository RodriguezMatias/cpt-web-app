# Reusable Prompts for CPT Web App

This document contains reusable prompts and instructions for common tasks in this project.

## Build and Deploy to GitHub Pages

Use this prompt to build the Angular application and deploy it to the `deploy-branch` for GitHub Pages:

```
Build the Angular application and deploy it to GitHub Pages. Follow these steps:

1. Build the application:
   - Run `npm install` if dependencies are not installed
   - Run `npm run build` to create a production build
   - Verify the build output is in `dist/cpt-web/` directory

2. Deploy to deploy-branch:
   - Switch to master branch: `git checkout master`
   - Build the app: `npm run build`
   - Switch to deploy-branch: `git checkout deploy-branch`
   - Remove old files (except .git, .gitignore, dist, node_modules)
   - Copy all files from `dist/cpt-web/*` to the root of deploy-branch
   - Copy CNAME file from master branch to deploy-branch root
   - Stage all changes: `git add -A`
   - Commit with message: "Deploy: [description of changes]"
   - Push to remote: `git push origin deploy-branch`

3. Verify deployment:
   - Check that 404.html exists in the root of deploy-branch
   - Check that CNAME file exists for custom domain
   - Verify all build files are present

Note: The deploy-branch is used for GitHub Pages hosting. All build artifacts should be in the root of this branch.
```

## Fix GitHub Pages Routing (404 Errors)

Use this prompt to fix 404 errors on GitHub Pages for client-side routes:

```
Fix GitHub Pages routing issues for Angular SPA. The problem is that GitHub Pages doesn't support client-side routing - when users navigate to routes like /aeronaves/LV-EJP, GitHub Pages tries to find a file at that path and returns a 404.

Solution:
1. Create `src/404.html` file with a redirect script that:
   - Captures the current URL path
   - Redirects to index.html with the path as a query parameter
   - Uses the standard GitHub Pages SPA workaround (segmentCount = 0 for root domain)

2. Update `angular.json` to copy 404.html to build output:
   - Add to assets array in build options:
     {
       "glob": "404.html",
       "input": "src",
       "output": "/"
     }

3. Update `src/index.html` to handle the redirect:
   - Add a script that checks for redirect in query string
   - Restores the correct URL using window.history.replaceState
   - This allows Angular router to handle the route correctly

The 404.html file will be served by GitHub Pages for any route that doesn't exist, and it will redirect to index.html with the path preserved, allowing Angular to handle the routing.
```

## Configure Git User

Use this prompt to configure git user information:

```
Configure git user name and email for this repository:
- Set user.name to: matias.rodriguez
- Set user.email to: mati.rodriguez.9616@gmail.com

Use commands:
- `git config user.name "matias.rodriguez"`
- `git config user.email "mati.rodriguez.9616@gmail.com"`
```

## Complete Deployment Workflow

Use this prompt for a complete build and deployment workflow:

```
I need to build and deploy the Angular application to GitHub Pages. Here's what needs to happen:

1. **Prerequisites:**
   - Ensure git user is configured (name: matias.rodriguez, email: mati.rodriguez.9616@gmail.com)
   - Ensure we're on master branch
   - Ensure dependencies are installed

2. **Build Process:**
   - Run `npm install` to ensure all dependencies are installed
   - Run `npm run build` to create production build
   - Verify build output in `dist/cpt-web/` includes:
     - index.html (with routing fix script)
     - 404.html (for GitHub Pages routing)
     - All JavaScript bundles
     - All assets
     - All styles

3. **Deployment Process:**
   - Switch to deploy-branch: `git checkout deploy-branch`
   - Clean old files (remove everything except .git, .gitignore, dist, node_modules)
   - Copy all files from `dist/cpt-web/*` to root of deploy-branch
   - Ensure CNAME file exists in root (copy from master if needed)
   - Stage all changes: `git add -A`
   - Commit with descriptive message
   - Push to remote: `git push origin deploy-branch`

4. **Verification:**
   - Check that 404.html exists in root
   - Check that CNAME file exists
   - Verify all build artifacts are present
   - Test that routes work after GitHub Pages updates (may take a few minutes)

The deploy-branch is what GitHub Pages serves, so all production files must be in the root of that branch.
```

## Troubleshooting GitHub Pages Deployment

Use this prompt when troubleshooting deployment issues:

```
Troubleshoot GitHub Pages deployment issues:

1. **404 errors on routes:**
   - Verify 404.html exists in root of deploy-branch
   - Check that index.html has the redirect restoration script
   - Verify angular.json includes 404.html in assets configuration
   - Rebuild and redeploy if files are missing

2. **Custom domain not working:**
   - Verify CNAME file exists in root of deploy-branch
   - Check CNAME contains: cplaneadorestandil.com.ar
   - Ensure DNS is properly configured

3. **Build files missing:**
   - Verify build completed successfully
   - Check dist/cpt-web/ contains all files
   - Ensure files were copied to deploy-branch root
   - Check git status to see what files are tracked

4. **Git repository issues:**
   - If git commands fail, check .git directory exists
   - Verify remote is configured: `git remote -v`
   - If needed, restore from remote: `git fetch origin` then `git checkout [branch]`
```

## Quick Reference Commands

```
# Build and Deploy Quick Reference

# 1. Build
npm install
npm run build

# 2. Deploy
git checkout master
npm run build
git checkout deploy-branch
# Remove old files (keep .git, .gitignore, dist, node_modules)
Copy-Item -Path dist\cpt-web\* -Destination . -Recurse -Force
Copy-Item -Path ..\master\CNAME -Destination . -Force
git add -A
git commit -m "Deploy: [description]"
git push origin deploy-branch

# 3. Configure Git
git config user.name "matias.rodriguez"
git config user.email "mati.rodriguez.9616@gmail.com"

# 4. Check Status
git status
git branch
git remote -v
```

