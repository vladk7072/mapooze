import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  selectFont: number | null;
  selectWeight: number | null;
  selectSize: number;
  isActiveFontsList: boolean;
  isActiveWeightList: boolean;
  isActiveSizeList: boolean;
  isActiveMarkerList: boolean;
  color: { r: number; g: number; b: number; a: number };
  angle: number;
}

export const initialState: IInitialState = {
  selectFont: 20,
  selectWeight: null,
  selectSize: 1,
  isActiveFontsList: false,
  isActiveMarkerList: false,
  isActiveWeightList: false,
  isActiveSizeList: false,
  color: { r: 241, g: 236, b: 225, a: 0.9 },
  angle: 0,
};

export const myLandsSlice = createSlice({
  name: "myLandsSlice",
  initialState,
  reducers: {
    setSelectFont(state, action: PayloadAction<number>) {
      state.selectFont = action.payload;
    },
    setSelectWeight(state, action: PayloadAction<number>) {
      state.selectWeight = action.payload;
    },
    setSelectSize(state, action: PayloadAction<number>) {
      state.selectSize = action.payload;
    },
    setActiveFontsList(state, action: PayloadAction<boolean>) {
      state.isActiveFontsList = action.payload;
    },
    setActiveWeightList(state, action: PayloadAction<boolean>) {
      state.isActiveWeightList = action.payload;
    },
    setActiveSizeList(state, action: PayloadAction<boolean>) {
      state.isActiveSizeList = action.payload;
    },
    setActiveMarkerList(state, action: PayloadAction<boolean>) {
      state.isActiveMarkerList = action.payload;
    },
    setColorAction(
      state,
      action: PayloadAction<{ r: number; g: number; b: number; a: number }>
    ) {
      state.color = action.payload;
    },
    setAngle(state, action: PayloadAction<number>) {
      state.angle = action.payload;
    },
  },
});

export const { reducer, actions } = myLandsSlice;
