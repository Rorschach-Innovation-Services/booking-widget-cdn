/**
 * TypeScript definitions for Booking Widget
 */

export interface BookingWidgetConfig {
  /** Organization ID from your booking system */
  organisationId: string;

  /** Developer API key for authentication */
  developerApiKey: string;

  /** Base URL of your booking API */
  apiBaseUrl: string;

  /** Container element ID where the widget will be rendered */
  containerId: string;

  /** Optional resource ID to pre-select */
  resourceId?: string;

  /** Optional authentication token */
  authToken?: string;

  /** Optional theme customization */
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    fontFamily?: string;
  };

  /** Show product claims section */
  showProducts?: boolean;

  /** Show pricing information */
  showPricing?: boolean;

  /** Maximum days in advance for booking */
  maxAdvanceDays?: number;

  /** Minimum days in advance for booking */
  minAdvanceDays?: number;

  /** Callback when booking is completed */
  onBookingComplete?: (booking: any) => void;

  /** Callback when booking encounters an error */
  onBookingError?: (error: Error) => void;

  /** Callback when product is claimed */
  onProductClaim?: (claim: any) => void;

  /** Callback when resource is selected */
  onResourceSelect?: (resource: any) => void;
}

export interface BookingWidget {
  /**
   * Initialize the booking widget
   * @param config - Widget configuration options
   */
  init(config: BookingWidgetConfig): void;

  /** Widget version */
  version: string;
}

declare const bookingWidget: BookingWidget;

export default bookingWidget;
