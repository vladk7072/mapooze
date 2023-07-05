import React, { FC } from "react";
//@ts-ignore
import logoProfile from "../../assets/images/chatpanel/logo-profile.jpg";
import { ChatProfileAsideType } from "../../types/ChatPanelTypes";

export const ChatProfileAside:FC<ChatProfileAsideType> = ({ isOpenAside, setMyProfile }) => {
  return (
    <div className={isOpenAside ? "chatpanel chatpanel--active" : "chatpanel"}>
      <div className="chatpanel__profile">
        <div className="chatpanel__profile-top">
          <div className="chatpanel__profile-top-btn" onClick={() => setMyProfile(false)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.21899 7.33312H13.3337V8.66645H5.21899L8.79499 12.2425L7.85232 13.1851L2.66699 7.99979L7.85232 2.81445L8.79499 3.75712L5.21899 7.33312Z"
                fill="#29ABE2"
              />
            </svg>
          </div>
          <div className="chatpanel__profile-top-title">Profile</div>
        </div>
        <div className="chatpanel__profile-card">
          <img
            className="chatpanel__profile-card-icon"
            src={logoProfile}
            alt=""
          />
          <div className="chatpanel__profile-card-name">Ava Martin</div>
          <a className="chatpanel__profile-card-link" href="tel:49113947364">
            +49 113 947364
          </a>
        </div>
        <div className="chatpanel__profile-box">
          <div className="chatpanel__profile-boxtext">
            <div className="chatpanel__profile-subtitle">Info</div>
            <div className="chatpanel__profile-subprof">Photographing</div>
          </div>
          <div className="chatpanel__profile-change">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.728 9.68608L14.314 8.27208L5 17.5861V19.0001H6.414L15.728 9.68608ZM17.142 8.27208L18.556 6.85808L17.142 5.44408L15.728 6.85808L17.142 8.27208ZM7.242 21.0001H3V16.7571L16.435 3.32208C16.6225 3.13461 16.8768 3.0293 17.142 3.0293C17.4072 3.0293 17.6615 3.13461 17.849 3.32208L20.678 6.15108C20.8655 6.33861 20.9708 6.59292 20.9708 6.85808C20.9708 7.12325 20.8655 7.37756 20.678 7.56508L7.243 21.0001H7.242Z"
                fill="#29ABE2"
              />
            </svg>
          </div>
        </div>
        <div className="chatpanel__profile-box">
          <div className="chatpanel__profile-boxtext">
            <div className="chatpanel__profile-subtitle">Name</div>
            <div className="chatpanel__profile-subprof">Ava Martin</div>
          </div>
          <div className="chatpanel__profile-change">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.728 9.68608L14.314 8.27208L5 17.5861V19.0001H6.414L15.728 9.68608ZM17.142 8.27208L18.556 6.85808L17.142 5.44408L15.728 6.85808L17.142 8.27208ZM7.242 21.0001H3V16.7571L16.435 3.32208C16.6225 3.13461 16.8768 3.0293 17.142 3.0293C17.4072 3.0293 17.6615 3.13461 17.849 3.32208L20.678 6.15108C20.8655 6.33861 20.9708 6.59292 20.9708 6.85808C20.9708 7.12325 20.8655 7.37756 20.678 7.56508L7.243 21.0001H7.242Z"
                fill="#29ABE2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
