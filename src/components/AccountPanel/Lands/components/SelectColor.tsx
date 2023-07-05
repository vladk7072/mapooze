import { FC, useEffect, useRef, useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { myLandsSlice } from "../../../../store/slices/myLands.slice";

export const SelectColor: FC = () => {
  const { color } = useAppSelector((state) => state.myLandsReducer);
  const { setColorAction } = myLandsSlice.actions;
  const dispatch = useAppDispatch();

  const [isOpenColorPicker, setOpenColorPicker] = useState(false);
  const [colorState, setColor] = useState({ r: 241, g: 236, b: 225, a: 0.9 });

  useEffect(() => {
    dispatch(setColorAction(colorState));
  }, [colorState]);

  const colorPickerHandler = () => {
    if (isOpenColorPicker) {
      setOpenColorPicker(false);
    } else {
      setOpenColorPicker(true);
    }
  };

  return (
    <>
      <div
        className="main-input__item-wrapper"
        onClick={() => colorPickerHandler()}
      >
        <div className="main-input__item">
          <input
            name="color"
            type="text"
            className={
              isOpenColorPicker
                ? "main-input__input main-input__input--active"
                : "main-input__input main-input__input--nonactive"
            }
            id="color"
            value={`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}
            placeholder="color"
            disabled
          />
          <label className="main-input__label" htmlFor="color">
            Select Color
          </label>
        </div>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0625 22C6.5525 22 2.0625 17.51 2.0625 12C2.0625 6.49 6.5525 2 12.0625 2C17.5725 2 22.0625 6.04 22.0625 11C22.0625 14.31 19.3725 17 16.0625 17H14.2925C14.0125 17 13.7925 17.22 13.7925 17.5C13.7925 17.62 13.8425 17.73 13.9225 17.83C14.3325 18.3 14.5625 18.89 14.5625 19.5C14.5625 20.163 14.2991 20.7989 13.8303 21.2678C13.3614 21.7366 12.7255 22 12.0625 22ZM12.0625 4C7.6525 4 4.0625 7.59 4.0625 12C4.0625 16.41 7.6525 20 12.0625 20C12.3425 20 12.5625 19.78 12.5625 19.5C12.5594 19.3703 12.5097 19.2461 12.4225 19.15C12.0125 18.69 11.7925 18.1 11.7925 17.5C11.7925 16.837 12.0559 16.2011 12.5247 15.7322C12.9936 15.2634 13.6295 15 14.2925 15H16.0625C18.2725 15 20.0625 13.21 20.0625 11C20.0625 7.14 16.4725 4 12.0625 4Z"
            fill="#29ABE2"
          />
          <path
            d="M6.5625 13C7.39093 13 8.0625 12.3284 8.0625 11.5C8.0625 10.6716 7.39093 10 6.5625 10C5.73407 10 5.0625 10.6716 5.0625 11.5C5.0625 12.3284 5.73407 13 6.5625 13Z"
            fill="#29ABE2"
          />
          <path
            d="M9.5625 9C10.3909 9 11.0625 8.32843 11.0625 7.5C11.0625 6.67157 10.3909 6 9.5625 6C8.73407 6 8.0625 6.67157 8.0625 7.5C8.0625 8.32843 8.73407 9 9.5625 9Z"
            fill="#29ABE2"
          />
          <path
            d="M14.5625 9C15.3909 9 16.0625 8.32843 16.0625 7.5C16.0625 6.67157 15.3909 6 14.5625 6C13.7341 6 13.0625 6.67157 13.0625 7.5C13.0625 8.32843 13.7341 9 14.5625 9Z"
            fill="#29ABE2"
          />
          <path
            d="M17.5625 13C18.3909 13 19.0625 12.3284 19.0625 11.5C19.0625 10.6716 18.3909 10 17.5625 10C16.7341 10 16.0625 10.6716 16.0625 11.5C16.0625 12.3284 16.7341 13 17.5625 13Z"
            fill="#29ABE2"
          />
        </svg>
      </div>
      {isOpenColorPicker && (
        <div className="lands__colorpicker">
          <div className="lands__colorpicker-top">
            <div
              className="lands__colorpicker-close"
              onClick={() => colorPickerHandler()}
            >
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
            </div>
          </div>
          <RgbaColorPicker color={color} onChange={setColor} />
          <div className="lands__colorpicker-bottom">
            <div className="lands__colorpicker-wrapper">
              <div className="lands__colorpicker-examples">
                <div
                  className="lands__colorpicker-title"
                  style={{
                    color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                  }}
                >
                  Example
                </div>
                <div
                  className="lands__colorpicker-window"
                  style={{
                    backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                  }}
                ></div>
              </div>
              <input
                name=""
                type="text"
                className="main-input__input main-input__input--active lands__colorpicker-input"
                value={`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}
                placeholder="color"
              />
              <button
                className="lands__button"
                type="button"
                onClick={() => setOpenColorPicker(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
