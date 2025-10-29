# GitHub Pages Deployment Checklist

Use this checklist to complete the widget deployment.

## Pre-Deployment ✅

- [x] Widget built successfully
- [x] Git repository initialized
- [x] Files committed locally
- [x] Widget dashboard updated to use CDN URL

## Your Tasks

### [ ] 1. Create GitHub Repository

- [ ] Go to https://github.com/new
- [ ] Name: `booking-widget-cdn`
- [ ] Visibility: **Public**
- [ ] Do NOT check "Add a README"
- [ ] Click "Create repository"

### [ ] 2. Push to GitHub

Copy your GitHub username, then run:

```bash
cd C:/Users/DELL/Documents/Rorschach/booking-widget-cdn
git remote add origin https://github.com/YOUR_USERNAME/booking-widget-cdn.git
git branch -M main
git push -u origin main
```

### [ ] 3. Enable GitHub Pages

- [ ] Go to: Settings → Pages (in your repository)
- [ ] Source: Branch = **main**, Folder = **/ (root)**
- [ ] Click **Save**
- [ ] Wait 2 minutes for deployment

### [ ] 4. Test CDN URL

```bash
curl -I https://YOUR_USERNAME.github.io/booking-widget-cdn/latest/booking-widget.js
```

Should return `200 OK`.

### [ ] 5. Update Environment Variable

Add to `booking-system/.env.local`:

```bash
NEXT_PUBLIC_WIDGET_CDN_URL=https://YOUR_USERNAME.github.io/booking-widget-cdn
```

### [ ] 6. Restart & Test

- [ ] Restart dev server
- [ ] Go to `/dashboard/widget`
- [ ] Generate API key
- [ ] Verify embed code uses GitHub Pages URL

## Verification

Your embed code should look like this:

```html
<script>
  var script = document.createElement('script');
  script.src = 'https://YOUR_USERNAME.github.io/booking-widget-cdn/latest/booking-widget.js';
  ...
</script>
```

✅ If you see your GitHub Pages URL, deployment is successful!

## Estimated Time

- Step 1-3: ~5 minutes
- Step 4-6: ~3 minutes
- **Total: ~8 minutes**

## Help

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
