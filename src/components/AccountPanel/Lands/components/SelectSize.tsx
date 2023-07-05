import { FC, useState } from "react";
import { dataSize, dataWeight } from "../lands.data";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { myLandsSlice } from "../../../../store/slices/myLands.slice";

export const SelectSize: FC = () => {
  const { selectSize, isActiveWeightList, isActiveSizeList } = useAppSelector(
    (state) => state.myLandsReducer
  );
  const { setSelectSize, setActiveSizeList } = myLandsSlice.actions;
  const dispatch = useAppDispatch();

  const selectLandHandler = (idx: number) => {
    dispatch(setSelectSize(idx));
    dispatch(setActiveSizeList(false));
  };

  return (
    <div className="lands__input lands__input-list lands__input--second">
      <div className="saleplace__general-trial saleplace__general-trial-select exchange__select">
        <div
          className="saleplace__general-trial-inputbox saleplace__general-select lands__mode"
          onClick={() => dispatch(setActiveSizeList(true))}
        >
          <span
            className={
              isActiveWeightList || selectSize
                ? "addwallet__span addwallet__span--active"
                : "addwallet__span"
            }
            style={{whiteSpace: "nowrap"}}
          >
            Font Size
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
          <div className="addwallet__select-title">
            {dataSize[selectSize].size}
          </div>
        </div>
        {isActiveSizeList && (
          <ul className="saleplace__general-select-list addwallet__list lands__list">
            {dataSize.map((el, idx) => (
              <li
                className={
                  selectSize === idx
                    ? "saleplace__general-select-item saleplace__general-select-item--active"
                    : "saleplace__general-select-item"
                }
                onClick={() => selectLandHandler(idx)}
                key={idx}
              >
                {el.size}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
