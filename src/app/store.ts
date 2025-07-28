// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    // On connecte le reducer de notre apiSlice.
    // La clé doit correspondre au reducerPath de createApi.
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Le middleware est essentiel, il gère le cache, l'invalidation, le polling, etc.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// Types pour l'utilisation avec TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
