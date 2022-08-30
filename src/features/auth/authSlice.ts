import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../model/AuthState';
import { clearLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
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
  name: 'authorization',
  initialState: initialAuth,
  reducers: {
    createUserData: (state, { payload }: PayloadAction<AuthState>) => {
      // state.authorizeStatus = payload.authorizeStatus;
      // state.id = payload.id;
      // state.name = payload.name;
      // state.email = payload.email;
      saveToLocalStorage(payload, 'Auth');
      return payload;
    },
    setAuthorizeUser: (state, { payload }: PayloadAction<AuthState>) => {
      state.id = payload.id;
      state.name = payload.name;
      state.message = payload.message;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.authorizeStatus = true;
      saveToLocalStorage(payload, 'Auth');
    },
    deleteUser: (state, { payload }: PayloadAction<AuthState>) => {
      state.authorizeStatus = false;
      state.id = payload.id;
      state.name = '';
      state.email = '';
      state.token = '';
      state.message = '';
      state.refreshToken = '';
      clearLocalStorage('Auth');
    },
    updateUserData: (state, { payload }: PayloadAction<UpdatedUserInfo>) => {
      state.name = payload.name;
      state.email = payload.email;
    },
  },
});

export default authSlice;
export const { createUserData, deleteUser, updateUserData, setAuthorizeUser } = authSlice.actions;
