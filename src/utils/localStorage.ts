import { AuthorizationState } from '../model/store';

export const saveToLocalStorage = (auth: AuthorizationState): void => {
  const { id, name, token, email, message, refreshToken, authorizeStatus } = auth;
  localStorage.setItem('UserID', id);
  localStorage.setItem('UserName', name);
  localStorage.setItem('UserEmail', email);
  localStorage.setItem('UserToken', token);
  localStorage.setItem('UserMessage', message);
  localStorage.setItem('UserRefreshToken', refreshToken);
  localStorage.setItem('UserAuthStatus', String(authorizeStatus));
};

export const getUserFromLocalStorage = (): AuthorizationState => {
  const id = localStorage.getItem('UserID') || '';
  const name = localStorage.getItem('UserName') || '';
  const email = localStorage.getItem('UserEmail') || '';
  const token = localStorage.getItem('UserToken') || '';
  const message = localStorage.getItem('UserMessage') || '';
  const refreshToken = localStorage.getItem('UserRefreshToken') || '';
  const authorizeStatus = Boolean(localStorage.getItem('UserAuthStatus')) || false;
  return { id, name, token, email, message, refreshToken, authorizeStatus };
};

export const clearLocalStorage = (): void => {
  localStorage.removeItem('UserID');
  localStorage.removeItem('UserName');
  localStorage.removeItem('UserEmail');
  localStorage.removeItem('UserToken');
  localStorage.removeItem('UserMessage');
  localStorage.removeItem('UserRefreshToken');
  localStorage.removeItem('UserAuthStatus');
};
