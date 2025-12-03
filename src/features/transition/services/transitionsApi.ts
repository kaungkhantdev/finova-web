import { baseApi } from "@/services/api/baseApi"
import type { ApiResponse, ApiResponseNotPaginate } from "@/types"
import type { ApiPaginationQueryParams } from "@/types/apiPagination.types"
import { API_ENDPOINTS } from "@/utils/constants"
import type { AmountPercentageResponse, GetByDaysResponse, MonthlyComparisonResponse, Transaction, TransactionRequest } from "../types/transaction.type"

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
    getAllTransaction: builder.query<ApiResponse<Transaction>, ApiPaginationQueryParams & { recent?: boolean }>({
      query: (queryParams) => {
        const { page, size, s, recent } = queryParams;
    
        const url = recent 
          ? `${API_ENDPOINTS.TRANSACTION.ENDPOINT}?page=${page}&size=${size}`
          : `${API_ENDPOINTS.TRANSACTION.ENDPOINT}?page=${page}&size=${size}&s=${s}`;
    
        return {
          url,
          method: 'GET',
        };
      },
      providesTags: ['Transaction'],
    }),
    getAmountPercentage: builder.query<ApiResponseNotPaginate<AmountPercentageResponse>, { transactionTypeId: string }>({
      query: ({ transactionTypeId }) => ({
        url: `${API_ENDPOINTS.TRANSACTION.ENDPOINT}${API_ENDPOINTS.TRANSACTION.AMOUNT_PERCENTAGE}?transaction_type_id=${transactionTypeId}`,
        method: 'GET',
      }),
    }),
    getMonthlyComparison: builder.query<ApiResponseNotPaginate<MonthlyComparisonResponse>, void>({
      query: () => ({
        url: `${API_ENDPOINTS.TRANSACTION.ENDPOINT}${API_ENDPOINTS.TRANSACTION.MONTHLY_COMPARISON}`,
        method: 'GET',
      }),
    }),
    getByDays: builder.query<ApiResponseNotPaginate<GetByDaysResponse[]>, {days: string}>({
      query: ({days}) => ({
        url: `${API_ENDPOINTS.TRANSACTION.ENDPOINT}${API_ENDPOINTS.TRANSACTION.GET_BY_DAYS}?days=${days}`,
        method: 'GET',
      }),
    }),
    deleteTransaction: builder.mutation<ApiResponseNotPaginate<Transaction>, { id: number }>({
      query: ({ id }) => ({
        url: `${API_ENDPOINTS.TRANSACTION.ENDPOINT}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Transaction'],
    }),
  })
})

export const {
  useDeleteTransactionMutation,
  useGetByDaysQuery,
  useGetMonthlyComparisonQuery,
  useGetAmountPercentageQuery,
  useGetAllTransactionQuery,
  useCreateMutation: useCreateTransactionMutation,
} = transitionsApi
