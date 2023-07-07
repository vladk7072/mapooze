import { FC, useState, useEffect, useRef } from "react";
//@ts-ignore
import img1 from "../../../assets/images/account/lands2.jpg";
//@ts-ignore
import logo1 from "../../../assets/images/account/logo.jpg";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const ExchangeBlock: FC = () => {
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
      <div
        className="lands__items-item-top"
      >
        <div
          className="lands__items-item-title"
          style={{ padding: 0, display: "table", marginLeft: "auto", marginRight: "auto" }}
        >
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
      </div>
      {isVisibleSkeleton.main ? (
        <Skeleton
          sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "10px" }}
          variant="rectangular"
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
