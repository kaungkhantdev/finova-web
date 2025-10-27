import { baseApi } from "@/services/api/baseApi";
import { API_ENDPOINTS } from "@/utils/constants";
import type { User } from "../type";
import type { ApiResponseNotPaginate } from "@/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<ApiResponseNotPaginate<User>, void>({
      query: () => API_ENDPOINTS.USERS.PROFILE,
      providesTags: () => [{ type: 'User', id: 'PROFILE' }],
    }),
  }),
})

export const { useProfileQuery, useLazyProfileQuery } = userApi
