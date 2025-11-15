import { baseApi } from "@/services/api/baseApi";
import type { ApiResponseNotPaginate } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";

export interface Wallet {
    id: string | number;
    name: string;
    description: string;
    amount: string;
    currency_code: string
}

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllWalletsNoPagination: builder.query<ApiResponseNotPaginate<Wallet[]>, void>({
            query: () => ({
                url: API_ENDPOINTS.WALLET.ENDPOINT + API_ENDPOINTS.WALLET.GET_ALL_NO_PAGINATION,
                method: 'GET'
            })
        })
    })
})

export const {
    useGetAllWalletsNoPaginationQuery: useGetAllWalletNoPaginationQuery
} = walletApi