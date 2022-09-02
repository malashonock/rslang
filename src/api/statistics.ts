import { AxiosResponse } from 'axios';
import instanceAxios from './httpConfig';
import { Statistic } from '../model/Statistic';

export const createStatistic = async (creatingStat: Statistic): Promise<Statistic> => {
  const id = 10;
  const response: AxiosResponse<Statistic, undefined> = await instanceAxios.post(
    `/users${id}/statistics`,
    creatingStat
  );
  return response.data;
};

export const getStatistic = async (userId: string, date?: Date): Promise<void> => {
  const t: AxiosResponse<Statistic, undefined> = await instanceAxios.get(
    `/users${userId}/statistics`
  );
};
