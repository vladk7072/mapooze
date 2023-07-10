import { FC, useState, useEffect, useRef } from "react";
//@ts-ignore
import img1 from "../../../assets/images/account/lands2.jpg";
//@ts-ignore
import logo1 from "../../../assets/images/account/logo.jpg";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { myLands } from "../Lands/lands.data";
import cn from "clsx";

interface IProps {
  extra?: boolean;
  extraPrice?: number;
}

export const ExchangeBlock: FC<IProps> = ({ extra, extraPrice }) => {
  const { widthClient } = useAppSelector((state) => state.mainPanelReducer);

  const navigate = useNavigate();
  const handlerNavigate = (link: string) => {
    navigate(link);
  };
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

  const [isActiveList, setActiveList] = useState(false);
  const [selectSocial, setSelectSocial] = useState<null | number>(null);

  const selectLandRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        selectLandRef.current &&
        !selectLandRef.current.contains(event.target as Node)
      ) {
        setActiveList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const selectHandler = (idx: number) => {
    setActiveList(false);
    setSelectSocial(idx);
  };

  return (
    <div className="lands__items-item">
      <div className="lands__items-item-top">
        <div
          className="lands__items-item-title"
          style={{
            padding: 0,
            display: "table",
            marginLeft: "auto",
            marginRight: "auto",
          }}
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
      <div className="exchange__block-prices-box">
        <div className="lands__items-item-price" style={{ marginTop: 26 }}>
          {isVisibleSkeleton.main ? (
            <Skeleton
              sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
              variant="rectangular"
              width={194}
              height={20}
            />
          ) : (
            <>
              <div className="lands__items-item-price-title">Price:</div>
              <div className="lands__items-item-price-num">478 ETH</div>
              <div className="lands__items-item-price-proc">-0,7%</div>
            </>
          )}
        </div>
        {extra && !isVisibleSkeleton.main && (
          <div className="lands__items-item-price" style={{ marginTop: 26 }}>
            <div className="lands__items-item-price-title">Extra Pay:</div>
            <div
              className="lands__items-item-price-num"
              style={{ color: "#12B677" }}
            >
              {extraPrice} ETH
            </div>
          </div>
        )}
      </div>
      <div className="exchange__block-bottom">
        {isVisibleSkeleton.main ? (
          <Skeleton
            sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "3px" }}
            variant="rectangular"
            width={205}
            height={42}
          />
        ) : (
          <div
            className="saleplace__general-trial saleplace__general-trial-select exchange__select"
            ref={selectLandRef}
            style={
              widthClient <= 450 ? { maxWidth: "100%" } : { maxWidth: 290 }
            }
          >
            <div
              className="saleplace__general-trial-inputbox saleplace__general-select"
              onClick={() => setActiveList(true)}
            >
              <span
                className={
                  isActiveList || selectSocial
                    ? "addwallet__span addwallet__span--active"
                    : "addwallet__span"
                }
              >
                Select Your Land
              </span>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3625 14.3L8.76251 11.7C8.44585 11.3833 8.37518 11.021 8.55051 10.613C8.72585 10.205 9.03818 10.0007 9.48751 10H14.6375C15.0875 10 15.4002 10.2043 15.5755 10.613C15.7508 11.0217 15.6798 11.384 15.3625 11.7L12.7625 14.3C12.6625 14.4 12.5542 14.475 12.4375 14.525C12.3208 14.575 12.1958 14.6 12.0625 14.6C11.9292 14.6 11.8042 14.575 11.6875 14.525C11.5708 14.475 11.4625 14.4 11.3625 14.3Z"
                  fill="#29ABE2"
                />
              </svg>
              {!!selectSocial && (
                <div className="addwallet__select-title">
                  {myLands[selectSocial].item}
                </div>
              )}
            </div>
            {isActiveList && (
              <ul className="saleplace__general-select-list addwallet__list exchange__block-list">
                {myLands.map((el, idx) => (
                  <li
                    className={
                      selectSocial === idx
                        ? "saleplace__general-select-item saleplace__general-select-item--active"
                        : "saleplace__general-select-item"
                    }
                    onClick={() => selectHandler(idx)}
                    key={idx}
                  >
                    {el.item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {isVisibleSkeleton.main ? (
          <Skeleton
            sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "10px" }}
            variant="rectangular"
            width={103}
            height={41}
          />
        ) : (
          <div
            className={cn(
              "accountdetails__personal-box-btn",
              selectSocial ? "" : "grey-border"
            )}
          >
            Exchange
          </div>
        )}
      </div>
    </div>
  );
};
