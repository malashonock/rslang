import { AxiosResponse } from 'axios';
import instanceAxios from './httpConfig';
import { Statistic } from '../model/Statistic';

export const setStatistic = async (id: string, creatingStat: Statistic): Promise<Statistic> => {
  const response: AxiosResponse<Statistic, undefined> = await instanceAxios.post(
    `/users${id}/statistics`,
    creatingStat
  );
  return response.data;
};

export const getDayliStatistic = async (userId: string, date?: string): Promise<Statistic[]> => {
  const queryString = date === undefined ? '' : `?date=${date}`;
  const response: AxiosResponse<Statistic[], undefined> = await instanceAxios.get(
    `/users/${userId}/statistics${queryString}`
  );
  return response.data;
};
