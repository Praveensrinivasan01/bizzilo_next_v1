import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './slices/localeSlice';

export const store = configureStore({
  reducer: {
    locale: localeReducer,
  },
});
