import axios, { AxiosResponse } from 'axios';
import { Auth, User, UserResponce } from '../model/User';
import API_BASE_URL from './constants';

const usersEndpoint = `${API_BASE_URL}/users`;
const signInEndpoint = `${API_BASE_URL}/signin`;

export const createUser = async (creatingUser: User): Promise<UserResponce> => {
  const response: AxiosResponse<UserResponce, undefined> = await axios.post(
    `${usersEndpoint}`,
    creatingUser
  );
  return response.data;
};

export const signInUser = async (user: User): Promise<Auth> => {
  const response: AxiosResponse<Auth, undefined> = await axios.post(`${signInEndpoint}`, user);
  return response.data;
};

export const getUserToken = async (userId: string): Promise<Auth> => {
  const getUserTokenEndpoint = `${usersEndpoint}/${userId}/tokens`;
  const response: AxiosResponse<Auth, undefined> = await axios.post(
    `${getUserTokenEndpoint}`,
    userId
  );
  return response.data;
};
