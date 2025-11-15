import { baseApi } from "@/services/api/baseApi";
import type { ApiResponseNotPaginate } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";

export interface Category {
    id: string | number;
    name: string;
    description: string;
}

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategoriesNoPagination: builder.query<ApiResponseNotPaginate<Category[]>, void>({
            query: () => ({
                url: API_ENDPOINTS.CATEGORY.ENDPOINT + API_ENDPOINTS.CATEGORY.GET_ALL_NO_PAGINATION,
                method: 'GET'
            }),
        }),
    })
})

export const {
    useGetAllCategoriesNoPaginationQuery
} = categoryApi