import { createCrudApi } from "@/services/api/createCrudApi"

export interface Transaction {
    transaction_type_id: string | number,
    amount: string,
    account_id: string | number,
    category_id: string | number,
    name: string,
    description?: string | undefined,
}

export const transitionsApi = createCrudApi<Transaction>({
  tag: 'Transactions',
  endpoint: 'transactions',

  // ✅ Custom logic (pagination, search, expand, etc.)
  customEndpoints: (builder) => ({
    getAll: builder.query<Transaction[], { limit?: number; userId?: number }>({
      query: (params) => {
        const search = new URLSearchParams()
        if (params?.limit) search.append('_limit', params.limit.toString())
        if (params?.userId) search.append('userId', params.userId.toString())

        return `transactions?${search.toString()}`
      },
      providesTags: ['Transactions'],
    }),

    getOne: builder.query<Transaction & { comments: unknown[] }, number>({
      // Example of fetching with related comments
      async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
        const postResult = await fetchWithBQ(`posts/${id}`)
        if (postResult.error) return { error: postResult.error }

        const commentsResult = await fetchWithBQ(`posts/${id}/comments`)
        if (commentsResult.error) return { error: commentsResult.error }

        return {
          data: {
            ...postResult.data,
            comments: commentsResult.data,
          },
        }
      },
      providesTags: (result, error, id) => [{ type: 'Transaction', id }],
    }),
  }),
})

export const {
  useGetAllQuery: useGetPostsQuery,
  useGetOneQuery: useGetPostQuery,
  useCreateMutation: useCreatePostMutation,
  useUpdateMutation: useUpdatePostMutation,
  useDeleteMutation: useDeletePostMutation,
} = transitionsApi
