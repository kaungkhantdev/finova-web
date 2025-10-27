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
        url: API_ENDPOINTS.AUTH.LOGIN, // your auth endpoint
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
