import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as mainPanelReducer } from "./slices/main.slice";
import { reducer as asidePanelReducer } from "./slices/asidePanel.slice";
import { reducer as topPanelReducer } from "./slices/topPanel.slice";
import { reducer as myLandsReducer } from "./slices/myLands.slice";
import { reducer as filterPanelReducer } from "./slices/filterPanel.slice";
// import { homeRtk } from "./rtk/homeRtk";

const mainReducer = combineReducers({
  // [homeRtk.reducerPath]: homeRtk.reducer,
  mainPanelReducer,
  asidePanelReducer,
  topPanelReducer,
  myLandsReducer,
  filterPanelReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      // cardRtk.middleware,
    ],
  });
};

export type StoreType = ReturnType<typeof setupStore>;
export type StateType = ReturnType<typeof mainReducer>;
export type DispatchType = StoreType["dispatch"];
