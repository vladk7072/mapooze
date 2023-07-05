import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isDarkTheme: boolean;
  day: string;
  month: string;
  year: string;
  isMobile: boolean;
  widthClient: number;
}

export const initialState: IInitialState = {
  isDarkTheme: false,
  day: "",
  month: "",
  year: "",
  isMobile: false,
  widthClient: 0,
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setDarkTheme(state) {
      if (state.isDarkTheme) {
        state.isDarkTheme = false;
      } else {
        state.isDarkTheme = true;
      }
    },
    userTime(state) {
      const today = new Date();
      const day: string | number = today.getDate();
      const month: string | number = today.getMonth() + 1;
      state.year = today.getFullYear().toString().slice(2);
      state.day = day < 10 ? "0" + day : day.toString();
      state.month = month < 10 ? "0" + month : month.toString();
    },
    setMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
    setClientWidth(state, action: PayloadAction<number>) {
      state.widthClient = action.payload;
    },
  },
});

export const { reducer, actions } = mainSlice;
