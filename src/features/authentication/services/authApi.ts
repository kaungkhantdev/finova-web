import { baseApi } from "@/services/api/baseApi";
import type { ApiResponseMessage, ApiResponseNotPaginate } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";

interface LoginRequest {
  email: string
  password: string
}

interface ForgotPasswordRequest {
  email: string
}

interface VerifyOtpRequest {
  email: string
  otp: string
}

interface ResetPasswordRequest {
  reset_token: string
  new_password: string
}

interface RegisterRequest {
  email: string
  password: string
  name: string
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ApiResponseMessage, RegisterRequest>({
      query: (credentials) => ({
        url: API_ENDPOINTS.AUTH.REGISTER,
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<ApiResponseMessage, LoginRequest>({
      query: (credentials) => ({
        url: API_ENDPOINTS.AUTH.LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation<ApiResponseMessage, ForgotPasswordRequest>({
      query: (credentials) => ({
        url: API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyOtp: builder.mutation<ApiResponseNotPaginate<{reset_token: string}>, VerifyOtpRequest>({
      query: (credentials) => ({
        url: API_ENDPOINTS.AUTH.VERIFY_OTP,
        method: 'POST',
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation<ApiResponseMessage, ResetPasswordRequest>({
      query: (credentials) => ({
        url: API_ENDPOINTS.AUTH.RESET_PASSWORD,
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<ApiResponseMessage, void>({
      query: () => ({
        url: API_ENDPOINTS.AUTH.LOGOUT,
        method: 'POST',
      }),
    }),
  }),
})

export const { 
  useRegisterMutation, 
  useLoginMutation, 
  useLogoutMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = authApi
