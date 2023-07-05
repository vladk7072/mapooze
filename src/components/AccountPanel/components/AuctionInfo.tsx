import { FC, SetStateAction } from "react";
import { useTimer } from "react-timer-hook";
import { Skeleton } from "@mui/material";
import { isVisibleSkeleton } from "../Auction/Auction";

interface IProps {
  isVisibleSkeleton: isVisibleSkeleton;
}

export const AuctionInfo: FC<IProps> = ({ isVisibleSkeleton }) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 4000);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
  });

  return (
    <div className="auction__info">
      <div className="saleplace saleplace__general saleplace__general--pt28 saleplace__general-trials">
        <div className="form-item">
          <input
            name=""
            id="StartBid"
            type="number"
            defaultValue="10"
            className="form-item__input"
            placeholder="Start Bid"
          />
          <label htmlFor="StartBid">Start Bid</label>
          <svg
            className="saleplace__svg"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_363_19408)">
              <path
                d="M7.63456 18.297L0.986695 15.045L7.62853 24L8.62636 22.6545V17.8103L7.63456 18.297ZM7.62853 0L0 13.7144H15.2572L7.62853 0Z"
                fill="#29ABE2"
              />
              <path
                d="M15.2571 13.7347L7.62842 0V13.7347H15.2571Z"
                fill="#2493C2"
              />
              <path
                d="M7.6992 10.8395L7.66926 10.8252L4.53456 12.7741L0.989258 15.0441L7.67599 18.3252L7.70594 18.3109L8.69703 17.825V11.3291L7.6992 10.8395Z"
                fill="#1E789E"
              />
              <path
                d="M11.6589 13.4512L7.69913 10.8395L7.66919 10.8252L7.67593 18.3252L7.70587 18.3109L14.238 15.0795L11.6589 13.4512Z"
                fill="#1E789E"
              />
              <path
                d="M7.62856 9.98988L7.59862 9.97559L0.000732422 13.7256H0.00751625L7.60535 17.4756L7.63529 17.4613L8.62639 16.9754V10.4795L7.62856 9.98988Z"
                fill="#1F7EA6"
              />
              <path
                d="M7.6345 18.2971L7.62842 24.0001L14.275 15.0391L7.6345 18.2971Z"
                fill="#2493C2"
              />
              <path
                d="M15.243 13.7256L7.62858 9.98988L7.59863 9.97559L7.60537 17.4756L7.63531 17.4613L15.2498 13.7256H15.243Z"
                fill="#1D7296"
              />
            </g>
            <defs>
              <clipPath id="clip0_363_19408">
                <rect width="15.2627" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="form-item">
          <input
            name=""
            id="CurrentBid"
            type="number"
            defaultValue="15"
            className="form-item__input"
            placeholder="Current Bid"
          />
          <label htmlFor="CurrentBid">Current Bid</label>
          <svg
            className="saleplace__svg"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_363_19408)">
              <path
                d="M7.63456 18.297L0.986695 15.045L7.62853 24L8.62636 22.6545V17.8103L7.63456 18.297ZM7.62853 0L0 13.7144H15.2572L7.62853 0Z"
                fill="#29ABE2"
              />
              <path
                d="M15.2571 13.7347L7.62842 0V13.7347H15.2571Z"
                fill="#2493C2"
              />
              <path
                d="M7.6992 10.8395L7.66926 10.8252L4.53456 12.7741L0.989258 15.0441L7.67599 18.3252L7.70594 18.3109L8.69703 17.825V11.3291L7.6992 10.8395Z"
                fill="#1E789E"
              />
              <path
                d="M11.6589 13.4512L7.69913 10.8395L7.66919 10.8252L7.67593 18.3252L7.70587 18.3109L14.238 15.0795L11.6589 13.4512Z"
                fill="#1E789E"
              />
              <path
                d="M7.62856 9.98988L7.59862 9.97559L0.000732422 13.7256H0.00751625L7.60535 17.4756L7.63529 17.4613L8.62639 16.9754V10.4795L7.62856 9.98988Z"
                fill="#1F7EA6"
              />
              <path
                d="M7.6345 18.2971L7.62842 24.0001L14.275 15.0391L7.6345 18.2971Z"
                fill="#2493C2"
              />
              <path
                d="M15.243 13.7256L7.62858 9.98988L7.59863 9.97559L7.60537 17.4756L7.63531 17.4613L15.2498 13.7256H15.243Z"
                fill="#1D7296"
              />
            </g>
            <defs>
              <clipPath id="clip0_363_19408">
                <rect width="15.2627" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="form-item">
          <input
            name=""
            id="YourBid"
            type="number"
            className="form-item__input"
            placeholder="Your Bid"
          />
          <label htmlFor="YourBid">Your Bid</label>
          <svg
            className="saleplace__svg"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_363_19408)">
              <path
                d="M7.63456 18.297L0.986695 15.045L7.62853 24L8.62636 22.6545V17.8103L7.63456 18.297ZM7.62853 0L0 13.7144H15.2572L7.62853 0Z"
                fill="#29ABE2"
              />
              <path
                d="M15.2571 13.7347L7.62842 0V13.7347H15.2571Z"
                fill="#2493C2"
              />
              <path
                d="M7.6992 10.8395L7.66926 10.8252L4.53456 12.7741L0.989258 15.0441L7.67599 18.3252L7.70594 18.3109L8.69703 17.825V11.3291L7.6992 10.8395Z"
                fill="#1E789E"
              />
              <path
                d="M11.6589 13.4512L7.69913 10.8395L7.66919 10.8252L7.67593 18.3252L7.70587 18.3109L14.238 15.0795L11.6589 13.4512Z"
                fill="#1E789E"
              />
              <path
                d="M7.62856 9.98988L7.59862 9.97559L0.000732422 13.7256H0.00751625L7.60535 17.4756L7.63529 17.4613L8.62639 16.9754V10.4795L7.62856 9.98988Z"
                fill="#1F7EA6"
              />
              <path
                d="M7.6345 18.2971L7.62842 24.0001L14.275 15.0391L7.6345 18.2971Z"
                fill="#2493C2"
              />
              <path
                d="M15.243 13.7256L7.62858 9.98988L7.59863 9.97559L7.60537 17.4756L7.63531 17.4613L15.2498 13.7256H15.243Z"
                fill="#1D7296"
              />
            </g>
            <defs>
              <clipPath id="clip0_363_19408">
                <rect width="15.2627" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <a className="saleplace__general-trial-btn" href="#">
          Submit a Bid
        </a>
        <div className="auction__info-bottom">
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{
                bgcolor: "rgba(41, 171, 226, 0.5)",
                borderRadius: "5px",
              }}
              variant="rectangular"
              width={165}
              height={21}
            />
          ) : (
            <div className="auction__info-timer">
              {hours.toString().length === 1 ? "0" + hours : hours}h :{" "}
              {minutes.toString().length === 1 ? "0" + minutes : minutes}
              min : {seconds.toString().length === 1 ? "0" + seconds : seconds}s
            </div>
          )}
          <span className="decor"></span>
          <div className="auction__info-text">Time is Running Out</div>
        </div>
      </div>
      <div
        className="saleplace__general auction__activities"
        style={{ marginTop: 16 }}
      >
        <div className="auction__item-winnings-active-col">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_960_50014)">
              <mask
                id="mask0_960_50014"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="25"
                height="24"
              >
                <path
                  d="M0.5 7.05719e-05H24.4999V24H0.5V7.05719e-05Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_960_50014)">
                <path
                  d="M22.4609 22.5938H20.6368V18.9674C20.6368 18.5791 20.322 18.2643 19.9337 18.2643C19.5454 18.2643 19.2305 18.5791 19.2305 18.9674V22.5938H16.3222L17.0694 18.3784C17.1019 18.1953 17.0605 18.0068 16.9543 17.8542L15.9434 16.4009C16.1769 16.2182 16.3609 15.98 16.4789 15.708H20.1339L22.2068 17.8846C22.3704 18.0561 22.4615 18.2842 22.4609 18.5213V22.5938ZM14.823 22.5938L14.0829 18.4188L14.8585 17.3038L15.6341 18.4188L14.8941 22.5938H14.823ZM9.74855 16.7369H5.69233C4.78324 16.7369 4.04369 15.9923 4.04369 15.0771V13.1267H5.06107V15.0049C5.06107 15.3932 5.37588 15.708 5.76419 15.708H13.2381C13.3561 15.98 13.5401 16.2182 13.7736 16.4009L12.7627 17.8542C12.6566 18.0069 12.6152 18.1953 12.6476 18.3784L13.3948 22.5938H10.4517V17.4401C10.4517 17.0517 10.1369 16.7369 9.74855 16.7369ZM4.55238 10.5705C4.83288 10.5705 5.06107 10.8013 5.06107 11.085V11.7204H4.04369V11.085C4.04369 10.8013 4.27188 10.5705 4.55238 10.5705ZM14.8585 13.8642C14.9796 13.8642 15.0995 13.8589 15.2179 13.8485V15.0049C15.2179 15.2059 15.0567 15.3694 14.8585 15.3694C14.6603 15.3694 14.4991 15.2059 14.4991 15.0049V13.8485C14.6186 13.859 14.7385 13.8642 14.8585 13.8642ZM12.1647 9.74798V8.13183H17.3441C17.4141 8.13183 17.4836 8.1293 17.5523 8.12428V9.74798C17.5523 11.2422 16.3439 12.458 14.8585 12.458C13.3731 12.458 12.1647 11.2422 12.1647 9.74798ZM12.1647 5.60307C12.1647 4.72951 12.8754 4.01879 13.749 4.01879H18.7894V5.28034C18.7894 6.07721 18.141 6.72558 17.3441 6.72558H12.1647V5.60307ZM2.53906 5.17135V1.69066C2.53915 1.61527 2.56913 1.543 2.62244 1.48969C2.67574 1.43639 2.74802 1.4064 2.8234 1.40632H6.28131C6.3567 1.4064 6.42897 1.43639 6.48228 1.48969C6.53558 1.543 6.56557 1.61527 6.56566 1.69066V5.17135C6.56557 5.24674 6.53558 5.31901 6.48228 5.37232C6.42897 5.42562 6.3567 5.45561 6.28131 5.45569H2.8234C2.74802 5.45561 2.67574 5.42562 2.62244 5.37232C2.56913 5.31901 2.53915 5.24674 2.53906 5.17135ZM23.2251 16.9147L20.9444 14.52C20.8788 14.451 20.7998 14.3961 20.7122 14.3586C20.6247 14.3211 20.5305 14.3018 20.4353 14.3018H16.6242V13.4626C18.0036 12.7991 18.9586 11.3834 18.9586 9.74798V7.62961C19.7052 7.11488 20.1956 6.25379 20.1956 5.28034V3.31567C20.1956 2.92736 19.8808 2.61255 19.4925 2.61255H13.749C12.1 2.61255 10.7585 3.95411 10.7585 5.60307V9.74798C10.7585 11.3834 11.7134 12.7991 13.0928 13.4626V14.3018H6.46731V11.085C6.46731 10.2748 5.96453 9.58012 5.2555 9.29836V6.86194H6.28131C7.21351 6.86194 7.9719 6.10355 7.9719 5.17135V1.69066C7.9719 0.758459 7.21351 7.05719e-05 6.28131 7.05719e-05H2.8234C1.8912 7.05719e-05 1.13281 0.758459 1.13281 1.69066V5.17135C1.13281 6.10355 1.8912 6.86194 2.8234 6.86194H3.84926V9.29836C3.14018 9.58012 2.63745 10.2748 2.63745 11.085V15.0771C2.63745 16.7677 4.00783 18.1432 5.69233 18.1432H9.04543V23.2969C9.04543 23.6852 9.36024 24 9.74855 24H23.164C23.5523 24 23.8671 23.6852 23.8671 23.2969V18.5213C23.8671 17.92 23.6391 17.3494 23.2251 16.9147Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_960_50014">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="auction__item-winnings-active-box">
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{
                  bgcolor: "rgba(41, 171, 226, 0.5)",
                  borderRadius: "5px",
                }}
                variant="rectangular"
                width="100%"
                height={16}
              />
            ) : (
              <div className="auction__item-winnings-num">158</div>
            )}
            <div className="auction__item-winnings-title">Total Bids</div>
          </div>
        </div>
        <div className="auction__item-winnings-active-col">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.92 17.7298C4.69 16.2698 3.25 14.0698 3.25 12.1398C3.25 8.85984 7.39 4.83984 12.5 4.83984C14.59 4.83984 16.53 5.50984 18.09 6.54984"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.3511 8.61035C21.2421 9.74035 21.7611 10.9904 21.7611 12.1404C21.7611 15.4204 17.6111 19.4404 12.5011 19.4404C11.5911 19.4404 10.7021 19.3104 9.87109 19.0804"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.2649 14.3667C9.66986 13.7777 9.33686 12.9747 9.33986 12.1377C9.33586 10.3927 10.7479 8.97469 12.4939 8.97169C13.3339 8.96969 14.1399 9.30269 14.7339 9.89669"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.8094 9.97218C15.4044 10.5612 15.7374 11.3642 15.7344 12.2012C15.7384 13.9462 14.3264 15.3642 12.5804 15.3672C11.7404 15.3692 10.9344 15.0362 10.3404 14.4422"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="auction__item-winnings-active-box">
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{
                  bgcolor: "rgba(41, 171, 226, 0.5)",
                  borderRadius: "5px",
                }}
                variant="rectangular"
                width="100%"
                height={16}
              />
            ) : (
              <div className="auction__item-winnings-num">158</div>
            )}
            <div className="auction__item-winnings-title">Total Bids</div>
          </div>
        </div>
        <div className="auction__item-winnings-active-col">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1001_27364)">
              <path
                d="M23.3642 20.9003L15.8086 13.3027C16.1829 12.5185 16.0462 11.5493 15.3977 10.9007C15.2284 10.7312 15.0313 10.592 14.8149 10.489L15.7418 9.5622C16.4768 9.83074 17.3496 9.68117 17.9587 9.07212C18.7831 8.24773 18.7833 6.91338 17.9587 6.08885L12.9866 1.11687C12.1642 0.294353 10.8258 0.2944 10.0034 1.11687C9.29522 1.82492 9.20574 2.89259 9.68222 3.68881L3.21319 10.1578C2.40357 9.67559 1.33796 9.78228 0.641818 10.4784C-0.182619 11.3028 -0.18276 12.6372 0.641818 13.4617L5.61385 18.4337C6.43824 19.2582 7.77263 19.2582 8.59712 18.4337H8.59716C9.19524 17.8356 9.3579 16.9648 9.08607 16.2179L10.0139 15.29C10.1169 15.5063 10.2561 15.7034 10.4256 15.8727C11.0689 16.5161 12.0342 16.6609 12.8245 16.2852L20.3797 23.8821C21.2022 24.7047 22.5404 24.7046 23.3629 23.8821C24.1956 23.0494 24.1783 21.7143 23.3642 20.9003ZM10.9978 2.11128C11.2719 1.83715 11.7181 1.8371 11.9922 2.11128L16.9642 7.08335C17.239 7.35818 17.239 7.80298 16.9642 8.07776C16.6894 8.35254 16.2446 8.35259 15.9698 8.07776L10.9978 3.10573C10.7236 2.83151 10.7236 2.38545 10.9978 2.11128ZM7.60262 17.4393C7.32788 17.7141 6.88304 17.7141 6.60821 17.4393L1.63618 12.4673C1.36135 12.1924 1.36135 11.7477 1.63618 11.4729C1.9104 11.1987 2.35641 11.1987 2.63063 11.4729L7.60262 16.4449C7.87683 16.7191 7.87683 17.1652 7.60262 17.4393ZM8.23088 15.0843L4.25321 11.1066L10.6316 4.72831L14.6092 8.70598L8.23088 15.0843ZM12.4158 14.877L12.4145 14.8783C12.1403 15.1525 11.6942 15.1525 11.42 14.8783C11.1453 14.6036 11.1451 14.159 11.4199 13.8841L13.4088 11.8951C13.6831 11.6208 14.1293 11.6211 14.4032 11.8951C14.6774 12.1693 14.6774 12.6154 14.4033 12.8895L12.4158 14.877ZM13.9047 15.3769L14.8991 14.3825L19.8893 19.4005L18.8949 20.3949L13.9047 15.3769ZM22.3685 22.8877C22.0943 23.1619 21.6482 23.1619 21.3754 22.8891L19.8866 21.392L20.881 20.3976L22.3685 21.8934C22.6433 22.1682 22.6433 22.6129 22.3685 22.8877Z"
                fill="white"
              />
              <path
                d="M14.7975 23.0938H14.0236C13.697 21.491 12.2765 20.2812 10.5786 20.2812H4.95336C3.2555 20.2812 1.835 21.491 1.50833 23.0938H0.734422C0.346109 23.0938 0.03125 23.4087 0.03125 23.797C0.03125 24.1853 0.346062 24.5002 0.734422 24.5002H14.7975C15.1858 24.5002 15.5007 24.1854 15.5007 23.797C15.5007 23.4087 15.1858 23.0938 14.7975 23.0938ZM2.96436 23.0938C3.25456 22.2753 4.03658 21.6875 4.95336 21.6875H10.5786C11.4954 21.6875 12.2773 22.2753 12.5676 23.0938H2.96436Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1001_27364">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="auction__item-winnings-active-box">
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{
                  bgcolor: "rgba(41, 171, 226, 0.5)",
                  borderRadius: "5px",
                }}
                variant="rectangular"
                width="100%"
                height={16}
              />
            ) : (
              <div className="auction__item-winnings-num">1.158</div>
            )}
            <div className="auction__item-winnings-title">Total Bids</div>
          </div>
        </div>
        <div className="auction__item-winnings-active-col">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_960_50065)">
              <path
                d="M4.71875 11.4426H10.3438V8.63015H15.9688V4.4114H20.5994L19.8963 5.11452L20.8906 6.10888L23.2912 3.70827L20.8906 1.30762L19.8963 2.30202L20.5994 3.00515H14.5625V7.2239H8.9375V10.0364H3.3125V12.8489H0.5V14.2551H4.71875V11.4426Z"
                fill="white"
              />
              <path
                d="M17.375 7.22363V10.0361H11.75V12.8486H6.125V15.6611H0.5V22.6924H24.5V7.22363H17.375ZM23.0938 21.2861H1.90625V17.0674H7.53125V14.2549H13.1562V11.4424H18.7812V8.62988H23.0938V21.2861Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_960_50065">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="auction__item-winnings-active-box">
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{
                  bgcolor: "rgba(41, 171, 226, 0.5)",
                  borderRadius: "5px",
                }}
                variant="rectangular"
                width="100%"
                height={16}
              />
            ) : (
              <div className="auction__item-winnings-num">5%</div>
            )}
            <div className="auction__item-winnings-title">Total Bids</div>
          </div>
        </div>
      </div>
    </div>
  );
};
