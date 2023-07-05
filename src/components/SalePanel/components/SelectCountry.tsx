import { FC, useState } from "react";
import { allCountriesData, countriesData } from "../salepanel.data";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { filterPanel } from "../../../store/slices/filterPanel.slice";

export const SelectCountry: FC = () => {

  const { selectRegion, selectCountry, isActiveCountriesList } = useAppSelector(
    (state) => state.filterPanelReducer
  );
  const { setActiveCountriesList, setSelectCountry } = filterPanel.actions;
  const dispatch = useAppDispatch();

  const selectLandHandler = (idx: number) => {
    dispatch(setSelectCountry(idx));
    dispatch(setActiveCountriesList(false));
  };

  return (
    <div className="lands__input" style={{ marginTop: 35 }}>
      <div className="saleplace__general-trial saleplace__general-trial-select exchange__select">
        <div
          className="saleplace__general-trial-inputbox saleplace__general-select lands__list"
          onClick={() => dispatch(setActiveCountriesList(true))}
        >
          <span
            className={
              (isActiveCountriesList && selectCountry !== null) || selectCountry
                ? "addwallet__span addwallet__span--active"
                : "addwallet__span"
            }
          >
            Select the Country
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
          {selectCountry && (
            <div className="addwallet__select-title">
              {selectRegion
                ? countriesData[selectRegion].countries[
                  selectCountry ? selectCountry : 1
                  ].title
                : allCountriesData[selectCountry].title}
            </div>
          )}
        </div>
        {isActiveCountriesList && selectRegion && (
          <ul className="saleplace__general-select-list addwallet__list">
            {countriesData[selectRegion].countries.map((el, idx) => (
              <li
                className={
                  selectCountry === idx
                    ? "saleplace__general-select-item saleplace__general-select-item--active"
                    : "saleplace__general-select-item"
                }
                onClick={() => selectLandHandler(idx)}
                key={idx}
              >
                {el.title}
              </li>
            ))}
          </ul>
        )}
        {isActiveCountriesList && selectRegion == null && (
          <ul className="saleplace__general-select-list addwallet__list">
            {allCountriesData.map((el, idx) => (
              <li
                className={
                  selectCountry === idx
                    ? "saleplace__general-select-item saleplace__general-select-item--active"
                    : "saleplace__general-select-item"
                }
                onClick={() => selectLandHandler(idx)}
                key={idx}
              >
                {el.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
