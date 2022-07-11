import httpClient from './httpClient.service';
import { IFighter } from '../interfaces';

export const getFighters = async (universe: string, sortBy: string): Promise<IFighter[]> => {
  console.log('*** universe ***', universe);
  console.log('*** sortBy ***', sortBy);
  console.log('*** call API - getFighters ***');
  // return await httpClient.get('/fighters?universe=Mario&sortBy=name').then(response => {
  return await httpClient.get(`/fighters?${universe}&sortBy=${sortBy}`).then(response => {
    return response.data;
  });
};
