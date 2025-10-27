import { baseApi } from "@/services/api/baseApi";
import type { ApiResponseMessage } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";

interface LoginRequest {
  email: string
  password: string
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponseMessage, LoginRequest>({
      query: (credentials) => ({
        url: API_ENDPOINTS.AUTH.LOGIN,
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

export const { useLoginMutation, useLogoutMutation } = authApi
