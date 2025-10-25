import { createCrudApi } from "@/services/api/createCrudApi"
import type { User } from "../type";

export const postsApi = createCrudApi<User>({
  tag: 'Users',
  endpoint: 'users',
})

export const {
  useGetOneQuery: useGetUserQuery,
} = postsApi
