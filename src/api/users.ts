import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { User, UserDeleted, UserResponse } from '../model/User';
import Auth from '../model/Auth';
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

export const newUserData = async (creatingUser: User): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse, undefined> = await axios.post(
    `${usersEndpoint}`,
    creatingUser
  );
  return response.data;
};

export const signIn = async (creatingUser: User): Promise<Auth> => {
  const response: AxiosResponse<Auth, undefined> = await axios.post(
    `${signInEndpoint}`,
    creatingUser
  );
  return response.data;
};

export const getUser = async (userId: string, token: string): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse, undefined> = await authUser(token).get(`/${userId}`);
  return response.data;
};

export const updateUser = async (userId: string, token: string): Promise<User> => {
  const response: AxiosResponse<User, undefined> = await authUser(token).put(`/${userId}`);
  return response.data;
};

export const deleteUser = async (userId: string, token: string): Promise<UserDeleted> => {
  const response: AxiosResponse<UserDeleted, undefined> = await authUser(token).delete(
    `/${userId}`
  );
  return { id: userId, responseStatus: response.status };
};

export const getNewUserToken = async (userId: string, token: string): Promise<Auth> => {
  const response: AxiosResponse<Auth, undefined> = await authUser(token).get(`/${userId}/tokens`);
  return response.data;
};
