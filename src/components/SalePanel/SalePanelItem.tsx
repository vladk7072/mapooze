import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { SalePanelItemType } from "../../types/SalePanelTypes";

export const SalePanelItem: FC<SalePanelItemType> = ({ item, count }) => {
  return (
    <div className="salepanel__item">
      <div className="salepanel__box">
        <div className="salepanel__item-count">{count + 1}</div>
      </div>
      <div className="salepanel__box">
        <NavLink
          className="salepanel__item-title salepanel__item-title--land"
          to="place"
        >
          {item.land}
        </NavLink>
      </div>
      <div className="salepanel__box">
        {item.landOwnerName && (
          <div className="salepanel__item-box">
            <div className="salepanel__item-box-logo">
              <img src={item.landOwnerLogo} alt="" />
            </div>
            <div className="salepanel__item-textbox">
              <div className="salepanel__item-title">{item.landOwnerName}</div>
            </div>
          </div>
        )}
      </div>
      <div className="salepanel__box">
        <div className="salepanel__item-box">
          {item.status === "Free" && (
            <span className="salepanel__item-box--span free"></span>
          )}
          {item.status === "In Rent" && (
            <span className="salepanel__item-box--span inrent"></span>
          )}
          {item.status === "Submitted for Auction" && (
            <span className="salepanel__item-box--span auction"></span>
          )}
          {item.status === "For Rent" && (
            <span className="salepanel__item-box--span forrent"></span>
          )}
          {item.status === "Submitted for Exchange" && (
            <span className="salepanel__item-box--span exchange"></span>
          )}
          <div className="salepanel__item-title">{item.status}</div>
        </div>
      </div>
      <div className="salepanel__box">
        <div className="salepanel__item-price">
          {item.price} ETH{" "}
          <span
            className={
              item.change.includes("+")
                ? "salepanel__item-price--up"
                : "salepanel__item-price--down"
            }
          >
            {item.change}%
          </span>
        </div>
      </div>
      <div className="salepanel__box">
        <div className="salepanel__item-favorite">
          {item.favorite ? (
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00004 13.0001L6.03337 12.1334C4.91115 11.1223 3.98337 10.2501 3.25004 9.51672C2.51671 8.78339 1.93337 8.12495 1.50004 7.54139C1.06671 6.95828 0.764041 6.42228 0.592041 5.93339C0.419596 5.4445 0.333374 4.9445 0.333374 4.43339C0.333374 3.38895 0.683374 2.51672 1.38337 1.81672C2.08337 1.11672 2.9556 0.766724 4.00004 0.766724C4.57782 0.766724 5.12782 0.888946 5.65004 1.13339C6.17226 1.37783 6.62226 1.72228 7.00004 2.16672C7.37782 1.72228 7.82782 1.37783 8.35004 1.13339C8.87226 0.888946 9.42226 0.766724 10 0.766724C11.0445 0.766724 11.9167 1.11672 12.6167 1.81672C13.3167 2.51672 13.6667 3.38895 13.6667 4.43339C13.6667 4.9445 13.5807 5.4445 13.4087 5.93339C13.2363 6.42228 12.9334 6.95828 12.5 7.54139C12.0667 8.12495 11.4834 8.78339 10.75 9.51672C10.0167 10.2501 9.08893 11.1223 7.96671 12.1334L7.00004 13.0001Z"
                fill="#29ABE2"
              />
            </svg>
          ) : (
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="salepanel__item-favorite--svg"
            >
              <path
                d="M7.50016 13L6.5335 12.1333C5.41127 11.1222 4.4835 10.25 3.75016 9.51666C3.01683 8.78333 2.4335 8.12489 2.00016 7.54133C1.56683 6.95822 1.26416 6.42222 1.09216 5.93333C0.919718 5.44444 0.833496 4.94444 0.833496 4.43333C0.833496 3.38888 1.1835 2.51666 1.8835 1.81666C2.5835 1.11666 3.45572 0.766663 4.50016 0.766663C5.07794 0.766663 5.62794 0.888885 6.15016 1.13333C6.67238 1.37777 7.12238 1.72222 7.50016 2.16666C7.87794 1.72222 8.32794 1.37777 8.85016 1.13333C9.37238 0.888885 9.92238 0.766663 10.5002 0.766663C11.5446 0.766663 12.4168 1.11666 13.1168 1.81666C13.8168 2.51666 14.1668 3.38888 14.1668 4.43333C14.1668 4.94444 14.0808 5.44444 13.9088 5.93333C13.7364 6.42222 13.4335 6.95822 13.0002 7.54133C12.5668 8.12489 11.9835 8.78333 11.2502 9.51666C10.5168 10.25 9.58905 11.1222 8.46683 12.1333L7.50016 13ZM7.50016 11.2C8.56683 10.2444 9.44461 9.42488 10.1335 8.74133C10.8224 8.05822 11.3668 7.464 11.7668 6.95866C12.1668 6.45289 12.4446 6.00266 12.6002 5.608C12.7557 5.21377 12.8335 4.82222 12.8335 4.43333C12.8335 3.76666 12.6113 3.21111 12.1668 2.76666C11.7224 2.32222 11.1668 2.1 10.5002 2.1C9.97794 2.1 9.49461 2.24711 9.05016 2.54133C8.60572 2.836 8.30016 3.21111 8.1335 3.66666H6.86683C6.70016 3.21111 6.39461 2.836 5.95016 2.54133C5.50572 2.24711 5.02238 2.1 4.50016 2.1C3.8335 2.1 3.27794 2.32222 2.8335 2.76666C2.38905 3.21111 2.16683 3.76666 2.16683 4.43333C2.16683 4.82222 2.24461 5.21377 2.40016 5.608C2.55572 6.00266 2.8335 6.45289 3.2335 6.95866C3.6335 7.464 4.17794 8.05822 4.86683 8.74133C5.55572 9.42488 6.4335 10.2444 7.50016 11.2Z"
                fill="#8A97AA"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
