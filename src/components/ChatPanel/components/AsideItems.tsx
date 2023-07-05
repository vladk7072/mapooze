import { FC } from "react";
import { asidePanelSlice } from "../../../store/slices/asidePanel.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { NavLink } from "react-router-dom";
//@ts-ignore
import ico1 from "../../../assets/images/chatpanel/1.jpg";
//@ts-ignore
import ico2 from "../../../assets/images/chatpanel/2.jpg";
//@ts-ignore
import ico3 from "../../../assets/images/chatpanel/3.jpg";
//@ts-ignore
import ico4 from "../../../assets/images/chatpanel/4.jpg";

export const AsideItems: FC = () => {
  const { isOpenAside } = useAppSelector((state) => state.asidePanelReducer);
  const { setVisibleAside } = asidePanelSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="chatpanel__items">
      <NavLink
        className="chatpanel__item"
        to="1"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico1} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.73499 9.17366L8.67633 10.115L14.3203 4.47099L15.263 5.41366L8.67633 12.0003L4.43366 7.75766L5.37633 6.81499L6.79299 8.23166L7.73499 9.17299V9.17366ZM7.73633 7.28833L11.0377 3.98633L11.9777 4.92633L8.67633 8.22833L7.73633 7.28833ZM5.85166 11.0583L4.90966 12.0003L0.666992 7.75766L1.60966 6.81499L2.55166 7.75699L2.55099 7.75766L5.85166 11.0583V11.0583Z"
                fill="#BDD2B6"
              />
            </svg>
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
          <div className="chatpanel__item-counter">3</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="2"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico2} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="3"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico3} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum{" "}
            </div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="4"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico4} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="5"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico2} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="6"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico3} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="7"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico4} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="8"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico2} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="9"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico3} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
      <NavLink
        className="chatpanel__item"
        to="10"
        onClick={() => dispatch(setVisibleAside(false))}
      >
        <div className="chatpanel__item-logo">
          <img src={ico4} alt="" />
        </div>
        <div className="chatpanel__item-textbox">
          <div className="chatpanel__item-title">Jacky Marco</div>
          <div className="chatpanel__item-text-inner">
            <div className="chatpanel__item-text">lorem ipsum</div>
          </div>
        </div>
        <div className="chatpanel__item-timebox">
          <div className="chatpanel__item-time">11:33</div>
        </div>
      </NavLink>
    </div>
  );
};
