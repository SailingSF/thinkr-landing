declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters?: Record<string, unknown>) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export {}; 