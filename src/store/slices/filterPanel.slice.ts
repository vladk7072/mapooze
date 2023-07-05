import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  selectRegion: null | number;
  selectCountry: null | number;
  isActiveCountriesList: boolean;
  isActiveRegionsList: boolean;
  isActiveStatusList: boolean;
}

const initialState: IInitialState = {
  selectRegion: null,
  selectCountry: null,
  isActiveCountriesList: false,
  isActiveRegionsList: false,
  isActiveStatusList: false,
};

export const filterPanel = createSlice({
  name: "filterPanel",
  initialState,
  reducers: {
    setSelectRegion(state, action: PayloadAction<number>) {
      state.selectRegion = action.payload;
    },
    setActiveCountriesList(state, action: PayloadAction<boolean>) {
      state.isActiveCountriesList = action.payload;
    },
    setActiveRegionsList(state, action: PayloadAction<boolean>) {
      state.isActiveRegionsList = action.payload;
    },
    setActiveStatusList(state, action: PayloadAction<boolean>) {
      state.isActiveStatusList = action.payload;
    },
    setSelectCountry(state, action: PayloadAction<number | null>) {
      state.selectCountry = action.payload;
    },
  },
});

export const { reducer, actions } = filterPanel;
