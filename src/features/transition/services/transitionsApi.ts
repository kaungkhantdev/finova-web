import { createCrudApi } from "@/services/api/createCrudApi"

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export const transitionsApi = createCrudApi<Post>({
  tag: 'Posts',
  endpoint: 'posts',

  // ✅ Custom logic (pagination, search, expand, etc.)
  customEndpoints: (builder) => ({
    getAll: builder.query<Post[], { limit?: number; userId?: number }>({
      query: (params) => {
        const search = new URLSearchParams()
        if (params?.limit) search.append('_limit', params.limit.toString())
        if (params?.userId) search.append('userId', params.userId.toString())

        return `posts?${search.toString()}`
      },
      providesTags: ['Posts'],
    }),

    getOne: builder.query<Post & { comments: unknown[] }, number>({
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
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
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
