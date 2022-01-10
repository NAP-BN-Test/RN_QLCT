import {createAsyncThunk} from '@reduxjs/toolkit';
import spendingAPI from '../../commom/api/api-spending';

export const getSpendingByDay = createAsyncThunk(
  '/spending/ByDay',
  async () => {
    const response = await spendingAPI.getSpendingByDay();
    console.log('ByDay', response);

    return response;
  },
);

export const getSpendingByWeek = createAsyncThunk(
  '/spending/ByWeek',
  async () => {
    const response = await spendingAPI.getSpendingByWeek();
    console.log('ByWeek', response);

    return response;
  },
);

export const getSpendingByMonth = createAsyncThunk(
  '/spending/ByMonth',
  async () => {
    const response = await spendingAPI.getSpendingByMonth();
    console.log('ByMonth', response);

    return response;
  },
);

export const getSpendingByDateToDate = createAsyncThunk(
  '/spending/ByDateToDate',
  async () => {
    const response = await spendingAPI.getSpendingByDateToDate();
    console.log('DateToDate', response);

    return response;
  },
);

export const postSpendingByID = createAsyncThunk(
  '/spending/ByID',
  async (data: {id: Number}) => {
    const response = await spendingAPI.postSpendingByID(data);
    console.log('ID', response);

    return response;
  },
);
