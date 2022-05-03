import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { busApi } from "../api/BusApi";
import { RootState } from "../app/store";
import { currentBus, totalBuy, User } from "../share";

export const initialState: {
  wallet: number;
  totalBuy: totalBuy[];
  histoyBuy: totalBuy[];
  currentBus: currentBus[];
  auth: User | null;
  loading: Boolean;
} = {
  wallet: 1000000,
  totalBuy: [],
  currentBus: [],
  histoyBuy: [],
  auth: null,
  loading: false,
};

export const getAllBus = createAsyncThunk<currentBus[]>(
  "user/getCurrentBus",
  async (thunkAPI) => {
    const { data } = await busApi.getCurrentBus();
    return data;
  }
);
export const getSearchBus = createAsyncThunk(
  "user/getSearchBus",
  async (input: string, thunkAPI) => {
    const { data } = await busApi.searchBusApi(input);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    buyTicket: (state, action: PayloadAction<totalBuy>) => {
      state.wallet -= action.payload.value;
      state.totalBuy.push({
        nameTicket: action.payload.nameTicket,
        value: action.payload.value,
      });
    },
    moveToHistory: (state, action: PayloadAction<totalBuy[]>) => {
      state.totalBuy = [];
      let newArr: totalBuy[] = [];
      newArr = [...state.histoyBuy, ...action.payload];
      state.histoyBuy = newArr;
    },
    loginAuth: (state, action: PayloadAction<User>) => {
      state.auth = action.payload;
    },
    logout: (state) => {
      state.auth = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllBus.fulfilled,
      (state, action: PayloadAction<currentBus[]>) => {
        state.currentBus = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getSearchBus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchBus.fulfilled,
      (state, action: PayloadAction<currentBus[]>) => {
        state.currentBus = action.payload;
        state.loading = false;
      }
    );
  },
});

export const userSelector = (state: RootState) => state.user;
export const { buyTicket, moveToHistory, loginAuth, logout } =
  userSlice.actions;
export default userSlice.reducer;
