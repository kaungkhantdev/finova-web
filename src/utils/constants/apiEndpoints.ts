export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_OTP: '/auth/verify-otp',
  },

  USERS: {
    PROFILE: '/users/profile',
  },

  CATEGORY: {
    ENDPOINT: '/categories',
    GET_ALL_NO_PAGINATION: '/all'
  },

  TRANSACTION: {
    ENDPOINT: '/transactions',
    GET_ALL_NO_PAGINATION: '/all',
    AMOUNT_PERCENTAGE: '/amount-percentage',
    MONTHLY_COMPARISON: '/monthly-comparison',
    GET_BY_DAYS: '/get-by-days'
  },

  WALLET: {
    ENDPOINT: '/accounts',
    GET_ALL_NO_PAGINATION: '/all',
    BALANCE_EXCHANGE_RATE: '/get-balance'
  },

  CURRENCY: {
    ENDPOINT: '/public/currencies',
    GET_ALL_NO_PAGINATION: '/all'
  }
} as const;