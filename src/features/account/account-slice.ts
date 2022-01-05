import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin, postLogout, postRegister } from ".";
import { RootState } from "../../redux/store";
import { Account, CustomesAccount } from "../../types";
import queryString from 'query-string';
const initialStateAccount: CustomesAccount = { 
    listuser: {} as Account, 
    loading: false,
    token: "",
    error: false,
};

const accountSlice = createSlice({
    name: "account",
    initialState: initialStateAccount,
    reducers: {
        //action login Storage

    },
    extraReducers: (builder: ActionReducerMapBuilder<CustomesAccount>) => {
        // login
        builder
            .addCase(postLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(postLogin.fulfilled, (state, action) => {
                const { listuser, token } = action.payload;
                state.listuser = listuser;
                state.token = token;
                state.loading = false;
                AsyncStorage.setItem("token", token);
                // AsyncStorage.setItem("user", queryString.stringify(listuser));
                console.log("Đăng nhập thành công");
            })
            .addCase(postLogin.rejected, (state) => {
                state.loading = false;
                console.log("Đăng nhập không thành công");
            });
        //  log out the user
        builder.addCase(postLogout.fulfilled, (state) => {
            state.listuser = {} as any;
            state.token = "";
            AsyncStorage.removeItem("token");
            // AsyncStorage.removeItem("user");
            console.log("Đã đăng xuất");
        });
        // register
        builder
            .addCase(postRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(postRegister.fulfilled, (state, action) => {
                const { listuser } = action.payload;
                state.listuser = listuser;
                state.loading = false;
                console.log('Đăng ký thành công');
                
            })
            .addCase(postRegister.rejected, (state) => {
                state.loading = false;
                console.log('Đăng ký không thành công');
            });
    },
});


const { reducer } = accountSlice;
export default reducer;
