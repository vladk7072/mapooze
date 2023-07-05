import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
//@ts-ignore
import logo from "../../../../assets/images/account/bids/logo.jpg";

interface IProps {
  img: string;
  title: string;
  startBid: string;
  yourBid: string;
  activeBidders: string;
  totalBids: string;
}

export const WinningsBidsItem: FC<IProps> = ({
  activeBidders,
  img,
  startBid,
  title,
  totalBids,
  yourBid,
}) => {
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
    <div className="auction__item">
      {isVisibleSkeleton.main ? (
        <Skeleton
          sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "10px" }}
          variant="rectangular"
          width="100%"
          height={204}
        />
      ) : (
        <div
          className="auction__item-image"
          style={
            isVisibleSkeleton.photo
              ? {
                  backgroundColor: "rgba(41, 171, 226, 0.3)",
                }
              : {}
          }
        >
          <img
            className="auction__item-img"
            src={img}
            onLoad={() =>
              setIsVisibleSkeleton((prev) => ({ ...prev, photo: false }))
            }
            alt=""
          />
        </div>
      )}
      <div className="auction__item-title">
        {isVisibleSkeleton.main ? (
          <Skeleton
            sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
            variant="rectangular"
            width={160}
            height={21}
          />
        ) : (
          title
        )}
      </div>
      <div className="auction__item-box">
        <div className="auction__item-winner">
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "50px" }}
              variant="circular"
              width={35}
              height={35}
            />
          ) : (
            <div className="auction__item-winner-logo">
              <img src={logo} alt="" />
            </div>
          )}
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
              variant="rectangular"
              width={80}
              height={20}
            />
          ) : (
            <div className="auction__item-winner-name">Emily Brown</div>
          )}
        </div>
        <div className="auction__item-col auction__item-col-cntr">
          <div className="auction__item-col-box">
            <div className="auction__item-col-title">Start Bid: </div>
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
                variant="rectangular"
                width={60}
                height={20}
              />
            ) : (
              <div className="auction__item-col-price">
                <svg
                  width="17"
                  height="24"
                  viewBox="0 0 17 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1001_7245)">
                    <path
                      d="M8.50175 18.297L1.85388 15.045L8.49571 24L9.49354 22.6545V17.8103L8.50175 18.297ZM8.49571 0L0.867188 13.7144H16.1244L8.49571 0Z"
                      fill="#29ABE2"
                    />
                    <path
                      d="M16.1248 13.7347L8.49609 0V13.7347H16.1248Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M8.56541 10.8395L8.53547 10.8252L5.40077 12.7741L1.85547 15.0441L8.54221 18.3252L8.57215 18.3109L9.56324 17.825V11.3291L8.56541 10.8395Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M12.5249 13.4512L8.5651 10.8395L8.53516 10.8252L8.54189 18.3252L8.57184 18.3109L15.104 15.0795L12.5249 13.4512Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M8.49501 9.98988L8.46507 9.97559L0.867188 13.7256H0.873971L8.47181 17.4756L8.50175 17.4613L9.49284 16.9754V10.4795L8.49501 9.98988Z"
                      fill="#1F7EA6"
                    />
                    <path
                      d="M8.50218 18.2971L8.49609 24.0001L15.1427 15.0391L8.50218 18.2971Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M16.1092 13.7256L8.49479 9.98988L8.46484 9.97559L8.47158 17.4756L8.50152 17.4613L16.116 13.7256H16.1092Z"
                      fill="#1D7296"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1001_7245">
                      <rect
                        width="15.2627"
                        height="24"
                        fill="white"
                        transform="translate(0.867188)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {startBid}
              </div>
            )}
          </div>
          <div className="auction__item-col-box">
            <div className="auction__item-col-title">Your Bid: </div>
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
                variant="rectangular"
                width={60}
                height={20}
              />
            ) : (
              <div className="auction__item-col-price">
                <svg
                  width="17"
                  height="24"
                  viewBox="0 0 17 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1001_7245)">
                    <path
                      d="M8.50175 18.297L1.85388 15.045L8.49571 24L9.49354 22.6545V17.8103L8.50175 18.297ZM8.49571 0L0.867188 13.7144H16.1244L8.49571 0Z"
                      fill="#29ABE2"
                    />
                    <path
                      d="M16.1248 13.7347L8.49609 0V13.7347H16.1248Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M8.56541 10.8395L8.53547 10.8252L5.40077 12.7741L1.85547 15.0441L8.54221 18.3252L8.57215 18.3109L9.56324 17.825V11.3291L8.56541 10.8395Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M12.5249 13.4512L8.5651 10.8395L8.53516 10.8252L8.54189 18.3252L8.57184 18.3109L15.104 15.0795L12.5249 13.4512Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M8.49501 9.98988L8.46507 9.97559L0.867188 13.7256H0.873971L8.47181 17.4756L8.50175 17.4613L9.49284 16.9754V10.4795L8.49501 9.98988Z"
                      fill="#1F7EA6"
                    />
                    <path
                      d="M8.50218 18.2971L8.49609 24.0001L15.1427 15.0391L8.50218 18.2971Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M16.1092 13.7256L8.49479 9.98988L8.46484 9.97559L8.47158 17.4756L8.50152 17.4613L16.116 13.7256H16.1092Z"
                      fill="#1D7296"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1001_7245">
                      <rect
                        width="15.2627"
                        height="24"
                        fill="white"
                        transform="translate(0.867188)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {yourBid}
              </div>
            )}
          </div>
        </div>
        <div
          className="auction__item-winnings-active-col"
          style={{ marginTop: 18 }}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1001_7028"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="25"
            >
              <path d="M0 0.500071H23.9999V24.5H0V0.500071Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1001_7028)">
              <path
                d="M21.9609 23.0938H20.1368V19.4674C20.1368 19.0791 19.822 18.7643 19.4337 18.7643C19.0454 18.7643 18.7305 19.0791 18.7305 19.4674V23.0938H15.8222L16.5694 18.8784C16.6019 18.6953 16.5605 18.5068 16.4543 18.3542L15.4434 16.9009C15.6769 16.7182 15.8609 16.48 15.9789 16.208H19.6339L21.7068 18.3846C21.8704 18.5561 21.9615 18.7842 21.9609 19.0213V23.0938ZM14.323 23.0938L13.5829 18.9188L14.3585 17.8038L15.1341 18.9188L14.3941 23.0938H14.323ZM9.24855 17.2369H5.19233C4.28324 17.2369 3.54369 16.4923 3.54369 15.5771V13.6267H4.56107V15.5049C4.56107 15.8932 4.87588 16.208 5.26419 16.208H12.7381C12.8561 16.48 13.0401 16.7182 13.2736 16.9009L12.2627 18.3542C12.1566 18.5069 12.1152 18.6953 12.1476 18.8784L12.8948 23.0938H9.95168V17.9401C9.95168 17.5517 9.63686 17.2369 9.24855 17.2369ZM4.05238 11.0705C4.33288 11.0705 4.56107 11.3013 4.56107 11.585V12.2204H3.54369V11.585C3.54369 11.3013 3.77188 11.0705 4.05238 11.0705ZM14.3585 14.3642C14.4796 14.3642 14.5995 14.3589 14.7179 14.3485V15.5049C14.7179 15.7059 14.5567 15.8694 14.3585 15.8694C14.1603 15.8694 13.9991 15.7059 13.9991 15.5049V14.3485C14.1186 14.359 14.2385 14.3642 14.3585 14.3642ZM11.6647 10.248V8.63183H16.8441C16.9141 8.63183 16.9836 8.6293 17.0523 8.62428V10.248C17.0523 11.7422 15.8439 12.958 14.3585 12.958C12.8731 12.958 11.6647 11.7422 11.6647 10.248ZM11.6647 6.10307C11.6647 5.22951 12.3754 4.51879 13.249 4.51879H18.2894V5.78034C18.2894 6.57721 17.641 7.22558 16.8441 7.22558H11.6647V6.10307ZM2.03906 5.67135V2.19066C2.03915 2.11527 2.06913 2.043 2.12244 1.98969C2.17574 1.93639 2.24802 1.9064 2.3234 1.90632H5.78131C5.8567 1.9064 5.92897 1.93639 5.98228 1.98969C6.03558 2.043 6.06557 2.11527 6.06566 2.19066V5.67135C6.06557 5.74674 6.03558 5.81901 5.98228 5.87232C5.92897 5.92562 5.8567 5.95561 5.78131 5.95569H2.3234C2.24802 5.95561 2.17574 5.92562 2.12244 5.87232C2.06913 5.81901 2.03915 5.74674 2.03906 5.67135ZM22.7251 17.4147L20.4444 15.02C20.3788 14.951 20.2998 14.8961 20.2122 14.8586C20.1247 14.8211 20.0305 14.8018 19.9353 14.8018H16.1242V13.9626C17.5036 13.2991 18.4586 11.8834 18.4586 10.248V8.12961C19.2052 7.61488 19.6956 6.75379 19.6956 5.78034V3.81567C19.6956 3.42736 19.3808 3.11255 18.9925 3.11255H13.249C11.6 3.11255 10.2585 4.45411 10.2585 6.10307V10.248C10.2585 11.8834 11.2134 13.2991 12.5928 13.9626V14.8018H5.96731V11.585C5.96731 10.7748 5.46453 10.0801 4.7555 9.79836V7.36194H5.78131C6.71351 7.36194 7.4719 6.60355 7.4719 5.67135V2.19066C7.4719 1.25846 6.71351 0.500071 5.78131 0.500071H2.3234C1.3912 0.500071 0.632812 1.25846 0.632812 2.19066V5.67135C0.632812 6.60355 1.3912 7.36194 2.3234 7.36194H3.34926V9.79836C2.64018 10.0801 2.13745 10.7748 2.13745 11.585V15.5771C2.13745 17.2677 3.50783 18.6432 5.19233 18.6432H8.54543V23.7969C8.54543 24.1852 8.86024 24.5 9.24855 24.5H22.664C23.0523 24.5 23.3671 24.1852 23.3671 23.7969V19.0213C23.3671 18.42 23.1391 17.8494 22.7251 17.4147Z"
                fill="white"
              />
            </g>
          </svg>
          <div className="auction__item-winnings-active-box">
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
                variant="rectangular"
                width={60}
                height={20}
              />
            ) : (
              <div className="auction__item-winnings-num">{activeBidders}</div>
            )}
            <div className="auction__item-winnings-title">Active Bidders</div>
          </div>
        </div>
        <div
          className="auction__item-winnings-active-col"
          style={{ marginTop: 18 }}
        >
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
                sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
                variant="rectangular"
                width={60}
                height={20}
              />
            ) : (
              <div className="auction__item-winnings-num">{totalBids}</div>
            )}
            <div className="auction__item-winnings-title">Total Bids</div>
          </div>
        </div>
      </div>
    </div>
  );
};
