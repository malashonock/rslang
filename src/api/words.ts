import axios, { AxiosResponse } from 'axios';
import Word from '../interfaces/Word';

const baseUrl = 'https://rslang-team159-be.herokuapp.com/words';

const getWords = async (group: string, page: string): Promise<Word[]> => {
  const response: AxiosResponse<Word[], undefined> = await axios.get(
    `${baseUrl}?group=${group}&page=${page}`
  );

  return response.data;
};

export default getWords;
