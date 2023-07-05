import { FC, useState } from "react";
//@ts-ignore
import logoPerson from "../../assets/images/chatpanel/logo.jpg";

import { ChatProfileAside } from "./ChatProfileAside";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { asidePanelSlice } from "../../store/slices/asidePanel.slice";
import { AsideStories } from "./components/AsideStories";
import { AsideItems } from "./components/AsideItems";

export const ChatAside: FC = () => {
  const { isOpenAside } = useAppSelector((state) => state.asidePanelReducer);
  const [isMyProfile, setMyProfile] = useState(false);

  return (
    <>
      {isMyProfile ? (
        <ChatProfileAside
          isOpenAside={isOpenAside}
          setMyProfile={setMyProfile}
        />
      ) : (
        <div
          className={isOpenAside ? "chatpanel chatpanel--active" : "chatpanel"}
        >
          <div className="chatpanel__header">
            <div className="chatpanel__top">
              <div
                className="chatpanel__top-logo"
                onClick={() => setMyProfile(true)}
              >
                <img src={logoPerson} alt="" />
              </div>
              <div className="chatpanel__top-box">
                <div className="chatpanel__add">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2H8C4.691 2 2 4.691 2 8V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H16C19.309 22 22 19.309 22 16V8C22 4.691 19.309 2 16 2ZM20 16C20 18.206 18.206 20 16 20H4V8C4 5.794 5.794 4 8 4H16C18.206 4 20 5.794 20 8V16Z"
                      fill="#29ABE2"
                    />
                    <path
                      d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                      fill="#29ABE2"
                    />
                  </svg>
                </div>
                <div className="chatpanel__dots">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_411_16223)">
                      <path
                        d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                        fill="#29ABE2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_411_16223">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="searchpanel__top-box chatpanel__top-input">
              <div className="searchpanel__search-img">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62939 12.877C8.01562 12.877 9.29395 12.4287 10.3398 11.6816L14.2744 15.6162C14.457 15.7988 14.6978 15.8901 14.9551 15.8901C15.4946 15.8901 15.8765 15.4751 15.8765 14.9438C15.8765 14.6948 15.7935 14.4541 15.6108 14.2798L11.7012 10.3618C12.5229 9.28271 13.0127 7.94629 13.0127 6.49365C13.0127 2.98242 10.1406 0.110352 6.62939 0.110352C3.12646 0.110352 0.246094 2.97412 0.246094 6.49365C0.246094 10.0049 3.11816 12.877 6.62939 12.877ZM6.62939 11.499C3.89014 11.499 1.62402 9.23291 1.62402 6.49365C1.62402 3.75439 3.89014 1.48828 6.62939 1.48828C9.36865 1.48828 11.6348 3.75439 11.6348 6.49365C11.6348 9.23291 9.36865 11.499 6.62939 11.499Z"
                    fill="#29ABE2"
                  />
                </svg>
              </div>
              <input className="searchpanel__input" type="text" />
              <div className="searchpanel__voice-img">
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.82031 11.7231C8.47217 11.7231 9.58447 10.4863 9.58447 8.71826V3.16504C9.58447 1.38867 8.47217 0.160156 6.82031 0.160156C5.16016 0.160156 4.04785 1.38867 4.04785 3.16504V8.71826C4.04785 10.4863 5.16016 11.7231 6.82031 11.7231ZM0.876953 8.85107C0.876953 12.105 3.02686 14.3877 6.18945 14.6533V16.5874H3.10986C2.76123 16.5874 2.479 16.8696 2.479 17.2183C2.479 17.5669 2.76123 17.8408 3.10986 17.8408H10.5225C10.8711 17.8408 11.1533 17.5669 11.1533 17.2183C11.1533 16.8696 10.8711 16.5874 10.5225 16.5874H7.44287V14.6533C10.6138 14.3877 12.7554 12.105 12.7554 8.85107V7.16602C12.7554 6.81738 12.4814 6.54346 12.1328 6.54346C11.7842 6.54346 11.502 6.81738 11.502 7.16602V8.80127C11.502 11.6318 9.65918 13.5078 6.82031 13.5078C3.97314 13.5078 2.13037 11.6318 2.13037 8.80127V7.16602C2.13037 6.81738 1.85645 6.54346 1.49951 6.54346C1.15088 6.54346 0.876953 6.81738 0.876953 7.16602V8.85107Z"
                    fill="#29ABE2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="chatpanel__wrapper">
            <AsideStories />
            <div className="chatpanel__messages">
              <div className="chatpanel__messages-title">Messages</div>
              <AsideItems />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
