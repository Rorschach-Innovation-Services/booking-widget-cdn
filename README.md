# Booking Widget CDN

This repository hosts the booking widget files distributed via GitHub Pages.

## Structure

- `v1.0.0/` - Widget version 1.0.0
- `latest/` - Symlink to the latest stable version

## Installation

### Option 1: NPM / Git Dependency (React Projects)

Install directly from GitHub:

```bash
npm install git+https://github.com/Rorschach-Innovation-Services/booking-widget-cdn.git
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "booking-widget-cdn": "git+https://github.com/Rorschach-Innovation-Services/booking-widget-cdn.git"
  }
}
```

### Option 2: CDN (HTML/Vanilla JS)

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

## Usage

### React Component

```jsx
import { useEffect } from 'react';
import BookingWidget from 'booking-widget-cdn';

function BookingPage() {
  useEffect(() => {
    const config = {
      organisationId: 'YOUR_ORG_ID',
      developerApiKey: 'YOUR_API_KEY',
      apiBaseUrl: 'https://your-booking-app.com',
      containerId: 'booking-widget-container',
      // Optional callbacks
      onBookingComplete: (booking) => {
        console.log('Booking completed:', booking);
      },
      onBookingError: (error) => {
        console.error('Booking error:', error);
      }
    };

    BookingWidget.init(config);
  }, []);

  return <div id="booking-widget-container"></div>;
}

export default BookingPage;
```

### React Hook (Reusable)

```jsx
import { useEffect } from 'react';

function useBookingWidget(config) {
  useEffect(() => {
    // Dynamically import the widget
    import('booking-widget-cdn').then((BookingWidget) => {
      BookingWidget.default.init(config);
    });

    // Cleanup on unmount
    return () => {
      const container = document.getElementById(config.containerId);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [config]);
}

// Usage in component
function MyBookingPage() {
  useBookingWidget({
    organisationId: 'YOUR_ORG_ID',
    developerApiKey: 'YOUR_API_KEY',
    apiBaseUrl: 'https://your-booking-app.com',
    containerId: 'booking-widget-container'
  });

  return <div id="booking-widget-container"></div>;
}
```

### Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `organisationId` | string | Yes | Your organization ID |
| `developerApiKey` | string | Yes | Your developer API key |
| `apiBaseUrl` | string | Yes | Base URL of your booking API |
| `containerId` | string | Yes | DOM element ID for the widget |
| `resourceId` | string | No | Pre-select a specific resource |
| `authToken` | string | No | Authentication token |
| `theme` | object | No | Custom theme settings |
| `showProducts` | boolean | No | Show product claims section |
| `showPricing` | boolean | No | Display pricing information |
| `maxAdvanceDays` | number | No | Maximum booking advance days |
| `minAdvanceDays` | number | No | Minimum booking advance days |
| `onBookingComplete` | function | No | Booking completion callback |
| `onBookingError` | function | No | Error handling callback |
| `onProductClaim` | function | No | Product claim callback |
| `onResourceSelect` | function | No | Resource selection callback |

## Versioning

- **v1.0.0** - Initial release (280KB, gzipped: 82KB)

## Deployment

This repository is automatically served via GitHub Pages. Any push to the main branch will update the CDN.
