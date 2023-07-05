import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

export const FullItem: FC<any> = ({num}) => {
  return (
    <div className="salepanel__item fullitem__item">
      <div className="salepanel__box fullitem__box-bor">
        <div className="salepanel__item-count">{num}</div>
      </div>
      <div className="salepanel__box fullitem__box-bor">
        <NavLink
          className="salepanel__item-title salepanel__item-title--land"
          to="place"
        >
          Thailand, Bangkok
        </NavLink>
      </div>
      <div className="salepanel__box fullitem__box-bor">
        <div className="salepanel__item-price">224 ETH
        <span>
          +2.3%
        </span>
        </div>
      </div>
      <div className="salepanel__box fullitem__box-bor salepanel__box-df">
        <div className="salepanel__box-select">
          <span>Finland, Porvoo</span>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3003 14.3L8.70026 11.7C8.38359 11.3833 8.31292 11.021 8.48826 10.613C8.66359 10.205 8.97592 10.0007 9.42526 10H14.5753C15.0253 10 15.3379 10.2043 15.5133 10.613C15.6886 11.0217 15.6176 11.384 15.3003 11.7L12.7003 14.3C12.6003 14.4 12.4919 14.475 12.3753 14.525C12.2586 14.575 12.1336 14.6 12.0003 14.6C11.8669 14.6 11.7419 14.575 11.6253 14.525C11.5086 14.475 11.4003 14.4 11.3003 14.3Z"
            fill="#29ABE2"
          />
        </svg>
      </div>
      <div className="salepanel__box fullitem__box-bor">
        <div className="salepanel__box-extra">10</div>
      </div>
      <div className="salepanel__box fullitem__box-bor">
        <div className="salepanel__box-btn">Exchange</div>
      </div>
    </div>
  );
};
