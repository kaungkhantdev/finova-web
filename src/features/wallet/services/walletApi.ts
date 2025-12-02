import { baseApi } from "@/services/api/baseApi";
import type { ApiResponse, ApiQueryParams, ApiResponseNotPaginate } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";
import type { BalanceAndExchangeRate, Wallet, WalletRequest, WalletWithIncomeExpense } from "../types/wallet.type";

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllWalletsNoPagination: builder.query<ApiResponseNotPaginate<Wallet[]>, void>({
            query: () => ({
                url: API_ENDPOINTS.WALLET.ENDPOINT + API_ENDPOINTS.WALLET.GET_ALL_NO_PAGINATION,
                method: 'GET'
            }),
            providesTags: ['Accounts']
        }),
        getAllWallet: builder.query<ApiResponse<WalletWithIncomeExpense>, ApiQueryParams>({
            query: ({ page, size }) => ({
                url: `${API_ENDPOINTS.WALLET.ENDPOINT}?page=${page}&size=${size}`,
                method: 'GET'
            }),
            providesTags: ['Accounts']
        }),
        getBalanceAndExchangeRate: builder.query<ApiResponseNotPaginate<BalanceAndExchangeRate>, void>({
            query: () => ({
                url: API_ENDPOINTS.WALLET.ENDPOINT + API_ENDPOINTS.WALLET.BALANCE_EXCHANGE_RATE,
                method: 'GET'
            })
        }),
        createWallet: builder.mutation<ApiResponseNotPaginate<Wallet>, WalletRequest>({
            query: (payload) => ({
                url: API_ENDPOINTS.WALLET.ENDPOINT,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['Accounts'],
        }),
        updateWallet: builder.mutation<ApiResponseNotPaginate<Wallet>, WalletRequest & { accountId: number }>({
            query: (payload) => ({
                url: `${API_ENDPOINTS.WALLET.ENDPOINT}/${payload.accountId}`,
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['Accounts'],
        })
    })
})

export const {
    useUpdateWalletMutation,
    useCreateWalletMutation,
    useGetAllWalletQuery,
    useGetBalanceAndExchangeRateQuery,
    useGetAllWalletsNoPaginationQuery,
} = walletApi