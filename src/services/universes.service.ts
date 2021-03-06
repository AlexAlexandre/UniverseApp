import httpClient from './httpClient.service';
import { IUniverse } from '../interfaces';

export const getUniverses = async (): Promise<IUniverse[]> => {
  return await httpClient.get('/universes').then(response => {
    return response.data;
  });
};
