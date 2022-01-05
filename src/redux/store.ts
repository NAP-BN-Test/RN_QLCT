import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../component/counterSlice/counterSlice';
import accountReducer from '../features/account/account-slice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
