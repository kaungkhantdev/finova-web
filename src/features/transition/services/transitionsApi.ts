import { baseApi } from "@/services/api/baseApi"
import type { ApiResponseNotPaginate } from "@/types"
import { API_ENDPOINTS } from "@/utils/constants"

export interface Transaction {
  amount: string,
  name: string,
  description?: string | undefined,
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
      })
    })
  })
})

export const {
  useCreateMutation: useCreateTransactionMutation,
} = transitionsApi
