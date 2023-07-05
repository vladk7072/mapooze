import { Link } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { HistoryItem } from "./HistoryItem";
import { dataHistory } from "./wallet.data";
import { CardInfoTop } from "./components/CardInfoTop";
import { CardInfoGraph } from "./components/CardInfoGraph";
import { CardInfoHistory } from "./components/CardInfoHistory";

export const CardInfo: FC = () => {  

  return (
    <div className="addwallet">
      <Link style={{ display: "inline" }} to="../wallet">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="addwallet__prev"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
            fill="#29ABE2"
          />
        </svg>
      </Link>
      <div className="addwallet__mob-title">My Wallet</div>
      <div className="addwallet__error-title addwallet__error-title--basic addwallet__error-title--mt20">
        Wallet “Cryptocurrency 1” details
      </div>
      <div className="cardinfo">
        <CardInfoTop />
        <div className="cardinfo__inner">
          <CardInfoGraph />
          <CardInfoHistory />
        </div>
      </div>
    </div>
  );
};
