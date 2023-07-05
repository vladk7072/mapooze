import { FC, useEffect, useState } from "react";

export const CardInfoGraph: FC = () => {

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div className="cardinfo__income">
      <div className="cardinfo__income-top">
        <div className="cardinfo__income-list">
          <div className="cardinfo__income-list-title">This week</div>
        </div>
        <div className="cardinfo__income-data">03 April - 09 April</div>
      </div>
      <div className="cardinfo__indicators">
        <div className="cardinfo__indicator">
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24.5" cy="24" r="24" fill="#12B677" />
            <path
              d="M23.5 16L23.5 28.17L17.91 22.58L16.5 24L24.5 32L32.5 24L31.09 22.59L25.5 28.17L25.5 16L23.5 16Z"
              fill="white"
            />
          </svg>
          <div className="cardinfo__indicator-box">
            <div className="cardinfo__indicator-box-title">Income</div>
            <div className="cardinfo__indicator-box-subtitle">198 ETH</div>
          </div>
        </div>
        <div className="cardinfo__indicator">
          <svg
            width="50"
            height="48"
            viewBox="0 0 50 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25.5"
              cy="24"
              r="24"
              transform="rotate(-180 25.5 24)"
              fill="#FF0000"
            />
            <path
              d="M26.5 32L26.5 19.83L32.09 25.42L33.5 24L25.5 16L17.5 24L18.91 25.41L24.5 19.83L24.5 32L26.5 32Z"
              fill="white"
            />
          </svg>
          <div className="cardinfo__indicator-box">
            <div className="cardinfo__indicator-box-title">Spending</div>
            <div className="cardinfo__indicator-box-subtitle">322 ETH</div>
          </div>
        </div>
      </div>
      <div className="cardinfo__qraph">
        <div className="cardinfo__table">
          <div className="cardinfo__table-item">700</div>
          <div className="cardinfo__table-item">600</div>
          <div className="cardinfo__table-item">500</div>
          <div className="cardinfo__table-item">400</div>
          <div className="cardinfo__table-item">300</div>
          <div className="cardinfo__table-item">200</div>
          <div className="cardinfo__table-item">100</div>
          <div className="cardinfo__table-item">0</div>
        </div>
        <div
          className={
            animation
              ? "cardinfo__qraph-income cardinfo__qraph-col cardinfo__qraph-income--active"
              : "cardinfo__qraph-income cardinfo__qraph-col"
          }
        >
          <div className="cardinfo__qraph-title">Income</div>
        </div>
        <div
          className={
            animation
              ? "cardinfo__qraph-spending cardinfo__qraph-col cardinfo__qraph-spending--active"
              : "cardinfo__qraph-spending cardinfo__qraph-col"
          }
        >
          <div className="cardinfo__qraph-title">Spending</div>
        </div>
      </div>
    </div>
  );
};
