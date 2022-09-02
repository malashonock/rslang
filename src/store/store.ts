import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import isCurrentPageLearned from '../features/dictionary/dictionarySlice';

export const store = configureStore({
  reducer: {
    authorization: authSlice.reducer,
    dictionary: isCurrentPageLearned,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
