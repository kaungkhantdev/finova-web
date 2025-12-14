export const ERROR_MESSAGES = {
  // General errors
  NETWORK_ERROR: 'Network error occurred. Please check your connection.',
  UNKNOWN_ERROR: 'An unknown error occurred. Please try again.',
  TIMEOUT_ERROR: 'Request timed out. Please try again.',
  
  // Authentication errors
  INVALID_CREDENTIALS: 'Invalid email or password.',
  TOKEN_EXPIRED: 'Your session has expired. Please log in again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  ACCOUNT_LOCKED: 'Your account has been locked. Please contact support.',
  
  // Validation errors
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters long.',
  PASSWORD_MISMATCH: 'Passwords do not match.',
  INVALID_PHONE: 'Please enter a valid phone number.',
  
  // File upload errors
  FILE_TOO_LARGE: 'File size exceeds the maximum limit.',
  INVALID_FILE_TYPE: 'File type is not supported.',
  UPLOAD_FAILED: 'File upload failed. Please try again.',
  
  // Booking errors
  BOOKING_NOT_FOUND: 'Booking not found.',
  BOOKING_CONFLICT: 'This time slot is already booked.',
  PAST_DATE: 'Cannot book for past dates.',
  
  // User errors
  USER_NOT_FOUND: 'User not found.',
  EMAIL_ALREADY_EXISTS: 'An account with this email already exists.',
  
  // Server errors
  SERVER_ERROR: 'Server error occurred. Please try again later.',
  MAINTENANCE_MODE: 'The application is currently under maintenance.',
} as const;

export const SUCCESS_MESSAGES = {
  LOGGED_IN: 'Successfully logged in!',
  LOGGED_OUT: 'Successfully logged out!',
  REGISTERED: 'Account created successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
  BOOKING_CREATED: 'Booking created successfully!',
  BOOKING_UPDATED: 'Booking updated successfully!',
  BOOKING_CANCELLED: 'Booking cancelled successfully!',
  FILE_UPLOADED: 'File uploaded successfully!',
  SETTINGS_SAVED: 'Settings saved successfully!',
} as const;