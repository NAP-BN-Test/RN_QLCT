import {
  AccountResponseLogin,
  AccountResponseRegister,
  ChangePassword,
  LoginType,
  RegisterType,
} from '../../types';
import axiosClient from './axios-client';

const spendingAPI = {
  getSpendingByDay(): Promise<any> {
    const url = 'expense/getchitieubyday';
    return axiosClient.get(url);
  },

  getSpendingByWeek(): Promise<any> {
    const url = 'expense/getchitieubyweek';
    return axiosClient.get(url);
  },

  getSpendingByMonth(): Promise<any> {
    const url = 'expense/getchitieubymonth';
    return axiosClient.get(url);
  },

  getSpendingByDateToDate(): Promise<any> {
    const url = 'expense/getchitieubydatetodate';
    return axiosClient.get(url);
  },

  getSpendingAll(): Promise<any> {
    const url = 'expense/getallchitieu';
    return axiosClient.get(url);
  },

  postSpendingByID(data: Array<{id: Number}>): Promise<any> {
    const url = 'expense/getchitieubyid';
    return axiosClient.post(url, data);
  },
};
export default spendingAPI;
