import { FC, useState } from "react";
//@ts-ignore
import logo2 from "../../../assets/images/account/bids/logo2.jpg";
import { isVisibleSkeleton } from "../Auction/Auction";
import { Skeleton } from "@mui/material";

interface IProps {
  isVisibleSkeleton: isVisibleSkeleton;
}

export const BidHistory: FC<IProps> = ({ isVisibleSkeleton }) => {
  return (
    <div className="auction__bid">
      <div className="auction__bid-title">Bid History</div>
      <ul className="auction__bid-list">
        <div className="auction__bid-list-top">
          <div
            className="auction__bid-list-top-title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            #
          </div>
          <div className="auction__bid-list-top-title">Bidder</div>
          <div className="auction__bid-list-top-title">Date</div>
          <div className="auction__bid-list-top-title">Time</div>
          <div className="auction__bid-list-top-title">
            Unit Price
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1693 8.00065L8.5026 12.6673L3.83594 8.00065"
                fill="white"
              />
              <path
                d="M8.5026 3.33398V12.6673M8.5026 12.6673L13.1693 8.00065M8.5026 12.6673L3.83594 8.00065"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {[...Array(isVisibleSkeleton.main ? 3 : 10)].map((_, idx) => (
          <li className="auction__bid-item" key={idx}>
            <div
              className="auction__bid-item-col auction__bid-item-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {idx + 1}
            </div>
            <div className="auction__bid-item-col auction__bid-person">
              {isVisibleSkeleton.main ? (
                <Skeleton
                  sx={{
                    bgcolor: "rgba(41, 171, 226, 0.5)",
                  }}
                  variant="circular"
                  width={35}
                  height={35}
                />
              ) : (
                <div className="auction__bid-person-image">
                  <img className="auction__bid-person-img" src={logo2} alt="" />
                </div>
              )}
              {isVisibleSkeleton.main ? (
                <Skeleton
                  sx={{
                    bgcolor: "rgba(41, 171, 226, 0.5)",
                    borderRadius: "5px",
                  }}
                  variant="rectangular"
                  width={105}
                  height={20}
                />
              ) : (
                <div className="auction__bid-person-name">Elizabeth Taylor</div>
              )}
            </div>
            <div className="auction__bid-item-col auction__bid-item-title">
              {isVisibleSkeleton.main ? (
                <Skeleton
                  sx={{
                    bgcolor: "rgba(41, 171, 226, 0.5)",
                    borderRadius: "5px",
                  }}
                  variant="rectangular"
                  width={105}
                  height={20}
                />
              ) : (
                <>05 / 25 / 23</>
              )}
            </div>
            <div className="auction__bid-item-col auction__bid-item-title">
              {isVisibleSkeleton.main ? (
                <Skeleton
                  sx={{
                    bgcolor: "rgba(41, 171, 226, 0.5)",
                    borderRadius: "5px",
                  }}
                  variant="rectangular"
                  width={105}
                  height={20}
                />
              ) : (
                <>02:45:25 PM</>
              )}
            </div>
            <div className="auction__bid-item-col auction__bid-item-title">
              {isVisibleSkeleton.main ? (
                <Skeleton
                  sx={{
                    bgcolor: "rgba(41, 171, 226, 0.5)",
                    borderRadius: "5px",
                  }}
                  variant="rectangular"
                  width={105}
                  height={20}
                />
              ) : (
                <>2.350 ETH</>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
