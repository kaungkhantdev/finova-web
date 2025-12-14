import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { baseApi } from '@/services/api/baseApi';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getDefaultMiddleware().concat(baseApi.middleware) as any,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;