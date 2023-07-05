import { useMemo } from "react";
import { useAppDispatch } from "./redux-hooks";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions as asidePanelActions } from "../store/slices/asidePanel.slice";
import { actions as filterPanelActions } from "../store/slices/filterPanel.slice";
import { actions as mainActions } from "../store/slices/main.slice";
import { actions as myLandsActions } from "../store/slices/myLands.slice";
import { actions as topPanelActions } from "../store/slices/topPanel.slice";
import { useDispatch } from "react-redux";

const rootActions = {
  ...asidePanelActions,
  ...filterPanelActions,
  ...mainActions,
  ...myLandsActions,
  ...topPanelActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};