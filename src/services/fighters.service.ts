import httpClient from './httpClient.service';
import { IFighter } from '../interfaces';

export const getFighters = async (universe: string, sortBy: string): Promise<IFighter[]> => {
  return await httpClient
    .get(`/fighters?universe=${universe === 'All' ? '' : universe}&sortBy=${sortBy}`)
    .then(response => {
      return response.data;
    });
};
