import { baseApi } from "@/services/api/baseApi";
import type { ApiResponseNotPaginate } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";
import type { Currency } from "../types/currency.type";

export const currencyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCurrencyNoPagination: builder.query<ApiResponseNotPaginate<Currency[]>, void>({
            query: () => ({
                url: API_ENDPOINTS.CURRENCY.ENDPOINT + API_ENDPOINTS.CURRENCY.GET_ALL_NO_PAGINATION,
                method: 'GET'
            }),
            providesTags: ['Currency'],
        }),
    })
})

export const {
    useGetAllCurrencyNoPaginationQuery
} = currencyApi