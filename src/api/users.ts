import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { User, UserResponce, AuthResponse } from '../model/User';
import API_BASE_URL from './constants';

const usersEndpoint = `${API_BASE_URL}/users`;
const signInEndpoint = `${API_BASE_URL}/signin`;

const authUser = (token: string): AxiosInstance => {
  return axios.create({
    baseURL: signInEndpoint,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = async (creatingUser: User): Promise<UserResponce> => {
  const response: AxiosResponse<UserResponce, undefined> = await axios.post(
    `${usersEndpoint}`,
    creatingUser
  );
  return response.data;
};

export const signIn = async (creatingUser: User): Promise<AuthResponse> => {
  const response: AxiosResponse<AuthResponse, undefined> = await axios.post(
    `${signInEndpoint}`,
    creatingUser
  );
  return response.data;
};

export const getUser = async (userId: string, token: string): Promise<UserResponce> => {
  const response: AxiosResponse<UserResponce, undefined> = await authUser(token).get(`/${userId}`);
  return response.data;
};

export const updateUser = async (userId: string, token: string): Promise<User> => {
  const response: AxiosResponse<User, undefined> = await authUser(token).put(`/${userId}`);
  return response.data;
};

export const deleteUser = async (userId: string, token: string): Promise<number> => {
  const response: AxiosResponse<number, undefined> = await authUser(token).delete(`/${userId}`);
  return response.status;
};

export const getNewUserToken = async (userId: string, token: string): Promise<AuthResponse> => {
  const response: AxiosResponse<AuthResponse, undefined> = await authUser(token).get(
    `/${userId}/tokens`
  );
  return response.data;
};

export const userLogout = (): void => {
  localStorage.removeItem('userId');
};
