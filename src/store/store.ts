import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../reducers/auth.slice';

export const store = configureStore({
  reducer: {
    authorization: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
