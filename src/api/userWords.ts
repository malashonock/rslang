import { AxiosResponse } from 'axios';
import instanceAxios from './httpConfig';
import { UserWord, UpdatingUserWord } from '../model/UserWord';

export const getUserWords = async (userId: string): Promise<UserWord[]> => {
  const response: AxiosResponse<UserWord[], undefined> = await instanceAxios.get(
    `/users/${userId}/words`
  );
  return response.data;
};

export const updateUserWord = async (
  userId: string,
  wordId: string,
  updatingWord: UpdatingUserWord
) => {
  const response: AxiosResponse<UserWord, undefined> = await instanceAxios.put(
    `/users/${userId}/words/${wordId}`,
    updatingWord
  );

  return response.data;
};
