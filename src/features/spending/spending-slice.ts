import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import {getSpendingByDay} from '.';
import {CustomesSpending, spendingType} from '../../types/spendingType';

const initialStateSpending: CustomesSpending = {
  listspending: [] as Array<spendingType>,
  totalmoney: 0,
  loading: false,
  error: false,
};

const spendingSlice = createSlice({
  name: 'spending',
  initialState: initialStateSpending,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesSpending>) => {
    builder
      .addCase(getSpendingByDay.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByDay.fulfilled, (state, action) => {
        console.log('action', action);

        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByDay.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });
  },
});

const {reducer} = spendingSlice;
export default reducer;
