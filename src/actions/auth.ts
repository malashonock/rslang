import { createAction } from '@reduxjs/toolkit';
// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT,
//   SET_MESSAGE,
// } from './types';
// import { createUser, userLogout } from '../api/users';
// const register =
//   (name: string, email: string, password: string) =>
//   (dispatch: (arg0: { type: string; payload?: string }) => void) => {
//     return createUser({ name, email, password }).then(
//       (response) => {
//         dispatch({
//           type: REGISTER_SUCCESS,
//         });
//         dispatch({
//           type: SET_MESSAGE,
//           payload: response.name,
//         });
//         return Promise.resolve();
//       },
//       (error) => {
//         const message = 'error';
//         dispatch({
//           type: REGISTER_FAIL,
//         });
//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });
//         return Promise.reject();
//       }
//     );
//   };
// export const logout = () => (dispatch: (arg0: { type: string; payload?: string }) => void) => {
//   dispatch({
//     type: LOGOUT,
//   });
// };
// export default register;

export const regSuccess = createAction('R_OK');
export const regFail = createAction('R_NOT');
export const LogInSuccess = createAction('LOGIN_OK');
