import { FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { LandsType } from "../../../types/AccountPanel/LandsTypes/LandsTypes";
import { landsData } from "./lands.data";
import { LandsBlock } from "./LandsBlock";
import { SaleNavigation } from "../../SalePanel/SaleNavigation";
import { Skeleton } from "@mui/material";

export const Lands: FC<LandsType> = ({ setOpenBar }) => {
  const { isMobile, widthClient } = useAppSelector(
    (state) => state.mainPanelReducer
  );
  const [isActiveList, setActiveList] = useState(false);
  const [selectSocial, setSelectSocial] = useState<null | number>(null);

  const selectHandler = (idx: number) => {
    setActiveList(false);
    setSelectSocial(idx);
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

  return (
    <div className="exchange saleplace addwallet">
      {isMobile && (
        <Link onClick={() => setOpenBar(true)} to="..">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="white"
              style={{ fill: "white" }}
            />
          </svg>
        </Link>
      )}
      <div className="addwallet__mob-title">My Lands</div>
      <div className="addwallet__error-title addwallet__error-title--active">
        You can choose and edit land information. Don’t forgot to click “Save”
        <Link className="account__close" to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3002 5.71022C18.2077 5.61752 18.0978 5.54397 17.9768 5.49379C17.8559 5.44361 17.7262 5.41778 17.5952 5.41778C17.4643 5.41778 17.3346 5.44361 17.2136 5.49379C17.0926 5.54397 16.9827 5.61752 16.8902 5.71022L12.0002 10.5902L7.11022 5.70022C7.01764 5.60764 6.90773 5.5342 6.78677 5.4841C6.6658 5.43399 6.53615 5.4082 6.40522 5.4082C6.27429 5.4082 6.14464 5.43399 6.02368 5.4841C5.90272 5.5342 5.79281 5.60764 5.70022 5.70022C5.60764 5.79281 5.5342 5.90272 5.4841 6.02368C5.43399 6.14464 5.4082 6.27429 5.4082 6.40522C5.4082 6.53615 5.43399 6.6658 5.4841 6.78677C5.5342 6.90773 5.60764 7.01764 5.70022 7.11022L10.5902 12.0002L5.70022 16.8902C5.60764 16.9828 5.5342 17.0927 5.4841 17.2137C5.43399 17.3346 5.4082 17.4643 5.4082 17.5952C5.4082 17.7262 5.43399 17.8558 5.4841 17.9768C5.5342 18.0977 5.60764 18.2076 5.70022 18.3002C5.79281 18.3928 5.90272 18.4662 6.02368 18.5163C6.14464 18.5665 6.27429 18.5922 6.40522 18.5922C6.53615 18.5922 6.6658 18.5665 6.78677 18.5163C6.90773 18.4662 7.01764 18.3928 7.11022 18.3002L12.0002 13.4102L16.8902 18.3002C16.9828 18.3928 17.0927 18.4662 17.2137 18.5163C17.3346 18.5665 17.4643 18.5922 17.5952 18.5922C17.7262 18.5922 17.8558 18.5665 17.9768 18.5163C18.0977 18.4662 18.2076 18.3928 18.3002 18.3002C18.3928 18.2076 18.4662 18.0977 18.5163 17.9768C18.5665 17.8558 18.5922 17.7262 18.5922 17.5952C18.5922 17.4643 18.5665 17.3346 18.5163 17.2137C18.4662 17.0927 18.3928 16.9828 18.3002 16.8902L13.4102 12.0002L18.3002 7.11022C18.6802 6.73022 18.6802 6.09022 18.3002 5.71022Z"
              fill="#29ABE2"
            />
          </svg>
        </Link>
      </div>
      <div className="exchange__wrapper">
        <div className="exchange__top">
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
                Select the Land
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
                  {landsData[selectSocial].item}
                </div>
              )}
            </div>
            {isActiveList && (
              <ul className="saleplace__general-select-list addwallet__list exchange__list">
                {landsData.map((el, idx) => (
                  <li
                    className={
                      selectSocial === idx
                        ? "saleplace__general-select-item saleplace__general-select-item--active"
                        : "saleplace__general-select-item"
                    }
                    onClick={() => selectHandler(idx)}
                    key={idx}
                  >
                    <img
                      className="saleplace__general-trial-landicon"
                      src={el.logo}
                      alt=""
                    />
                    {el.item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="exchange__top-subtitle">
            Total Value
            {isVisibleSkeleton.main ? (
              <Skeleton
                sx={{ bgcolor: "rgba(41, 171, 226, 0.5)", borderRadius: "5px" }}
                variant="rectangular"
                width={100}
                height={21}
              />
            ) : (
              <span>3.023.579</span>
            )}
          </div>
        </div>
        <div className="lands__items">
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
          <LandsBlock />
        </div>
        {!isVisibleSkeleton.main && <SaleNavigation />}
      </div>
    </div>
  );
};
