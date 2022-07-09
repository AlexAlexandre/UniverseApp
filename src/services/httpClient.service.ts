import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://593cdf8fb56f410011e7e7a9.mockapi.io',
});

export default httpClient;
