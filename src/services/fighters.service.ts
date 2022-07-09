import httpClient from './httpClient.service';
import { IFighter } from '../interfaces';

export const getFighters = async (): Promise<IFighter[]> => {
  return await httpClient.get('/fighters?universe=Mario').then(response => {
    return response.data;
  });
};
