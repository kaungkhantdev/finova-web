/* eslint-disable @typescript-eslint/no-explicit-any */
import { type EndpointBuilder } from '@reduxjs/toolkit/query'
import { baseApi } from './baseApi'

interface CrudApiOptions<T> {
  tag: string
  endpoint: string
  customEndpoints?: (builder: EndpointBuilder<any, any, any>) => Record<string, any>
  dummy?: T
}

export const createCrudApi = <T>({
  tag,
  endpoint,
  customEndpoints,
}: CrudApiOptions<T>) => {
  const api = baseApi.injectEndpoints({
    endpoints: (builder: EndpointBuilder<any, any, any>) => ({
  
      getAll: builder.query<T[], void>({
        query: () => `${endpoint}`,
        providesTags: [tag],
      }),

      getOne: builder.query<T, string | number>({
        query: (id) => `${endpoint}/${id}`,
        providesTags: (_result, _error, id) => [{ type: tag, id }],
      }),
    
      create: builder.mutation<T, Partial<T>>({
        query: (body) => ({
          url: `${endpoint}`,
          method: 'POST',
          body,
        }),
        invalidatesTags: [tag],
      }),
    
      update: builder.mutation<T, { id: string | number; data: Partial<T> }>({
        query: ({ id, data }) => ({
          url: `${endpoint}/${id}`,
          method: 'PUT',
          body: data,
        }),
        invalidatesTags: (_result, _error, { id }) => [{ type: tag, id }],
      }),
    
      delete: builder.mutation<void, string | number>({
        query: (id) => ({
          url: `${endpoint}/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [tag],
      }),

      // Add or override with custom endpoints
      ...customEndpoints?.(builder),
    }),
    overrideExisting: true,
  })

  return api
}
