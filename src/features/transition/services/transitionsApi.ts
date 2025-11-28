import { baseApi } from "@/services/api/baseApi"
import type { ApiResponse, ApiResponseNotPaginate } from "@/types"
import type { ApiPaginationQueryParams } from "@/types/apiPagination.types"
import { API_ENDPOINTS } from "@/utils/constants"
import type { Transaction, TransactionRequest } from "../types/transaction.type"

export const transitionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation<ApiResponseNotPaginate<Transaction>, TransactionRequest>({
      query: (payload) => ({
        url: API_ENDPOINTS.TRANSACTION.ENDPOINT,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Transaction'],
    }),
    getAll: builder.query<ApiResponse<Transaction>, ApiPaginationQueryParams>({
      query: (queryParams) => ({
        url: `${API_ENDPOINTS.TRANSACTION.ENDPOINT}?page=${queryParams.page}&size=${queryParams.size}`,
        method: 'GET',
      }),
      providesTags: ['Transaction'],
    }),
  })
})

export const {
  useGetAllQuery: useGetAllTransactionsQuery,
  useCreateMutation: useCreateTransactionMutation,
} = transitionsApi
