import { FC } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import metamaskImg from "../../../../assets/images/cardinfo/metamask.png";


export const CardInfoTop: FC = () => {
  return (
    <div className="cardinfo__top">
      <Link className="cardinfo__edit" to="../wallet/edit/1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 13.5C16.4333 13.5 16.7917 13.3583 17.075 13.075C17.3583 12.7917 17.5 12.4333 17.5 12C17.5 11.5667 17.3583 11.2083 17.075 10.925C16.7917 10.6417 16.4333 10.5 16 10.5C15.5667 10.5 15.2083 10.6417 14.925 10.925C14.6417 11.2083 14.5 11.5667 14.5 12C14.5 12.4333 14.6417 12.7917 14.925 13.075C15.2083 13.3583 15.5667 13.5 16 13.5ZM5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V7.5H19V5H5V19H19V16.5H21V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM13 17C12.45 17 11.979 16.804 11.587 16.412C11.195 16.02 10.9993 15.5493 11 15V9C11 8.45 11.196 7.979 11.588 7.587C11.98 7.195 12.4507 6.99934 13 7H20C20.55 7 21.021 7.196 21.413 7.588C21.805 7.98 22.0007 8.45067 22 9V15C22 15.55 21.804 16.021 21.412 16.413C21.02 16.805 20.5493 17.0007 20 17H13ZM20 15V9H13V15H20Z"
            fill="white"
          />
        </svg>
        <div className="cardinfo__edit-title">Edit wallet</div>
      </Link>
      <div className="cardinfo__current">
        <img src={metamaskImg} alt="" />
        <div className="cardinfo__current-box">
          <div className="cardinfo__current-code">********4BGhYv2bFBaiK</div>
          <div className="cardinfo__current-balance">10,1002 ETH</div>
        </div>
      </div>
    </div>
  );
};
