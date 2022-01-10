import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import {
  getSpendingByDateToDate,
  getSpendingByDay,
  getSpendingByMonth,
  getSpendingByWeek,
  postSpendingByID,
} from '.';
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
    //Ngày
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

    //Tuần
    builder
      .addCase(getSpendingByWeek.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByWeek.fulfilled, (state, action) => {
        console.log('action', action);

        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByWeek.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //Tháng

    builder
      .addCase(getSpendingByMonth.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByMonth.fulfilled, (state, action) => {
        console.log('action', action);

        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByMonth.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //Ngày đến ngày

    builder
      .addCase(getSpendingByDateToDate.pending, state => {
        state.loading = true;
      })
      .addCase(getSpendingByDateToDate.fulfilled, (state, action) => {
        console.log('action', action);

        const {result, totalmoney} = action.payload;
        state.listspending = result;
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSpendingByDateToDate.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });

    //ByID

    builder
      .addCase(postSpendingByID.pending, state => {
        state.loading = true;
      })
      .addCase(postSpendingByID.fulfilled, (state, action) => {
        console.log('action', action);

        const {result, totalmoney} = action.payload;
        state.listspending = [result];
        state.totalmoney = totalmoney;
        state.loading = false;
        state.error = false;
      })
      .addCase(postSpendingByID.rejected, state => {
        state.loading = false;
        console.log('Lấy dữ liệu không thành công');
      });
  },
});

const {reducer} = spendingSlice;
export default reducer;
