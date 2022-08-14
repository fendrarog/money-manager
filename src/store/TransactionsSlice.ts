import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export const fetchTransactions = createAsyncThunk<
  Transaction[],
  void,
  { rejectValue: string }
>("transactions/fetchTransactions", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://mocki.io/v1/2a3d4e8c-5e5b-4e44-9dc7-ea0d37233003",
    { mode: "cors" }
  );
  console.log(response);
  if (!response.ok || response.status === 404) {
    return rejectWithValue("Server error! Can't get transactions!");
  }
  return (await response.json()) as Transaction[];
});

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

export interface TransactionsState {
  list: Transaction[];
  load: boolean | null;
  error: string | null;
}

export interface Transaction {
  name: string;
  icon: string;
  info: string;
  amount: number;
  date: string;
  time: string;
  invoice: string;
}

const initialState: TransactionsState = {
  list: [],
  load: null,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.load = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.list = action.payload;
        state.load = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.load = false;
      });
  },
});

export default transactionsSlice.reducer;


