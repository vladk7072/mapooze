import { FC } from "react";
import { LandsPanelType } from "../../types/LandsPanelTypes";

export const LandsPanel:FC<LandsPanelType> = ({ isOpenAside }) => {
  return (
    <div
      className={isOpenAside ? "landspanel landspanel--active" : "landspanel"}
    >
      <div className="landspanel__item">
        <span className="landspanel__span landspanel__span--free"></span>
        <div className="landspanel__item-title">Free Lands</div>
      </div>
      <div className="landspanel__item">
        <span className="landspanel__span landspanel__span--auction"></span>
        <div className="landspanel__item-title">Lands for Auction</div>
      </div>
      <div className="landspanel__item">
        <span className="landspanel__span landspanel__span--rent"></span>
        <div className="landspanel__item-title">Lands for Rent</div>
      </div>
      <div className="landspanel__item">
        <span className="landspanel__span landspanel__span--exchange"></span>
        <div className="landspanel__item-title">Lands for Exchange</div>
      </div>
    </div>
  );
};
