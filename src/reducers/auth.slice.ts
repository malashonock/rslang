import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationState } from '../model/store';
import { clearLocalStorage, saveToLocalStorage } from '../utils/localStorage';
/* eslint-disable no-param-reassign */
export type updatedUserInfo = {
  name: string;
  email: string;
};

const initialAuthorizationState: AuthorizationState = {
  id: '',
  name: '',
  email: '',
  token: '',
  message: '',
  refreshToken: '',
  authorizeStatus: false,
};

const userSlice = createSlice({
  name: 'authorization',
  initialState: initialAuthorizationState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<AuthorizationState>) => {
      state.authorizeStatus = payload.authorizeStatus;
      state.id = payload.id;
      state.name = payload.name;
      state.email = payload.email;
      saveToLocalStorage(payload);
    },
    setAuthorizeUser: (state, { payload }: PayloadAction<AuthorizationState>) => {
      state.id = payload.id;
      state.name = payload.name;
      state.message = payload.message;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.authorizeStatus = true;
      saveToLocalStorage(payload);
    },
    deleteUserData: (state, { payload }: PayloadAction<AuthorizationState>) => {
      state.authorizeStatus = false;
      state.id = payload.id;
      state.name = '';
      state.email = '';
      state.token = '';
      state.message = '';
      state.refreshToken = '';
      clearLocalStorage();
    },
    updateUserData: (state, { payload }: PayloadAction<updatedUserInfo>) => {
      state.name = payload.name;
      state.email = payload.email;
    },
  },
});

export default userSlice;
export const { setUserData, deleteUserData, updateUserData, setAuthorizeUser } = userSlice.actions;
