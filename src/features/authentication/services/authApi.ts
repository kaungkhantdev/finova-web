import { baseApi } from "@/services/api/baseApi";

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
        url: 'login', // your auth endpoint
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
