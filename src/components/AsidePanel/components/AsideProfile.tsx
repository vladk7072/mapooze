import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { asidePanelSlice } from "../../../store/slices/asidePanel.slice";

export const AsideProfile: FC = () => {
  const { widthClient } = useAppSelector((state) => state.mainPanelReducer);
  const { setVisibleAside } = asidePanelSlice.actions;
  const dispatch = useAppDispatch();

  // функция проверки если моб то закроется
  const checkMobileCloseAsideHandler = () => {
    if (widthClient <= 768) {
      dispatch(setVisibleAside());
    }
  };

  return (
    <div className="asidepanel__profile">
      <NavLink
        className="asidepanel__profile-title"
        to={widthClient <= 768 ? "account" : "account/details"}
        onClick={() => checkMobileCloseAsideHandler()}
      >
        Profile
      </NavLink>
      <div className="asidepanel__profile-btns">
        <NavLink
          className="asidepanel__profile-btn button-aside"
          to="login"
          onClick={() => checkMobileCloseAsideHandler()}
        >
          Log in
        </NavLink>
        <NavLink
          className="asidepanel__profile-btn button-aside"
          to="register"
          onClick={() => checkMobileCloseAsideHandler()}
        >
          Sign in
        </NavLink>
      </div>
    </div>
  );
};
