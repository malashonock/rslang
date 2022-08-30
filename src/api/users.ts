import { AxiosResponse } from 'axios';
import { User, UserResponce, AuthResponse, deletedUser } from '../model/User';
import instanceAxios from './httpConfig';

export const createUser = async (creatingUser: User): Promise<UserResponce> => {
  const response: AxiosResponse<UserResponce, undefined> = await instanceAxios.post(
    `/users`,
    creatingUser
  );
  return response.data;
};

export const signIn = async (creatingUser: User): Promise<AuthResponse> => {
  const response: AxiosResponse<AuthResponse, undefined> = await instanceAxios.post(
    `/signin`,
    creatingUser
  );
  return response.data;
};

export const getUser = async (userId: string): Promise<UserResponce> => {
  const response: AxiosResponse<UserResponce, undefined> = await instanceAxios.get(
    `/users/${userId}`
  );
  return response.data;
};

export const updateUser = async (userId: string): Promise<User> => {
  const response: AxiosResponse<User, undefined> = await instanceAxios.put(`/users/${userId}`);
  return response.data;
};

export const deleteUser = async (userId: string): Promise<deletedUser> => {
  const response: AxiosResponse<number, undefined> = await instanceAxios.delete(`/users/${userId}`);
  return { id: userId, status: response.status };
};

export const getNewUserToken = async (userId: string): Promise<AuthResponse> => {
  const response: AxiosResponse<AuthResponse, undefined> = await instanceAxios.get(
    `/users/${userId}/tokens`
  );
  return response.data;
};
