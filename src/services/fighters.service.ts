import httpClient from './httpClient.service';
import { IFighter } from '../interfaces';

export const getFighters = async (): Promise<IFighter[]> => {
  console.log('service *** getFighters');
  // return await httpClient.get('/fighters?universe=Mario&sortBy=name').then(response => {
  return await httpClient.get('/fighters').then(response => {
    return response.data;
  });
};
