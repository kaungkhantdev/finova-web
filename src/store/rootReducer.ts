import { baseApi } from '@/services/api/baseApi';
import { combineReducers } from '@reduxjs/toolkit';

// Import feature reducers
// import { userReducer } from '../features/user/store';

/**
 * Root reducer combining all feature reducers
 */
export const rootReducer = combineReducers({
  // RTK Query API slice
  [baseApi.reducerPath]: baseApi.reducer,
// Global slices
//   ui: uiSlice.reducer,
//   app: appSlice.reducer,
  
  // Feature slices
  // user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;