import axios, { AxiosResponse } from 'axios';
import { User, UserResponce } from '../model/User';
import API_BASE_URL from './constants';

const usersEndpoint = `${API_BASE_URL}/users`;

export const createUser = async (creatingUser: User): Promise<UserResponce> => {
  const response: AxiosResponse<UserResponce, undefined> = await axios.post(
    `${usersEndpoint}`,
    creatingUser
  );
  return response.data;
};

export default createUser;
