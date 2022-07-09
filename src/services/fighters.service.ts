import httpClient from './httpClient.service';
import { IFighter } from '../interfaces';

export const getFighters = async (universe: string): Promise<IFighter[]> => {
  // return await httpClient.get('/fighters?universe=Mario&sortBy=name').then(response => {
  return await httpClient.get(`/fighters?${universe}`).then(response => {
    return response.data;
  });
};
