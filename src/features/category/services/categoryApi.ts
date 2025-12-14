import { baseApi } from "@/services/api/baseApi";
import type { ApiResponse, ApiResponseNotPaginate, ApiPaginationQueryParams} from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";
import type { Category, CategoryRequest } from "../types/category.type";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategoriesNoPagination: builder.query<ApiResponseNotPaginate<Category[]>, void>({
            query: () => ({
                url: API_ENDPOINTS.CATEGORY.ENDPOINT + API_ENDPOINTS.CATEGORY.GET_ALL_NO_PAGINATION,
                method: 'GET'
            }),
            providesTags: ['Category'],
        }),
        getAllCategory  : builder.query<ApiResponse<Category>, ApiPaginationQueryParams>({
            query: (params) => ({
                url: `${API_ENDPOINTS.CATEGORY.ENDPOINT}?page=${params.page}&size=${params.size}&s=${params.s}`,
                method: 'GET',
            }),
            providesTags: ['Category'],
        }),
        createCategory: builder.mutation<ApiResponseNotPaginate<Category>, CategoryRequest>({
            query: (body) => ({
                url: API_ENDPOINTS.CATEGORY.ENDPOINT,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Category'],
        }),
        updateCategory: builder.mutation<ApiResponseNotPaginate<Category>, {id: string, body: CategoryRequest}>({
            query: ({id, body}) => ({
                url: `${API_ENDPOINTS.CATEGORY.ENDPOINT}/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Category'],
        })
    })
})

export const {
    useUpdateCategoryMutation,
    useGetAllCategoryQuery,
    useCreateCategoryMutation,
    useGetAllCategoriesNoPaginationQuery
} = categoryApi