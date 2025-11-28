import { baseApi } from "@/services/api/baseApi";
import type { ApiResponseNotPaginate } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";
import type { Category } from "../types/category.type";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategoriesNoPagination: builder.query<ApiResponseNotPaginate<Category[]>, void>({
            query: () => ({
                url: API_ENDPOINTS.CATEGORY.ENDPOINT + API_ENDPOINTS.CATEGORY.GET_ALL_NO_PAGINATION,
                method: 'GET'
            }),
            providesTags: ['Category'],
        }),
    })
})

export const {
    useGetAllCategoriesNoPaginationQuery
} = categoryApi