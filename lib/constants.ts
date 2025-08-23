// Application constants - Centralized configuration values

// Z-index constants
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  TOAST: 1080,
  SCROLL_TO_TOP: 1090,
} as const;

// Social media links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://www.facebook.com/upskwela',
  TWITTER: 'https://x.com/upskwela',
  TIKTOK: 'https://www.tiktok.com/@upskwela',
  INSTAGRAM: 'https://www.instagram.com/upskwela',
  YOUTUBE: 'https://www.youtube.com/@upskwela',
} as const;

// Scroll constants
export const SCROLL = {
  TOP_THRESHOLD: 400,
  SMOOTH_BEHAVIOR: 'smooth' as ScrollBehavior,
} as const;
