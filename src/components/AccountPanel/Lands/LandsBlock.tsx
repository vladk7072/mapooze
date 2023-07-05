import { FC, useState, useEffect, useRef } from "react";
import img1 from "../../../assets/images/account/lands1.jpg";
import logo1 from "../../../assets/images/account/logo.jpg";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const LandsBlock: FC = () => {
  const navigate = useNavigate();
  const handlerNavigate = (link: string) => {
    navigate(link);
  };
  const [isLike, setIsLike] = useState(false);

  const [isVisibleSkeleton, setIsVisibleSkeleton] = useState({
    main: true,
    photo: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleSkeleton((prev) => ({ ...prev, main: false }));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28065 11.8199C2.79398 10.8466 1.83398 9.3799 1.83398 8.09323C1.83398 5.90656 4.59398 3.22656 8.00065 3.22656C9.39398 3.22656 10.6873 3.67323 11.7273 4.36656"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.2347 5.74023C13.8287 6.49357 14.1747 7.3269 14.1747 8.09357C14.1747 10.2802 11.408 12.9602 8.00138 12.9602C7.39471 12.9602 6.80205 12.8736 6.24805 12.7202"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.51121 9.57812C6.11454 9.18545 5.89254 8.65012 5.89454 8.09212C5.89188 6.92878 6.83321 5.98345 7.99721 5.98145C8.55721 5.98012 9.09454 6.20212 9.49054 6.59812"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.53957 6.64845C9.93624 7.04111 10.1582 7.57644 10.1562 8.13444C10.1589 9.29778 9.21757 10.2431 8.05357 10.2451C7.49357 10.2464 6.95624 10.0244 6.56024 9.62844"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              3.048
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
          style={{ marginBottom: 24 }}
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
        <div className="lands__items-item-bidtime">
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
              variant="rectangular"
              width={100}
              height={20}
            />
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1132_26839)">
                  <path
                    d="M15.5742 13.6002L10.5371 8.53512C10.7866 8.01231 10.6955 7.36618 10.2632 6.93378C10.1503 6.82079 10.0189 6.72797 9.87468 6.65934L10.4926 6.04146C10.9826 6.2205 11.5645 6.12078 11.9705 5.71475C12.5201 5.16515 12.5202 4.27559 11.9705 3.7259L8.6558 0.411246C8.10749 -0.137098 7.21527 -0.137066 6.66696 0.411246C6.19486 0.883277 6.13521 1.59506 6.45286 2.12587L2.14018 6.43856C1.60043 6.11706 0.89002 6.18818 0.425926 6.65228C-0.123699 7.20187 -0.123793 8.09146 0.425926 8.64112L3.74061 11.9558C4.29021 12.5054 5.1798 12.5055 5.72946 11.9558H5.72949C6.12821 11.5571 6.23664 10.9766 6.05543 10.4786L6.67399 9.86C6.74264 10.0042 6.83546 10.1356 6.94843 10.2485C7.3773 10.6774 8.02083 10.7739 8.54774 10.5234L13.5845 15.5881C14.1328 16.1364 15.025 16.1364 15.5733 15.5881C16.1284 15.033 16.1169 14.1429 15.5742 13.6002ZM7.32989 1.07418C7.51268 0.891434 7.81008 0.891402 7.99286 1.07418L11.3075 4.3889C11.4907 4.57212 11.4907 4.86865 11.3075 5.05184C11.1243 5.23503 10.8278 5.23506 10.6446 5.05184L7.32989 1.73715C7.14711 1.55434 7.14711 1.25696 7.32989 1.07418ZM5.06646 11.2929C4.8833 11.4761 4.58674 11.4761 4.40352 11.2929L1.08883 7.97818C0.905613 7.79496 0.905613 7.49847 1.08883 7.31525C1.27164 7.13246 1.56899 7.1325 1.7518 7.31525L5.06646 10.6299C5.24927 10.8127 5.24927 11.1101 5.06646 11.2929ZM5.4853 9.72287L2.83352 7.07109L7.08577 2.81887L9.73752 5.47065L5.4853 9.72287ZM8.27527 9.58465L8.27436 9.58556C8.09155 9.76834 7.79421 9.76831 7.61139 9.58556C7.42824 9.4024 7.42814 9.106 7.6113 8.92272L8.93727 7.59675C9.12014 7.41387 9.41758 7.41409 9.60021 7.59675C9.78299 7.77953 9.78299 8.07693 9.60024 8.25968L8.27527 9.58465ZM9.26783 9.91796L9.9308 9.255L13.2576 12.6003L12.5947 13.2632L9.26783 9.91796ZM14.9104 14.9252C14.7276 15.1079 14.4302 15.1079 14.2483 14.9261L13.2558 13.928L13.9187 13.2651L14.9104 14.2622C15.0936 14.4454 15.0936 14.7419 14.9104 14.9252Z"
                    fill="white"
                  />
                  <path
                    d="M9.85981 15.0626H9.34387C9.12613 13.994 8.17909 13.1875 7.04719 13.1875H3.29703C2.16513 13.1875 1.21812 13.994 1.00034 15.0626H0.484406C0.225531 15.0626 0.015625 15.2724 0.015625 15.5313C0.015625 15.7902 0.2255 16.0001 0.484406 16.0001H9.85978C10.1187 16.0001 10.3286 15.7902 10.3286 15.5313C10.3286 15.2724 10.1187 15.0626 9.85981 15.0626ZM1.97103 15.0626C2.1645 14.5169 2.68584 14.125 3.29703 14.125H7.04719C7.65837 14.125 8.17969 14.5169 8.37319 15.0626H1.97103Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1132_26839">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              03/03/23
            </>
          )}
        </div>
      </div>
      <div className="lands__items-item-price">
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
  );
};
