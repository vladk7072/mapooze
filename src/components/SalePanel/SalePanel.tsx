import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SalePanelItem } from "./SalePanelItem";
import { SalePanelType } from "../../types/SalePanelTypes";
import { saleData } from "./salepanel.data";
import { SelectCountry } from "./components/SelectCountry";
import { SelectStatus } from "./components/SelectStatus";
import { Slider } from "@mui/material";
import { SelectRegion } from "./components/SelectRegion";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { filterPanel } from "../../store/slices/filterPanel.slice";

function valuetext(value: number) {
  return `${value}°C`;
}

export const SalePanel: FC<SalePanelType> = ({ isOpenAside }) => {
  const [value, setValue] = useState<number[]>([0, 99.999]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const { setActiveCountriesList, setActiveRegionsList, setActiveStatusList } =
    filterPanel.actions;
  const dispatch = useAppDispatch();

  const filterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
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
          <div className="salepanel__safe">
            <div className="salepanel__top">
              <div className="salepanel__box">
                <div className="salepanel__top-title">#</div>
              </div>
              <div className="salepanel__box">
                <div className="salepanel__top-title">Land</div>
              </div>
              <div className="salepanel__box">
                <div className="salepanel__top-title"> Land Owner</div>
              </div>
              <div className="salepanel__box">
                <div className="salepanel__top-title">Status</div>
              </div>
              <div className="salepanel__box">
                <div className="salepanel__top-title">Price</div>
              </div>
              <div className="salepanel__box">
                <div className="salepanel__top-title salepanel__top-title--jcc">
                  Favorites
                </div>
              </div>
            </div>
            {saleData.map((item, idx) => (
              <SalePanelItem item={item} key={idx} count={idx} />
            ))}
          </div>
          <div className="salepanel__nav">
            <div className="salepanel__nav-btn salepanel__nav-prev salepanel__nav-btn--disable">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.002 7.00093C16.002 6.73572 15.8967 6.48136 15.7091 6.29383C15.5216 6.10629 15.2672 6.00093 15.002 6.00093H3.41603L7.71003 1.70893C7.80301 1.61596 7.87676 1.50558 7.92708 1.3841C7.9774 1.26262 8.00329 1.13242 8.00329 1.00093C8.00329 0.869446 7.9774 0.739245 7.92708 0.617766C7.87676 0.496288 7.80301 0.385909 7.71003 0.292933C7.61706 0.199958 7.50668 0.126205 7.3852 0.0758867C7.26372 0.0255685 7.13352 -0.000329018 7.00203 -0.000329018C6.87054 -0.000329018 6.74034 0.0255685 6.61886 0.0758867C6.49739 0.126205 6.38701 0.199958 6.29403 0.292933L0.294032 6.29293C0.200905 6.38582 0.127019 6.49618 0.0766063 6.61767C0.0261934 6.73916 0.000244141 6.8694 0.000244141 7.00093C0.000244141 7.13247 0.0261934 7.26271 0.0766063 7.3842C0.127019 7.50569 0.200905 7.61604 0.294032 7.70893L6.29403 13.7089C6.4818 13.8967 6.73648 14.0022 7.00203 14.0022C7.26758 14.0022 7.52226 13.8967 7.71003 13.7089C7.89781 13.5212 8.00329 13.2665 8.00329 13.0009C8.00329 12.7354 7.89781 12.4807 7.71003 12.2929L3.41603 8.00093H15.002C15.2672 8.00093 15.5216 7.89558 15.7091 7.70804C15.8967 7.5205 16.002 7.26615 16.002 7.00093Z"
                  fill="white"
                />
              </svg>
              <div className="salepanel__nav-btn-title">Previous</div>
            </div>
            <div className="salepanel__nav-pagination">
              <div className="salepanel__nav-num salepanel__nav-num--active">
                1
              </div>
              <div className="salepanel__nav-num salepanel__nav-num--disable">
                2
              </div>
              <div className="salepanel__nav-num salepanel__nav-num--disable">
                3
              </div>
              <div className="salepanel__nav-dots">...</div>
              <div className="salepanel__nav-num salepanel__nav-num--disable">
                8
              </div>
              <div className="salepanel__nav-num salepanel__nav-num--disable">
                9
              </div>
              <div className="salepanel__nav-num">10</div>
            </div>
            <div className="salepanel__nav-btn salepanel__nav-next">
              <div className="salepanel__nav-btn-title">Next</div>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.000165939 7.0009C0.000165939 7.26611 0.105522 7.52047 0.293058 7.708C0.480595 7.89554 0.734949 8.0009 1.00017 8.0009L12.5862 8.0009L8.29217 12.2929C8.19919 12.3859 8.12544 12.4963 8.07512 12.6177C8.0248 12.7392 7.9989 12.8694 7.9989 13.0009C7.9989 13.1324 8.0248 13.2626 8.07512 13.3841C8.12544 13.5055 8.19919 13.6159 8.29217 13.7089C8.38514 13.8019 8.49552 13.8756 8.617 13.9259C8.73848 13.9763 8.86868 14.0022 9.00017 14.0022C9.13165 14.0022 9.26185 13.9763 9.38333 13.9259C9.50481 13.8756 9.61519 13.8019 9.70817 13.7089L15.7082 7.7089C15.8013 7.61601 15.8752 7.50565 15.9256 7.38416C15.976 7.26267 16.002 7.13243 16.002 7.0009C16.002 6.86936 15.976 6.73912 15.9256 6.61763C15.8752 6.49614 15.8013 6.38579 15.7082 6.2929L9.70817 0.292897C9.52039 0.105124 9.26572 -0.000366211 9.00017 -0.000366211C8.73461 -0.000366211 8.47994 0.105124 8.29217 0.292897C8.10439 0.48067 7.9989 0.735346 7.9989 1.0009C7.9989 1.26645 8.10439 1.52112 8.29217 1.7089L12.5862 6.0009L1.00017 6.0009C0.734949 6.0009 0.480595 6.10625 0.293058 6.29379C0.105522 6.48133 0.000165939 6.73568 0.000165939 7.0009Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
