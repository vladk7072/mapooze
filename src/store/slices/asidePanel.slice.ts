import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState as initialStateMain } from "./main.slice";

interface IInitialState {
  isOpenAside: boolean;
}

const initialState: IInitialState = {
  isOpenAside: true,
};

export const asidePanelSlice = createSlice({
  name: "asidePanelSlice",
  initialState,
  reducers: {
    setVisibleAside(state, action: PayloadAction<undefined | boolean>) {
      if (state.isOpenAside) {
        state.isOpenAside =
          action.payload !== undefined ? action.payload : false;
      } else {
        state.isOpenAside =
          action.payload !== undefined ? action.payload : true;
      }
    },
    checkMobileAside(state) {
      if (initialStateMain.widthClient <= 768) {
        state.isOpenAside = false;
      }
    },
  },
});

export const { reducer, actions } = asidePanelSlice;
