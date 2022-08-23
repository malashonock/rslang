import axios, { AxiosResponse } from 'axios';
import Word from '../interfaces/Word';
import API_BASE_URL from './constants';

const wordsEndpoint = `${API_BASE_URL}/words`;

const getWords = async (group: string, page: string): Promise<Word[]> => {
  const response: AxiosResponse<Word[], undefined> = await axios.get(
    `${wordsEndpoint}?group=${group}&page=${page}`
  );

  return response.data;
};

export default getWords;
