import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { TopSection } from "./components/TopSection";
import { Auction } from "./components/Auction";
import { PriceToSell } from "./components/PriceToSell";
import { ForRent } from "./components/ForRent";
import { ForExchange } from "./components/ForExchange";
import { Advertising } from "./components/Advertising";
import { Personalization } from "./components/Personalization";
import { PreviewMap } from "./components/PreviewMap";
import { ScrollToTopOnMount } from "../../../utils/routerUp";

export const LandItem: FC = () => {
  const { isMobile } = useAppSelector((state) => state.mainPanelReducer);

  const [isPreviewMode, setPreviewMode] = useState<boolean>(false);

  const [selectFont, setSelectFont] = useState<null | number>(null);

  return (
    <>
      <ScrollToTopOnMount />
      <div className="exchange saleplace addwallet">
        {isMobile && (
          <Link to="../lands">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                fill="white"
                style={{ fill: "white" }}
              />
            </svg>
          </Link>
        )}
        <div className="addwallet__mob-title">My Lands</div>
        <div className="addwallet__error-title addwallet__error-title--active">
          {!isMobile && (
            <Link to="../lands">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                  fill="#29ABE2"
                />
              </svg>
            </Link>
          )}
          You can edit land information. Don’t forgot to click “Save”
          <Link
            className="account__close"
            to="/"
            style={!isMobile ? { marginLeft: "auto" } : {}}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3002 5.71022C18.2077 5.61752 18.0978 5.54397 17.9768 5.49379C17.8559 5.44361 17.7262 5.41778 17.5952 5.41778C17.4643 5.41778 17.3346 5.44361 17.2136 5.49379C17.0926 5.54397 16.9827 5.61752 16.8902 5.71022L12.0002 10.5902L7.11022 5.70022C7.01764 5.60764 6.90773 5.5342 6.78677 5.4841C6.6658 5.43399 6.53615 5.4082 6.40522 5.4082C6.27429 5.4082 6.14464 5.43399 6.02368 5.4841C5.90272 5.5342 5.79281 5.60764 5.70022 5.70022C5.60764 5.79281 5.5342 5.90272 5.4841 6.02368C5.43399 6.14464 5.4082 6.27429 5.4082 6.40522C5.4082 6.53615 5.43399 6.6658 5.4841 6.78677C5.5342 6.90773 5.60764 7.01764 5.70022 7.11022L10.5902 12.0002L5.70022 16.8902C5.60764 16.9828 5.5342 17.0927 5.4841 17.2137C5.43399 17.3346 5.4082 17.4643 5.4082 17.5952C5.4082 17.7262 5.43399 17.8558 5.4841 17.9768C5.5342 18.0977 5.60764 18.2076 5.70022 18.3002C5.79281 18.3928 5.90272 18.4662 6.02368 18.5163C6.14464 18.5665 6.27429 18.5922 6.40522 18.5922C6.53615 18.5922 6.6658 18.5665 6.78677 18.5163C6.90773 18.4662 7.01764 18.3928 7.11022 18.3002L12.0002 13.4102L16.8902 18.3002C16.9828 18.3928 17.0927 18.4662 17.2137 18.5163C17.3346 18.5665 17.4643 18.5922 17.5952 18.5922C17.7262 18.5922 17.8558 18.5665 17.9768 18.5163C18.0977 18.4662 18.2076 18.3928 18.3002 18.3002C18.3928 18.2076 18.4662 18.0977 18.5163 17.9768C18.5665 17.8558 18.5922 17.7262 18.5922 17.5952C18.5922 17.4643 18.5665 17.3346 18.5163 17.2137C18.4662 17.0927 18.3928 16.9828 18.3002 16.8902L13.4102 12.0002L18.3002 7.11022C18.6802 6.73022 18.6802 6.09022 18.3002 5.71022Z"
                fill="#29ABE2"
              />
            </svg>
          </Link>
        </div>
        <div className="exchange__wrapper">
          <div className="exchange__top">
            <div className="lands__top-title">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1 22.05C12.2333 22.1 12.3667 22.125 12.5 22.125C12.6333 22.125 12.7667 22.1 12.9 22.05C13.0333 22 13.15 21.9333 13.25 21.85C15.6833 19.7 17.5 17.7043 18.7 15.863C19.9 14.021 20.5 12.3 20.5 10.7C20.5 8.2 19.6957 6.20833 18.087 4.725C16.479 3.24167 14.6167 2.5 12.5 2.5C10.3833 2.5 8.521 3.24167 6.913 4.725C5.30433 6.20833 4.5 8.2 4.5 10.7C4.5 12.3 5.1 14.021 6.3 15.863C7.5 17.7043 9.31667 19.7 11.75 21.85C11.85 21.9333 11.9667 22 12.1 22.05Z"
                  fill="white"
                />
                <path
                  d="M12.5 15.5C13.4333 15.5 14.275 15.2707 15.025 14.812C15.775 14.354 16.3667 13.75 16.8 13C16.2167 12.5167 15.5583 12.1457 14.825 11.887C14.0917 11.629 13.3167 11.5 12.5 11.5C11.6833 11.5 10.9083 11.629 10.175 11.887C9.44167 12.1457 8.78333 12.5167 8.2 13C8.63333 13.75 9.225 14.354 9.975 14.812C10.725 15.2707 11.5667 15.5 12.5 15.5ZM12.5 10.5C13.05 10.5 13.521 10.304 13.913 9.912C14.3043 9.52067 14.5 9.05 14.5 8.5C14.5 7.95 14.3043 7.47933 13.913 7.088C13.521 6.696 13.05 6.5 12.5 6.5C11.95 6.5 11.4793 6.696 11.088 7.088C10.696 7.47933 10.5 7.95 10.5 8.5C10.5 9.05 10.696 9.52067 11.088 9.912C11.4793 10.304 11.95 10.5 12.5 10.5ZM12.5 22.125C12.3667 22.125 12.2333 22.1 12.1 22.05C11.9667 22 11.85 21.9333 11.75 21.85C9.31667 19.7 7.5 17.7043 6.3 15.863C5.1 14.021 4.5 12.3 4.5 10.7C4.5 8.2 5.30433 6.20833 6.913 4.725C8.521 3.24167 10.3833 2.5 12.5 2.5C14.6167 2.5 16.479 3.24167 18.087 4.725C19.6957 6.20833 20.5 8.2 20.5 10.7C20.5 12.3 19.9 14.021 18.7 15.863C17.5 17.7043 15.6833 19.7 13.25 21.85C13.15 21.9333 13.0333 22 12.9 22.05C12.7667 22.1 12.6333 22.125 12.5 22.125Z"
                  fill="#29ABE2"
                />
              </svg>
              Germany, Berlin
            </div>
          </div>
          {isPreviewMode ? (
            <PreviewMap setPreviewMode={setPreviewMode} />
          ) : (
            <>
              <TopSection />
              <div className="lands__section lands__section--second">
                <Auction />
                <PriceToSell />
                <Advertising />
                <ForRent />
                <ForExchange />
              </div>
            </>
          )}

          <div className="lands__section lands__section--third">
            <Personalization
              selectFont={selectFont}
              setSelectFont={setSelectFont}
              setPreviewMode={setPreviewMode}
            />
          </div>
          <button
            className="loginpanel__button lands__button-save"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
