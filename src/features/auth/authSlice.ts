import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../model/AuthState';
import { removeItemFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
/* eslint-disable no-param-reassign */
export type UpdatedUserInfo = {
  name: string;
  email: string;
};

const initialAuth: AuthState = {
  id: '',
  name: '',
  email: '',
  token: '',
  message: '',
  refreshToken: '',
  authorizeStatus: false,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  reducers: {
    createUserData: (state, { payload }: PayloadAction<AuthState>) => {
      saveToLocalStorage(payload, 'Auth');
      return payload;
    },
    setAuthorizeUser: (state, { payload }: PayloadAction<AuthState>) => {
      saveToLocalStorage(payload, 'Auth');
      return payload;
    },
    deleteUser: (state) => {
      removeItemFromLocalStorage('Auth');
      return initialAuth;
    },
    updateUserData: (state, { payload }: PayloadAction<UpdatedUserInfo>) => {
      state.name = payload.name;
      state.email = payload.email;
    },
  },
});

export default authSlice;
export const { createUserData, deleteUser, updateUserData, setAuthorizeUser } = authSlice.actions;
