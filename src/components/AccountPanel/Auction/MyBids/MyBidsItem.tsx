import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface IProps {
  img: string;
  title: string;
  currentBid: string;
  myBid: string;
  timer: number;
}

export const MyBidsItem: FC<IProps> = ({
  img,
  currentBid,
  myBid,
  title,
  timer,
}) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timer);

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
        <div className="auction__item-col">
          <div className="auction__item-col-box">
            <div className="auction__item-col-title">Current Bid:</div>
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
                variant="rectangular"
                width={95}
                height={21}
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
                {currentBid} ETH
              </div>
            )}
          </div>
          <div className="auction__item-col-box">
            <div className="auction__item-col-title">My Bid:</div>
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
                variant="rectangular"
                width={95}
                height={21}
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
                {myBid} ETH
              </div>
            )}
          </div>
        </div>
        <div className="auction__item-col">
          <div className="auction__item-col-title">Ends In:</div>
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
              variant="rectangular"
              width={160}
              height={21}
            />
          ) : (
            <div className="auction__item-col-time">
              {hours.toString().length === 1 ? "0" + hours : hours}h :{" "}
              {minutes.toString().length === 1 ? "0" + minutes : minutes}min :{" "}
              {seconds.toString().length === 1 ? "0" + seconds : seconds}s
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
