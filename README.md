# Booking Widget CDN

This repository hosts the booking widget files distributed via GitHub Pages.

## Structure

- `v1.0.0/` - Widget version 1.0.0
- `latest/` - Symlink to the latest stable version

## Usage

Include the widget in your website:

```html
<div id="booking-widget-container"></div>
<script>
  (function() {
    var config = {
      organisationId: 'YOUR_ORG_ID',
      developerApiKey: 'YOUR_API_KEY',
      apiBaseUrl: 'https://your-booking-app.com',
      containerId: 'booking-widget-container'
    };

    var script = document.createElement('script');
    script.src = 'https://YOUR_USERNAME.github.io/booking-widget-cdn/latest/booking-widget.js';
    script.onload = function() {
      if (window.BookingWidget) {
        window.BookingWidget.init(config);
      }
    };
    document.head.appendChild(script);
  })();
</script>
```

## Versioning

- **v1.0.0** - Initial release (280KB, gzipped: 82KB)

## Deployment

This repository is automatically served via GitHub Pages. Any push to the main branch will update the CDN.
