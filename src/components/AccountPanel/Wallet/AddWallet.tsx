import { useState, useEffect, FC } from "react";
import { NewWallet } from "./NewWallet";
// @ts-ignore
import metamask from "../../../assets/images/wallet/metamask.png";
import { Link } from "react-router-dom";
import { AddWalletType } from "../../../types/AccountPanel/AccountWalletTypes/AddWalletTypes";
import { useAppSelector } from "../../../hooks/redux-hooks";

export const AddWallet: FC<AddWalletType> = ({ setOpenBar }) => {
  const { isMobile } = useAppSelector((state) => state.mainPanelReducer);
  const [isAddedMode, setAddedMode] = useState(false);
  const [isCards, setCards] = useState(true);

  return (
    <div className="addwallet">
      {isAddedMode ? (
        <NewWallet setAddedMode={setAddedMode} setCards={setCards} />
      ) : (
        <>
          {isMobile && (
            <Link onClick={() => setOpenBar(true)} to="..">
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
                  fill="white"
                  style={{ fill: "white" }}
                />
              </svg>
            </Link>
          )}
          <div className="addwallet__mob-title">My Wallet</div>
          <div
            className={
              isCards
                ? "addwallet__error-title addwallet__error-title--active"
                : "addwallet__error-title"
            }
          >
            {isCards
              ? "Select an existing wallet to edit or create a new one"
              : "You don’t have any wallet"}
            <Link className="account__close" to="/">
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
          <div className="addwallet__cards">
            <div className="addwallet__add" onClick={() => setAddedMode(true)}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 27C32.8667 27 33.5833 26.7167 34.15 26.15C34.7167 25.5833 35 24.8667 35 24C35 23.1333 34.7167 22.4167 34.15 21.85C33.5833 21.2833 32.8667 21 32 21C31.1333 21 30.4167 21.2833 29.85 21.85C29.2833 22.4167 29 23.1333 29 24C29 24.8667 29.2833 25.5833 29.85 26.15C30.4167 26.7167 31.1333 27 32 27ZM10 42C8.9 42 7.958 41.608 7.174 40.824C6.39 40.04 5.99867 39.0987 6 38V10C6 8.9 6.392 7.958 7.176 7.174C7.96 6.39 8.90134 5.99867 10 6H38C39.1 6 40.042 6.392 40.826 7.176C41.61 7.96 42.0013 8.90134 42 10V15H38V10H10V38H38V33H42V38C42 39.1 41.608 40.042 40.824 40.826C40.04 41.61 39.0987 42.0013 38 42H10ZM26 34C24.9 34 23.958 33.608 23.174 32.824C22.39 32.04 21.9987 31.0987 22 30V18C22 16.9 22.392 15.958 23.176 15.174C23.96 14.39 24.9013 13.9987 26 14H40C41.1 14 42.042 14.392 42.826 15.176C43.61 15.96 44.0013 16.9013 44 18V30C44 31.1 43.608 32.042 42.824 32.826C42.04 33.61 41.0987 34.0013 40 34H26ZM40 30V18H26V30H40Z"
                  fill="white"
                />
              </svg>
              <div className="addwallet__add-title">Add wallet</div>
            </div>
            {isCards && (
              <Link className="addwallet__card" to="1">
                <div className="addwallet__card-code">
                  ********4BGhYv2bFBaiKhHjqDEL
                </div>
                <div className="addwallet__card-bottom">
                  <div className="addwallet__card-name">Jack Brown</div>
                  <div className="addwallet__card-image">
                    <img src={metamask} alt="" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};
