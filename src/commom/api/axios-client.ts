import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {REACT_APP_API_URL} from './apiKey';

const retriveData = async () => {
  let value: any = await AsyncStorage.getItem('token');
  return JSON.parse(value || '{}');
};

var token: any = retriveData();

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
    const accessToken: any = token;
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
