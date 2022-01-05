import { createAsyncThunk } from "@reduxjs/toolkit";
import accountAPI from "../../commom/api/api-account";
import { LoginType, RegisterType } from "../../types";

export const postLogin = createAsyncThunk("/account/login", async (data: LoginType) => {
    const response = await accountAPI.postLogin(data);
    console.log(response);
    
    return response;
});

export const postRegister = createAsyncThunk("/account/register", async (data: RegisterType) => {
    const response = await accountAPI.postRegister(data);
    console.log(response);
    return response;
});

export const postLogout = createAsyncThunk("/account/logout", () => {
    return;
});