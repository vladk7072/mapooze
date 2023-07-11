import { useEffect } from "react";
import { MainMap } from "./components/MainMap";
import { AsidePanel } from "./components/AsidePanel/AsidePanel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PolicyPanel } from "./components/PolicyPanel/PolicyPanel";
import { TopPanel } from "./components/TopPanel/TopPanel";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import { NotificationPanel } from "./components/NotificationPanel/NotificationPanel";
import { ChatAside } from "./components/ChatPanel/ChatAside";
import { ChatMain } from "./components/ChatPanel/ChatMain";
import { LandsPanel } from "./components/LandsPanel/LandsPanel";
import { LoginPanel } from "./components/LoginPanel/LoginPanel";
import { ForgotPanel } from "./components/LoginPanel/ForgotPanel";
import { VerificationPanel } from "./components/LoginPanel/VerificationPanel";
import { ResetPassword } from "./components/LoginPanel/ResetPassword";
import { ChangedPanel } from "./components/LoginPanel/ChangedPanel";
import { RegisterPanel } from "./components/RegisterPanel/RegisterPanel";
import { PersonalPanel } from "./components/RegisterPanel/PersonalPanel";
import { VerificationRegisterPanel } from "./components/RegisterPanel/VerificationRegisterPanel";
import { AccountPanel } from "./components/AccountPanel/AccountPanel";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { mainSlice } from "./store/slices/main.slice";
import { asidePanelSlice } from "./store/slices/asidePanel.slice";
import { SalePanel } from "./components/SalePanel/SalePanel";
import { SalePlace } from "./components/SalePanel/SalePlace";
import { Cookie } from "./components/Cookie/Cookie";

export default function App() {
  const { isDarkTheme, widthClient } = useAppSelector(
    (state) => state.mainPanelReducer
  );
  const { isOpenAside } = useAppSelector((state) => state.asidePanelReducer);
  const { userTime, setClientWidth, setMobile } = mainSlice.actions;
  const { setVisibleAside } = asidePanelSlice.actions;
  const dispatch = useAppDispatch();

  const handleChangeWidthClient = () => {
    dispatch(setClientWidth(window.innerWidth));
    if (widthClient <= 768) {
      dispatch(setMobile(true));
    } else {
      dispatch(setMobile(false));
    }
    if (widthClient <= 990) {
      dispatch(setVisibleAside(false));
    } else {
      dispatch(setVisibleAside(true));
    }
  };

  useEffect(() => {
    dispatch(userTime());

    dispatch(setClientWidth(window.innerWidth));
    if (widthClient <= 768) {
      dispatch(setMobile(true));
    } else {
      dispatch(setMobile(false));
    }
    if (widthClient <= 990) {
      dispatch(setVisibleAside(false));
    } else {
      dispatch(setVisibleAside(true));
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.metaKey && event.key === "e") ||
        (event.ctrlKey && event.key === "e")
      ) {
        event.preventDefault();
        dispatch(setVisibleAside());
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("resize", handleChangeWidthClient);
    return () => {
      window.removeEventListener("resize", handleChangeWidthClient);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  useEffect(() => {
    dispatch(userTime());

    dispatch(setClientWidth(window.innerWidth));
    if (widthClient <= 768) {
      dispatch(setMobile(true));
    } else {
      dispatch(setMobile(false));
    }
    if (widthClient <= 990) {
      dispatch(setVisibleAside(false));
    } else {
      dispatch(setVisibleAside(true));
    }
  }, [widthClient]);

  return (
    <section className="main">
      <BrowserRouter>
        <MainMap isDarkTheme={isDarkTheme} />
        <div className="application">
          <AsidePanel />
          <Routes>
            <Route
              path="register"
              element={<RegisterPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="register/2"
              element={<PersonalPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="register/3"
              element={<VerificationRegisterPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="login"
              element={<LoginPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="forgot"
              element={<ForgotPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="verification"
              element={<VerificationPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="resetpassword"
              element={<ResetPassword isOpenAside={isOpenAside} />}
            />
            <Route
              path="success"
              element={<ChangedPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="filter"
              element={<SalePanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="filter/*"
              element={<SalePlace isOpenAside={isOpenAside} />}
            />
            <Route
              path="policy"
              element={<PolicyPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="top"
              element={<TopPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="search"
              element={<SearchPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="notification"
              element={<NotificationPanel isOpenAside={isOpenAside} />}
            />
            <Route path="chat" element={<ChatAside />} />
            <Route path="chat/:id" element={<ChatMain />} />
            <Route
              path="lands"
              element={<LandsPanel isOpenAside={isOpenAside} />}
            />
            <Route
              path="account/*"
              element={<AccountPanel isOpenAside={isOpenAside} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Cookie />
    </section>
  );
}
