import { AxiosResponse } from 'axios';
import instanceAxios from './httpConfig';
import { UserWord, UpdatedUserWord } from '../model/UserWord';

export const getUserWords = async (userId: string): Promise<UserWord[]> => {
  const response: AxiosResponse<UserWord[], undefined> = await instanceAxios.get(
    `/users/${userId}/words`
  );
  return response.data;
};

export const updateUserWord = async (
  userId: string,
  wordId: string,
  updatedWord: UpdatedUserWord
): Promise<UserWord> => {
  const response: AxiosResponse<UserWord, UserWord> = await instanceAxios.put(
    `/users/${userId}/words/${wordId}`,
    updatedWord
  );

  return response.data;
};
