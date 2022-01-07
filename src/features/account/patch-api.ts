import {createAsyncThunk} from '@reduxjs/toolkit';
import accountAPI from '../../commom/api/api-account';
import {LoginType, RegisterType} from '../../types';

export const postLogin = createAsyncThunk(
  '/account/login',
  async (data: LoginType) => {
    const response = await accountAPI.postLogin(data);
    return response;
  },
);

export const postRegister = createAsyncThunk(
  '/account/register',
  async (data: RegisterType) => {
    const response = await accountAPI.postRegister(data);
    return response;
  },
);

export const postLogout = createAsyncThunk('/account/logout', () => {
  return;
});

export const checkToken = createAsyncThunk('/account/checktoken', async () => {
  const response = await accountAPI.postCheckToken();
  return response.result;
});
