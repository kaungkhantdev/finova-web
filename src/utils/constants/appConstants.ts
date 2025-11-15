export const APP_NAME = 'MyApp';
export const APP_VERSION = import.meta.env.VITE_REACT_APP_VERSION || '1.0.0';

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
  LANGUAGE: 'language',
  SIDEBAR_STATE: 'sidebarState',
} as const;

export const ROUTES = {
  HOME: '/',
  WALLET: '/wallet',
  ANALYSIS: '/analysis',
  TRANSACTION: '/transaction',
  CATEGORY: '/category',
  HELP: '/help',
  REPORT: '/report',
  SETTING: '/setting',
  NOT_FOUND: '/404',
  REGISTER: 'register',
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
  VERIFY_OTP: 'verify-otp',
  AUTH: '/auth',
} as const;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  DE: 'de',
} as const;

export const MODAL_IDS = {
  CONFIRM_DELETE: 'confirmDelete',
  USER_PROFILE: 'userProfile',
  BOOKING_FORM: 'bookingForm',
  FILE_UPLOAD: 'fileUpload',
} as const;

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  INPUT: 'yyyy-MM-dd',
  DATETIME: 'MMM dd, yyyy HH:mm',
  TIME: 'HH:mm',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 2,
  PAGE_SIZE_OPTIONS: [2, 10, 25, 50, 100],
  MAX_PAGE_SIZE: 100,
} as const;

export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: {
    IMAGES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    ALL: ['image/*', 'application/pdf', '.doc', '.docx'],
  },
} as const;