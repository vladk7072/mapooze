import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

export const FullItem: FC<any> = ({ num }) => {
  return (
    <div className="salepanel__item fullitem__item rent">
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
        <div className="salepanel__item-price">
          224 ETH
          <span>+2.3%</span>
        </div>
      </div>
      <div className="salepanel__box fullitem__box-bor salepanel__box-df">
        <div className="salepanel__item-title nohover">2%</div>
      </div>
      <div className="salepanel__box fullitem__box-bor">
        <div className="salepanel__item-title nohover">05/01/23 - 05/30/23</div>
      </div>
      <div className="salepanel__box fullitem__box-bor">
        <div className="salepanel__item-price">500</div>
      </div>
      <div className="salepanel__box fullitem__box-bor">
        <div className="salepanel__box-btn">Exchange</div>
      </div>
    </div>
  );
};
