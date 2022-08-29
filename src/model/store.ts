import { store } from '../store';

export interface AuthorizationState {
  id: string;
  name: string;
  email: string;
  message: string;
  token: string;
  refreshToken: string;
  authorizeStatus: boolean;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
