import { baseApi } from "@/services/api/baseApi";
import { API_ENDPOINTS } from "@/utils/constants";
import type { User } from "../type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<User, string | number>({
      query: () => API_ENDPOINTS.USERS.PROFILE,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),
  }),
})

export const { useProfileQuery } = userApi
