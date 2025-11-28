# Reusable Prompts for CPT Web App

## Build and Deploy to GitHub Pages

```
Build the Angular application and deploy it to GitHub Pages. Follow these steps:

1. Build the application:
   - Switch to master branch: `git checkout master`
   - Run `npm install` if dependencies are not installed
   - Run `npm run build` to create a production build
   - Verify the build output is in `dist/cpt-web/` directory

2. Deploy to deploy-branch:
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
