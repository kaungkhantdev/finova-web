import { fetchBaseQuery, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { API_CONFIG } from '@/config/api.config';
// import type { RootState } from '../store';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: API_CONFIG.baseUrl,
  credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const state = getState() as RootState;
//     const token = state.auth?.token || localStorage.getItem('token');

//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//     headers.set('Content-Type', 'application/json');
//     return headers;
//   },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | { url: string; method?: string; body?: unknown },
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Wait if another refresh request is running
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  // Handle 401 - Refresh token logic
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      
      try {
        const refreshResult = await baseQuery(
          { url: '/auth/refresh', method: 'POST' },
          api,
          extraOptions
        );
        console.log('Refresh Result:', refreshResult);
        
        // if (refreshResult.data) {
        //   // Store new token
        //   api.dispatch(setToken(refreshResult.data.token));
        //   // Retry original request
        //   result = await baseQuery(args, api, extraOptions);
        // } else {
        //   // Refresh failed - logout
        //   api.dispatch(logout());
        // }
      } finally {
        release();
      }
    } else {
      // Wait for refresh to complete and retry
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
