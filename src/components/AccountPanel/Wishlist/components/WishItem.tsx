import React, { FC } from "react";
import { NavLink } from "react-router-dom";

export const WishItem: FC<any> = ({ item, count }) => {
  return (
    <div className="salepanel__item wishlist__item">
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
      <div className="salepanel__box wishlist__price">
        {item.progress ? (
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_655_15297)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.49931 17.6668C8.76453 17.6668 9.01888 17.5615 9.20642 17.3739C9.39395 17.1864 9.49931 16.932 9.49931 16.6668V5.08083L13.7913 9.37483C13.8843 9.4678 13.9947 9.54156 14.1161 9.59187C14.2376 9.64219 14.3678 9.66809 14.4993 9.66809C14.6308 9.66809 14.761 9.64219 14.8825 9.59187C15.004 9.54156 15.1143 9.4678 15.2073 9.37483C15.3003 9.28185 15.374 9.17147 15.4244 9.04999C15.4747 8.92851 15.5006 8.79831 15.5006 8.66683C15.5006 8.53534 15.4747 8.40514 15.4244 8.28366C15.374 8.16218 15.3003 8.0518 15.2073 7.95883L9.20731 1.95883C9.11442 1.8657 9.00407 1.79181 8.88258 1.7414C8.76109 1.69099 8.63085 1.66504 8.49931 1.66504C8.36778 1.66504 8.23753 1.69099 8.11604 1.7414C7.99455 1.79181 7.8842 1.8657 7.79131 1.95883L1.79131 7.95883C1.60354 8.1466 1.49805 8.40128 1.49805 8.66683C1.49805 8.93238 1.60354 9.18705 1.79131 9.37483C1.97908 9.5626 2.23376 9.66809 2.49931 9.66809C2.76486 9.66809 3.01954 9.5626 3.20731 9.37483L7.49931 5.08083V16.6668C7.49931 16.932 7.60467 17.1864 7.7922 17.3739C7.97974 17.5615 8.23409 17.6668 8.49931 17.6668Z"
                fill="#12B677"
              />
            </g>
            <defs>
              <clipPath id="clip0_655_15297">
                <rect
                  width="16"
                  height="17.3333"
                  fill="white"
                  transform="translate(0.5 0.333008)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_655_15329)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00069 0.333174C7.73547 0.333174 7.48112 0.43853 7.29358 0.626066C7.10605 0.813602 7.00069 1.06796 7.00069 1.33317V12.9192L2.70869 8.62517C2.61571 8.5322 2.50534 8.45844 2.38386 8.40813C2.26238 8.35781 2.13218 8.33191 2.00069 8.33191C1.8692 8.33191 1.739 8.35781 1.61752 8.40813C1.49604 8.45844 1.38566 8.5322 1.29269 8.62517C1.19971 8.71815 1.12596 8.82853 1.07564 8.95001C1.02532 9.07149 0.999427 9.20169 0.999427 9.33317C0.999427 9.46466 1.02532 9.59486 1.07564 9.71634C1.12596 9.83782 1.19971 9.9482 1.29269 10.0412L7.29269 16.0412C7.38558 16.1343 7.49593 16.2082 7.61742 16.2586C7.73891 16.309 7.86915 16.335 8.00069 16.335C8.13222 16.335 8.26247 16.309 8.38396 16.2586C8.50545 16.2082 8.6158 16.1343 8.70869 16.0412L14.7087 10.0412C14.8965 9.8534 15.002 9.59872 15.002 9.33317C15.002 9.06762 14.8965 8.81295 14.7087 8.62517C14.5209 8.4374 14.2662 8.33191 14.0007 8.33191C13.7351 8.33191 13.4805 8.4374 13.2927 8.62517L9.00069 12.9192V1.33317C9.00069 1.06796 8.89533 0.813602 8.7078 0.626066C8.52026 0.43853 8.26591 0.333174 8.00069 0.333174Z"
                fill="#FF0000"
              />
            </g>
            <defs>
              <clipPath id="clip0_655_15329">
                <rect
                  width="16"
                  height="17.3333"
                  fill="white"
                  transform="matrix(-1 0 0 -1 16 17.667)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
        <div className="salepanel__item-price">{item.price} ETH</div>
      </div>
    </div>
  );
};
