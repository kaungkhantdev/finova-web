import { baseApi } from "@/services/api/baseApi";
import { API_ENDPOINTS } from "@/utils/constants";

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  token: string
  user: { id: number; name: string }
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: API_ENDPOINTS.AUTH.LOGIN, // your auth endpoint
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
