import { AxiosResponse } from 'axios';
import instanceAxios from './httpConfig';
import { Statistic } from '../model/Statistic';
import getNowDate from '../utils/date';

export const createStatistic = async (id: string, creatingStat: Statistic): Promise<Statistic> => {
  const response: AxiosResponse<Statistic, undefined> = await instanceAxios.post(
    `/users${id}/statistics`,
    creatingStat
  );
  return response.data;
};

export const getDayliStatistic = async (userId: string, date?: string): Promise<Statistic[]> => {
  const dateState = date === undefined ? getNowDate() : date;
  const response: AxiosResponse<Statistic[], undefined> = await instanceAxios.get(
    `/users/${userId}/statistics?gameDate=${dateState}`
  );
  return response.data;
};
