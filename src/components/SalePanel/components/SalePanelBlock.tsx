import { FC, useState, useEffect, useRef } from "react";
import img1 from "../../../assets/images/account/lands3.jpg";
import logo1 from "../../../assets/images/account/logo.jpg";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import cn from "clsx";

interface IProps {
  isVisibleSkeleton: { main: boolean; photo: boolean };
  status: "free" | "inrent" | "forrent" | "exchange" | "auction";
}

export const SalePanelBlock: FC<IProps> = ({ status, isVisibleSkeleton }) => {
  const navigate = useNavigate();
  const handlerNavigate = (link: string) => {
    navigate(link);
  };
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="lands__items-item">
      <div className="lands__items-item-top">
        <div className="lands__items-item-views">
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
              variant="rectangular"
              width={100}
              height={20}
            />
          ) : (
            <>
              <span
                className={cn("salepanel__item-box--span", {
                  free: status === "free",
                  inrent: status === "inrent",
                  forrent: status === "forrent",
                  exchange: status === "exchange",
                  auction: status === "auction",
                })}
              ></span>
              {status === "free" && "Free"}
              {status === "inrent" && "In Rent"}
              {status === "forrent" && "For Rent"}
              {status === "exchange" && "Submitted for Exchange"}
              {status === "auction" && "Auction"}
            </>
          )}
        </div>
        {!isVisibleSkeleton.main && (
          <div
            className="lands__items-item-like"
            onClick={() => setIsLike(!isLike)}
          >
            {isLike ? (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 28.4667L14.0667 26.7067C7.20008 20.48 2.66675 16.36 2.66675 11.3333C2.66675 7.21333 5.89341 4 10.0001 4C12.3201 4 14.5467 5.08 16.0001 6.77333C17.4534 5.08 19.6801 4 22.0001 4C26.1067 4 29.3334 7.21333 29.3334 11.3333C29.3334 16.36 24.8001 20.48 17.9334 26.7067L16.0001 28.4667Z"
                  fill="#29ABE2"
                />
              </svg>
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1327 24.7333L15.9993 24.8667L15.8527 24.7333C9.51935 18.9867 5.33268 15.1867 5.33268 11.3333C5.33268 8.66667 7.33268 6.66667 9.99935 6.66667C12.0527 6.66667 14.0527 8 14.7593 9.81333H17.2393C17.946 8 19.946 6.66667 21.9993 6.66667C24.666 6.66667 26.666 8.66667 26.666 11.3333C26.666 15.1867 22.4793 18.9867 16.1327 24.7333ZM21.9993 4C19.6793 4 17.4527 5.08 15.9993 6.77333C14.546 5.08 12.3193 4 9.99935 4C5.89268 4 2.66602 7.21333 2.66602 11.3333C2.66602 16.36 7.19935 20.48 14.066 26.7067L15.9993 28.4667L17.9327 26.7067C24.7993 20.48 29.3327 16.36 29.3327 11.3333C29.3327 7.21333 26.106 4 21.9993 4Z"
                  fill="#29ABE2"
                />
              </svg>
            )}
          </div>
        )}
      </div>
      {isVisibleSkeleton.main ? (
        <Skeleton
          sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "10px" }}
          variant="rectangular"
          style={{ marginTop: 8, marginBottom: 8 }}
          width="100%"
          height={204}
        />
      ) : (
        <div
          className="lands__items-item-image"
          style={
            isVisibleSkeleton.photo
              ? {
                  backgroundColor: "rgba(41, 171, 226, 0.3)",
                }
              : {}
          }
          onClick={() => handlerNavigate("1")}
        >
          <img
            className="lands__items-item-img"
            src={img1}
            onLoad={() =>
              setIsVisibleSkeleton((prev) => ({ ...prev, photo: false }))
            }
            alt=""
          />
        </div>
      )}
      <div className="lands__items-item-title">
        {isVisibleSkeleton.main ? (
          <Skeleton
            sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
            variant="rectangular"
            width={140}
            height={19}
          />
        ) : (
          "Germany, Berlin"
        )}
      </div>
      <div className="lands__items-item-box">
        <div className="lands__items-item-user">
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "50px" }}
              variant="circular"
              width={35}
              height={35}
            />
          ) : (
            <div className="lands__items-item-user-image">
              <img src={logo1} alt="" />
            </div>
          )}
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
              variant="rectangular"
              width={140}
              height={20}
            />
          ) : (
            <div className="lands__items-item-user-name">Elizabeth Taylor</div>
          )}
        </div>
        <div className="lands__items-item-price" style={{ marginTop: 0 }}>
          <div className="lands__items-item-price-title">Price:</div>
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
              variant="rectangular"
              width={100}
              height={19}
            />
          ) : (
            <>
              <div className="lands__items-item-price-num">478 ETH</div>
              <div className="lands__items-item-price-proc">-0,7%</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
