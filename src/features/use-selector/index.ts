import { RootState } from "../../redux/store";

export const accountStore = (state: RootState) => state.account;
export const spendingStore = (state: RootState) => state.spending;
export const loadingGlobalStore = (state: RootState) => state.loadingGlobalStore;