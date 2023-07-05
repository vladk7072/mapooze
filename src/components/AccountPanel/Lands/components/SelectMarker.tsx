import { FC, useState } from "react";
import { dataMarkers } from "../lands.data";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { useDispatch } from "react-redux";
import { myLandsSlice } from "../../../../store/slices/myLands.slice";

export const SelectMarker: FC = () => {
  const [selectLand, setSelectLand] = useState<null | number>(null);

  const { isActiveMarkerList } = useAppSelector((state) => state.myLandsReducer);
  const { setActiveMarkerList } = myLandsSlice.actions;
  const dispatch = useDispatch();

  const selectLandHandler = (idx: number) => {
    setSelectLand(idx);
    dispatch(setActiveMarkerList(false));
  };

  return (
    <div className="lands__input lands__input-list">
      <div
        className="saleplace__general-trial saleplace__general-trial-select exchange__select"
        style={{ marginTop: 20 }}
      >
        <div
          className="saleplace__general-trial-inputbox saleplace__general-select lands__list"
          onClick={() => dispatch(setActiveMarkerList(true))}
        >
          <span
            className={
              isActiveMarkerList || selectLand
                ? "addwallet__span addwallet__span--active"
                : "addwallet__span"
            }
          >
            Select Marker of Land
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
          {!!selectLand && (
            <div className="addwallet__select-title">
              {dataMarkers[selectLand].item}
            </div>
          )}
        </div>
        {isActiveMarkerList && (
          <ul className="saleplace__general-select-list addwallet__list lands__list">
            {dataMarkers.map((el, idx) => (
              <li
                className={
                  selectLand === idx
                    ? "saleplace__general-select-item saleplace__general-select-item--active"
                    : "saleplace__general-select-item"
                }
                onClick={() => selectLandHandler(idx)}
                key={idx}
              >
                {el.item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
