import { baseApi } from "@/services/api/baseApi"
import type { ApiResponse, ApiResponseNotPaginate } from "@/types"
import type { ApiPaginationQueryParams } from "@/types/apiPagination.types"
import { API_ENDPOINTS } from "@/utils/constants"

export interface Transaction {
  id: number | string,
  name: string,
  description: string,
  amount: string,
  user_id: number | string,
  category_id: number | string,
  category_name:string,
  account_id: number | string,
  account_name: string,
  transaction_type_id: number | string,
  transaction_type_name: string,
  created_at: string,
  updated_at: string
}
export interface TransactionRequest {
    transaction_type_id: string | number,
    amount: string,
    account_id: string | number,
    category_id: string | number,
    name: string,
    description?: string | undefined,
}

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
