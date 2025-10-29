# Widget CDN Deployment Steps

## Current Status
✅ Widget built successfully (280KB)
✅ Git repository initialized
✅ Files committed to local repository

## Next Steps

### 1. Create GitHub Repository

Go to GitHub and create a new repository:
- Repository name: `booking-widget-cdn`
- Visibility: **Public** (required for GitHub Pages)
- Do NOT initialize with README (we already have one)

Or use this direct link: https://github.com/new

### 2. Push to GitHub

After creating the repository, run these commands:

```bash
cd C:/Users/DELL/Documents/Rorschach/booking-widget-cdn
git remote add origin https://github.com/YOUR_USERNAME/booking-widget-cdn.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository settings: `https://github.com/YOUR_USERNAME/booking-widget-cdn/settings/pages`
2. Under "Source", select:
   - **Branch**: main
   - **Folder**: / (root)
3. Click "Save"

GitHub will build and deploy your site. This takes 1-2 minutes.

### 4. Verify Deployment

After deployment completes, your widget will be available at:

```
https://YOUR_USERNAME.github.io/booking-widget-cdn/latest/booking-widget.js
```

Test it:
```bash
curl -I https://YOUR_USERNAME.github.io/booking-widget-cdn/latest/booking-widget.js
```

You should get a `200 OK` response.

### 5. Update Environment Variables

Add the CDN URL to your booking system's `.env.local`:

```bash
WIDGET_CDN_URL=https://YOUR_USERNAME.github.io/booking-widget-cdn
```

### 6. Test the Widget

1. Go to your booking system dashboard: `/dashboard/widget`
2. Generate an API key if you haven't already
3. Copy the embed code
4. The embed code will now use the GitHub Pages CDN URL
5. Test on the demo page: `/widget-demo?organisationId=YOUR_ORG_ID`

## Troubleshooting

### Widget not loading?

1. Check GitHub Pages deployment status in repository "Actions" tab
2. Verify CORS is working: `curl -I https://YOUR_USERNAME.github.io/booking-widget-cdn/latest/booking-widget.js`
3. Check browser console for errors
4. Verify the API key is valid

### 404 Error?

- Wait 2-3 minutes after enabling GitHub Pages
- Check that the repository is public
- Verify the path: `/latest/booking-widget.js` (not `/latest/`)

## Future Updates

To release a new version:

1. Build the widget: `cd packages/booking-ui && npm run build:widget`
2. Create new version directory: `mkdir ../booking-widget-cdn/v1.0.1`
3. Copy files: `cp apps/booking-service/public/widget/* ../booking-widget-cdn/v1.0.1/`
4. Update latest: `cp -r ../booking-widget-cdn/v1.0.1/* ../booking-widget-cdn/latest/`
5. Commit and push: `git add . && git commit -m "Release v1.0.1" && git push`

## Repository Structure

```
booking-widget-cdn/
├── README.md           # Repository description
├── DEPLOYMENT.md       # This file
├── v1.0.0/            # Version 1.0.0
│   └── booking-widget.js
└── latest/            # Latest stable version (copy of v1.0.0)
    └── booking-widget.js
```

## Next: Complete Steps 1-6 Above

The repository is ready. Complete steps 1-6 to deploy to GitHub Pages.
