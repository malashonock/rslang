import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../model/User';

const initialState: User = {
  name: localStorage.getItem('userName') ?? '',
  email: localStorage.getItem('userEmail') ?? '',
  password: localStorage.getItem('userPassword') ?? '',
};

const registerSlice = createSlice({
  name: 'Register',
  initialState,
  reducers: {
    userRegisterSuccess(state: User, action: PayloadAction<string>) {
      alert('fdfff');
      localStorage.setItem('RegisterSuccess', JSON.stringify(state));
    },
    userRegisterFail(state, action: PayloadAction<string>) {
      localStorage.setItem('RegisterSuccess', `R_FAIL`);
    },
  },
});

export const { userRegisterSuccess, userRegisterFail } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;

export default registerSlice;
