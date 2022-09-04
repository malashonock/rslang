import { AxiosResponse } from 'axios';
import instanceAxios from './httpConfig';
import UserWord from '../model/UserWord';

const getUserWords = async (userId: string): Promise<UserWord[]> => {
  const response: AxiosResponse<UserWord[], undefined> = await instanceAxios.get(
    `/users/${userId}/words`
  );
  return response.data;
};

export default getUserWords;
