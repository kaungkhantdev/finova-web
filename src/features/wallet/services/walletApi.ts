import { baseApi } from "@/services/api/baseApi";
import type { ApiResponseNotPaginate } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";
import type { BalanceAndExchangeRate, Wallet } from "../types/wallet.type";

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllWalletsNoPagination: builder.query<ApiResponseNotPaginate<Wallet[]>, void>({
            query: () => ({
                url: API_ENDPOINTS.WALLET.ENDPOINT + API_ENDPOINTS.WALLET.GET_ALL_NO_PAGINATION,
                method: 'GET'
            }),
            providesTags: ['Accounts']
        }),
        getBalanceAndExchangeRate: builder.query<ApiResponseNotPaginate<BalanceAndExchangeRate>, void>({
            query: () => ({
                url: API_ENDPOINTS.WALLET.ENDPOINT + API_ENDPOINTS.WALLET.BALANCE_EXCHANGE_RATE,
                method: 'GET'
            })
        })
    })
})

export const {
    useGetBalanceAndExchangeRateQuery,
    useGetAllWalletsNoPaginationQuery: useGetAllWalletNoPaginationQuery
} = walletApi