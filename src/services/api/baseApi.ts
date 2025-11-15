import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'User',
    'Category', 
  ],
  endpoints: () => ({}),
  // Keep unused data for 60 seconds
  keepUnusedDataFor: 60,
  // Refetch on reconnect
  refetchOnReconnect: true,
});