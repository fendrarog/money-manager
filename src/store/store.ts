import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import TransactionsReducer from "./TransactionsSlice";

export const store = configureStore({
  reducer: {
    transactions: TransactionsReducer,
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
