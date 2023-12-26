import axios from 'axios';

export const BASE_API_URL = 'https://jaratco.pythonanywhere.com/lang/api/v1/';

export const axiosRequest = (lang: string) =>
  axios.create({
    baseURL: BASE_API_URL.replace('lang', lang),
  });
