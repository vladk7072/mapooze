import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { asidePanelSlice } from "../../../store/slices/asidePanel.slice";
import { NavLink } from "react-router-dom";
//@ts-ignore
import headerLogo from "../../../assets/images/asidepanel/header-logo.svg";

export const Header: FC = () => {
  const { isOpenAside } = useAppSelector((state) => state.asidePanelReducer);
  const { setVisibleAside, checkMobileAside } = asidePanelSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <header
      className={
        isOpenAside
          ? "asidepanel__header asidepanel__header--active"
          : "asidepanel__header"
      }
    >
      <NavLink
        className="asidepanel__header-image"
        to="/"
        onClick={() => dispatch(checkMobileAside())}
      >
        <img src={headerLogo} alt="" />
      </NavLink>
      <div className="asidepanel__burger" onClick={() => dispatch(setVisibleAside())}>
        <span></span>
      </div>
    </header>
  );
};
