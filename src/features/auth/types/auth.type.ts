
export type LoginRequest = {
  email: string
  password: string
}

export type ForgotPasswordRequest = {
  email: string
}

export type VerifyOtpRequest = {
  email: string
  otp: string
}

export type ResetPasswordRequest = {
  reset_token: string
  new_password: string
}

export type RegisterRequest = {
  email: string
  password: string
  name: string,
  currency_id: number,
}