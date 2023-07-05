import React, { FC } from "react";
import { ChatAside } from "./ChatAside";
//@ts-ignore
import logoPerson from "../../assets/images/chatpanel/1.jpg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";
import { MainMessageList } from "./components/MainMessageList";
import { MainMessageBottom } from "../AsidePanel/components/MainMessageBottom";

export const ChatMain: FC = () => {

  const {isOpenAside} = useAppSelector((state) => state.asidePanelReducer)

  return (
    <div
      className={
        isOpenAside
          ? "chatpanel__main chatpanel__main--active"
          : "chatpanel__main"
      }
    >
      <ChatAside />
      <div className="chatpanel__inner">
        <div className="chatpanel__inner-top">
          <Link className="chatpanel__mob-prev" to="../chat">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                fill="#29ABE2"
              />
            </svg>
          </Link>
          <div className="chatpanel__inner-logo">
            <img src={logoPerson} alt="" />
            <div className="chatpanel__inner-logo-title">Jacky Marco</div>
          </div>
          <div className="chatpanel__inner-btns">
            <div className="chatpanel__inner-search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75244 12.877C8.13867 12.877 9.41699 12.4287 10.4629 11.6816L14.3975 15.6162C14.5801 15.7988 14.8208 15.8901 15.0781 15.8901C15.6177 15.8901 15.9995 15.4751 15.9995 14.9438C15.9995 14.6948 15.9165 14.4541 15.7339 14.2798L11.8242 10.3618C12.646 9.28271 13.1357 7.94629 13.1357 6.49365C13.1357 2.98242 10.2637 0.110352 6.75244 0.110352C3.24951 0.110352 0.369141 2.97412 0.369141 6.49365C0.369141 10.0049 3.24121 12.877 6.75244 12.877ZM6.75244 11.499C4.01318 11.499 1.74707 9.23291 1.74707 6.49365C1.74707 3.75439 4.01318 1.48828 6.75244 1.48828C9.4917 1.48828 11.7578 3.75439 11.7578 6.49365C11.7578 9.23291 9.4917 11.499 6.75244 11.499Z"
                  fill="#29ABE2"
                />
              </svg>
            </div>
            <div className="chatpanel__inner-option">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#29ABE2"
                />
              </svg>
            </div>
          </div>
        </div>
        <MainMessageList />
        <MainMessageBottom />
      </div>
    </div>
  );
};
