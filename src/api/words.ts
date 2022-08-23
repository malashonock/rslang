import axios, { AxiosResponse } from 'axios';
import Word from '../interfaces/Word';

const baseUrl = 'https://rslang-team159-be.herokuapp.com/words';

const getWords = async (group: string, page: string): Promise<AxiosResponse<Word[], undefined>> => {
  const response = await axios.get(`${baseUrl}?group=${group}&page=${page}`);
  return response;
};

export default getWords;
