import { Formik, Form } from "formik";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { SelectMarker } from "./SelectMarker";
import { SelectFonts } from "./SelectFonts";
import { SelectWeight } from "./SelectWeight";
import { SelectColor } from "./SelectColor";
import { IPersonalizationErrors } from "../../../../types/AccountPanel/LandsTypes/LandsTypes";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { myLandsSlice } from "../../../../store/slices/myLands.slice";
import { SelectSize } from "./SelectSize";

interface IProps {
  setSelectFont: (args: number) => void;
  setPreviewMode: (args: boolean) => void;
  selectFont: number | null;
}

export const Personalization: FC<IProps> = ({
  setSelectFont,
  setPreviewMode,
  selectFont,
}) => {
  const [visibleInput, setVisivbleInput] = useState(false);

  const { angle } = useAppSelector((state) => state.myLandsReducer);
  const {
    setAngle,
    setActiveFontsList,
    setActiveSizeList,
    setActiveWeightList,
    setActiveMarkerList,
  } = myLandsSlice.actions;
  const dispatch = useAppDispatch();

  const handleChangeGlobal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAngle(+e.currentTarget.value));
  };

  const handleCheckRotate = () => {
    if (angle <= 70 && angle >= -70) {
      setPreviewMode(true);
    }
  };

  if (angle > 70 || angle < -70) {
    setPreviewMode(false);
  }

  const landsRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<HTMLDivElement>(null);
  const fontsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        landsRef.current &&
        !landsRef.current.contains(event.target as Node)
      ) {
        dispatch(setActiveSizeList(false));
        dispatch(setActiveWeightList(false));
      }
      if (
        fontsRef.current &&
        !fontsRef.current.contains(event.target as Node)
      ) {
        dispatch(setActiveFontsList(false));
      }
      if (
        markersRef.current &&
        !markersRef.current.contains(event.target as Node)
      ) {
        dispatch(setActiveMarkerList(false));
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="saleplace__general">
      <div className="saleplace__general-subtitle">
        Personalization of Your Land
      </div>
      <Formik
        validate={(values) => {
          const errors = {} as IPersonalizationErrors;
          if (+values.angle < -70 || +values.angle > 70) {
            errors.angle = "Tilt angle range from -70deg to 70deg";
          }
          return errors;
        }}
        initialValues={{
          yourtext: "",
          angle: "0",
          color: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="lands__pers" onSubmit={handleSubmit}>
            <div className="lands__pers-col">
              <div className="lands__inputs">
                <div className="main-input__item-wrapper lands__input">
                  <div className="main-input__item">
                    <textarea
                      name="yourtext"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.yourtext}
                      className="main-input__input main-input__textarea"
                      id="yourtext"
                      placeholder="test"
                    />
                    <label className="main-input__label" htmlFor="yourtext">
                      Your Text
                    </label>
                  </div>
                  <svg
                    width="56"
                    height="26"
                    viewBox="0 0 56 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() =>
                      setVisivbleInput(visibleInput ? false : true)
                    }
                  >
                    <path
                      d={
                        visibleInput
                          ? "M42.5618 0.5H12.5C5.60278 0.5 0 6.10278 0 13C0 19.8972 5.60278 25.5 12.5 25.5H42.5618C49.459 25.5 55.0618 19.8972 55.0618 13C55.0618 6.10278 49.459 0.5 42.5618 0.5ZM42.5618 21.211C38.0216 21.211 34.3509 17.5402 34.3509 13C34.3509 8.47914 38.0216 4.78903 42.5618 4.78903C44.7379 4.79413 46.8235 5.66085 48.3622 7.1996C49.901 8.73835 50.7677 10.8239 50.7728 13C50.7728 17.5402 47.0827 21.211 42.5618 21.211Z"
                          : "M42.6243 0.5H12.5625C5.66528 0.5 0.0625 6.10278 0.0625 13C0.0625 19.8972 5.66528 25.5 12.5625 25.5H42.6243C49.5215 25.5 55.1243 19.8972 55.1243 13C55.1243 6.10278 49.5215 0.5 42.6243 0.5ZM12.5625 21.211C10.3864 21.2059 8.30085 20.3391 6.7621 18.8004C5.22335 17.2616 4.35663 15.1761 4.35153 13C4.35153 8.45982 8.04164 4.78903 12.5625 4.78903C17.1027 4.78903 20.7735 8.45982 20.7735 13C20.7735 17.5209 17.1027 21.211 12.5625 21.211Z"
                      }
                      fill={visibleInput ? "#29ABE2" : "#FF0000"}
                    />
                  </svg>
                </div>
                <div ref={markersRef}>
                  <SelectMarker />
                </div>
              </div>
            </div>
            <div className="lands__pers-col">
              <div ref={fontsRef}>
                <SelectFonts />
              </div>
              <div className="lands__pers-double" ref={landsRef}>
                <SelectWeight />
                <SelectSize />
                <div className="main-input__item-wrapper lands__input">
                  <div className="main-input__item">
                    <input
                      name="angle"
                      onChange={(event) => {
                        handleChange(event);
                        handleChangeGlobal(event);
                      }}
                      onBlur={handleBlur}
                      value={values.angle}
                      type="number"
                      className="main-input__input"
                      id="angle"
                      placeholder="test"
                    />
                    <label
                      className="main-input__label"
                      htmlFor="angle"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Angle of Text
                    </label>
                  </div>
                </div>
                <div className="main-input__error">
                  {errors.angle && touched.angle && errors.angle}
                </div>
              </div>
              <div className="lands__pers-color">
                <SelectColor />
                <button
                  className="lands__button"
                  type="button"
                  onClick={() => handleCheckRotate()}
                >
                  Preview
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
