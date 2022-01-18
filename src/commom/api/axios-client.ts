import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {REACT_APP_API_URL} from './apiKey';

export const retriveData = async () => {
  let value: string = (await AsyncStorage.getItem('token')) || '';
  console.log('value token', value);

  return value;
  // return JSON.parse(value);
};

// export var token: any = AsyncStorage.getItem('token');
export var token: any = retriveData();
const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  responseType: 'json',
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  (config: any) => {
    const accessToken: any = token._W;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function error() {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: string) => {
    throw error;
  },
);

export default axiosClient;
