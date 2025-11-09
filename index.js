/**
 * Booking Widget - NPM Entry Point
 *
 * This module loads the pre-built widget bundle and exports it
 * for use in Node.js/React projects.
 */

// Load the widget bundle
if (typeof window !== 'undefined') {
  // Browser environment - load the widget script
  require('./latest/booking-widget.js');

  // Export the global BookingWidget
  module.exports = window.BookingWidget;
} else {
  // Server-side rendering environment
  // Export a placeholder that will work during SSR
  module.exports = {
    init: () => {
      console.warn('BookingWidget: Cannot initialize during server-side rendering. This will work once mounted in the browser.');
    },
    version: '1.0.0'
  };
}

// Also export as default for ES module compatibility
module.exports.default = module.exports;
