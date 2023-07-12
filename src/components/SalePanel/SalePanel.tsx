import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SalePanelItem } from "./SalePanelItem";
import { SalePanelType } from "../../types/SalePanelTypes";
import { saleData } from "./salepanel.data";
import { SelectCountry } from "./components/SelectCountry";
import { SelectStatus } from "./components/SelectStatus";
import { Slider } from "@mui/material";
import { SelectRegion } from "./components/SelectRegion";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { filterPanel } from "../../store/slices/filterPanel.slice";
import { SalePanelBlock } from "./components/SalePanelBlock";
import { SaleNavigation } from "./SaleNavigation";

function valuetext(value: number) {
  return `${value}°C`;
}

export const SalePanel: FC<SalePanelType> = ({ isOpenAside }) => {
  const [value, setValue] = useState<number[]>([0, 99.999]);

  const { widthClient } = useAppSelector((state) => state.mainPanelReducer);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const { setActiveCountriesList, setActiveRegionsList, setActiveStatusList } =
    filterPanel.actions;
  const dispatch = useAppDispatch();

  const filterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        dispatch(setActiveCountriesList(false));
        dispatch(setActiveRegionsList(false));
        dispatch(setActiveStatusList(false));
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <div
      className={
        isOpenAside
          ? "popup-wrapper popup-wrapper--active popup-wrapper__sale popup-wrapper__filter"
          : "popup-wrapper popup-wrapper__sale popup-wrapper__filter"
      }
    >
      <div className="salepanel__wrapper">
        <div className="salepanel__top-bar">
          <span></span>
          <Link className="popup-wrapper__close" to="/">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3002 0.70998C13.2077 0.617276 13.0978 0.543728 12.9768 0.493547C12.8559 0.443366 12.7262 0.417535 12.5952 0.417535C12.4643 0.417535 12.3346 0.443366 12.2136 0.493547C12.0926 0.543728 11.9827 0.617276 11.8902 0.70998L7.00022 5.58998L2.11022 0.699979C2.01764 0.607397 1.90773 0.533957 1.78677 0.483852C1.6658 0.433747 1.53615 0.407959 1.40522 0.407959C1.27429 0.407959 1.14464 0.433747 1.02368 0.483852C0.902716 0.533957 0.792805 0.607397 0.700223 0.699979C0.607642 0.792561 0.534202 0.902472 0.484097 1.02344C0.433992 1.1444 0.408203 1.27405 0.408203 1.40498C0.408203 1.53591 0.433992 1.66556 0.484097 1.78652C0.534202 1.90749 0.607642 2.0174 0.700223 2.10998L5.59022 6.99998L0.700223 11.89C0.607642 11.9826 0.534202 12.0925 0.484097 12.2134C0.433992 12.3344 0.408203 12.464 0.408203 12.595C0.408203 12.7259 0.433992 12.8556 0.484097 12.9765C0.534202 13.0975 0.607642 13.2074 0.700223 13.3C0.792805 13.3926 0.902716 13.466 1.02368 13.5161C1.14464 13.5662 1.27429 13.592 1.40522 13.592C1.53615 13.592 1.6658 13.5662 1.78677 13.5161C1.90773 13.466 2.01764 13.3926 2.11022 13.3L7.00022 8.40998L11.8902 13.3C11.9828 13.3926 12.0927 13.466 12.2137 13.5161C12.3346 13.5662 12.4643 13.592 12.5952 13.592C12.7262 13.592 12.8558 13.5662 12.9768 13.5161C13.0977 13.466 13.2076 13.3926 13.3002 13.3C13.3928 13.2074 13.4662 13.0975 13.5163 12.9765C13.5665 12.8556 13.5922 12.7259 13.5922 12.595C13.5922 12.464 13.5665 12.3344 13.5163 12.2134C13.4662 12.0925 13.3928 11.9826 13.3002 11.89L8.41022 6.99998L13.3002 2.10998C13.6802 1.72998 13.6802 1.08998 13.3002 0.70998Z"
                fill="#29ABE2"
              />
            </svg>
          </Link>
        </div>
        <div className="salepanel salepanel__filter-inner">
          <div className="salepanel__filter">
            <div className="salepanel__filter-title">Filters</div>
            <div ref={filterRef}>
              <SelectRegion />
              <SelectCountry />
              <SelectStatus />
            </div>
            <div className="salepanel__filter-inputs">
              <div className="salepanel__filter-input-title">Price, ETH</div>
              <input
                className="salepanel__filter-input"
                value={value[0] ? value[0] : 0}
                onChange={(e) => setValue([+e.currentTarget.value, value[1]])}
              />
              <input
                className="salepanel__filter-input"
                value={value[1] ? value[1] : 0}
                onChange={(e) => setValue([value[0], +e.currentTarget.value])}
              />
            </div>
            <Slider
              className="salepanel__filter-slider"
              size="small"
              aria-label="Small"
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={{
                color: "#29ABE2",
                "& .MuiSlider-thumb": {
                  "&.Mui-active": {
                    boxShadow: "none",
                  },
                },
                "& .MuiSlider-valueLabelOpen": {
                  background: "#29ABE2",
                  borderRadius: "4px",
                  padding: "1px 7px",
                  fontSize: "16px",
                  lineHeight: "150%",
                  display: "none",
                },
              }}
            />
          </div>
          <div className="salepanel__safe" style={{ padding: 0 }}>
            <div
              className="lands__items"
              style={{ margin: 0, marginRight: 10 }}
            >
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"free"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"inrent"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"forrent"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"exchange"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"auction"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"inrent"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"auction"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"exchange"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"free"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"inrent"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"auction"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"exchange"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"free"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"inrent"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"auction"}
              />
              <SalePanelBlock
                isVisibleSkeleton={isVisibleSkeleton}
                setIsVisibleSkeleton={setIsVisibleSkeleton}
                status={"exchange"}
              />
            </div>
            {isVisibleSkeleton.main && (
              <div style={widthClient < 1025 ? { marginBottom: 0 } : { marginBottom: 35 }}> </div>
            )}
            {!isVisibleSkeleton.main && (
              <div style={widthClient < 1025 ? { marginBottom: 0 } : { marginBottom: 35 }}>
                <SaleNavigation />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
