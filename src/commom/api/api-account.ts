
import { AccountResponseLogin, AccountResponseRegister, LoginType, RegisterType } from "../../types";
import axiosClient from "./axios-client";

const accountAPI = {
    postLogin(data: LoginType): Promise<AccountResponseLogin> {
        const url = "auth/login";
        return axiosClient.post(url, data);
    },
    postRegister(data: RegisterType): Promise<AccountResponseRegister> {
        const url = "auth/register";
        return axiosClient.post(url, data);
    },
};
export default accountAPI;