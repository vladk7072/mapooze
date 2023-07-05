import React, { FC, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Formik } from "formik";
//@ts-ignore
import placelogo from "../../assets/images/saleplace/placeicon.svg";
import {
  IPersonalPanelErrors,
  PersonalPanelType,
} from "../../types/RegisterPanelTypes";
import { SocialsBottom } from "../LoginPanel/components/SocialsBottom";

export const PersonalPanel: FC<PersonalPanelType> = ({ isOpenAside }) => {
  const navigate = useNavigate();
  const [isList, setList] = useState(false);
  const [isListPlace, setListPlace] = useState(false);
  const listHandlerPlace = () => {
    if (isList) {
      setListPlace(false);
    } else {
      setListPlace(true);
    }
  };
  const listHandler = () => {
    if (isList) {
      setList(false);
    } else {
      setList(true);
    }
  };

  const yourNumRef = useRef<HTMLDivElement>(null);
  const yourCountryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        yourCountryRef.current &&
        !yourCountryRef.current.contains(event.target as Node)
      ) {
        setList(false);
      }
      if (
        yourNumRef.current &&
        !yourNumRef.current.contains(event.target as Node)
      ) {
        setListPlace(false);
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
          ? "popup-wrapper popup-wrapper__loginpanel popup-wrapper--active"
          : "popup-wrapper popup-wrapper__loginpanel"
      }
    >
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
      <div className="loginpanel">
        <div className="loginpanel__top">
          <Link className="loginpanel__top-item" to="../login">
            Log in
          </Link>
          <span>I</span>
          <div className="loginpanel__top-item loginpanel__top-item--active">
            Register
          </div>
        </div>
        <div className="loginpanel__step">STEP 02/03</div>
        <div className="loginpanel__pretext loginpanel__pretext-pt24">
          Enter your personal date
        </div>
        <Formik
          initialValues={{
            address: "",
            city: "",
            tel: "",
            checkbox: false,
          }}
          validate={(values) => {
            const errors = {} as IPersonalPanelErrors;
            if (!values.tel) {
              errors.tel = "Tel is required";
            }
            if (!values.checkbox) {
              errors.checkbox = "Need your agreement";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              navigate("../register/3");
            }, 400);
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
            <form onSubmit={handleSubmit}>
              <div className="saleplace__general-trial saleplace__general-trial-select saleplace__general-trial--mt16" ref={yourNumRef}>
                <div className="saleplace__general-trial-title">
                  Phone Number*
                </div>
                <div
                  className={
                    errors.tel && touched.tel && errors.tel
                      ? "saleplace__general-trial-inputbox saleplace__general-select saleplace__general-select--numbers saleplace__general-trial-inputbox--error"
                      : "saleplace__general-trial-inputbox saleplace__general-select saleplace__general-select--numbers"
                  }
                >
                  <div
                    onClick={() => listHandlerPlace()}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      maxWidth: 86,
                      gridGap: 3,
                    }}
                  >
                    <img
                      className="saleplace__general-trial-landicon"
                      src={placelogo}
                      alt=""
                    />
                    <span>+44</span>
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
                  </div>
                  <input
                    name="tel"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                    id="tel"
                    onClick={() => setListPlace(false)}
                  />
                </div>
                <div className="main-input__error">
                  {errors.tel && touched.tel && errors.tel}
                </div>
                {isListPlace && (
                  <ul className="saleplace__general-select-list">
                    <li
                      onClick={() => setListPlace(false)}
                      className="saleplace__general-select-item"
                    >
                      <img
                        className="saleplace__general-trial-landicon"
                        src={placelogo}
                        alt=""
                      />
                      United Kingdom
                    </li>
                    <li
                      onClick={() => setListPlace(false)}
                      className="saleplace__general-select-item"
                    >
                      <img
                        className="saleplace__general-trial-landicon"
                        src={placelogo}
                        alt=""
                      />
                      United Kingdom
                    </li>
                    <li
                      onClick={() => setListPlace(false)}
                      className="saleplace__general-select-item"
                    >
                      <img
                        className="saleplace__general-trial-landicon"
                        src={placelogo}
                        alt=""
                      />
                      United Kingdom
                    </li>
                  </ul>
                )}
              </div>
              <div className="main-input__items">
                <div className="main-input__item main-input__item-gr">
                  <input
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    type="text"
                    className="main-input__input"
                    id="city"
                    placeholder="test"
                  />
                  <label className="main-input__label" htmlFor="city">
                    Your City
                  </label>
                </div>
                <div className="main-input__item main-input__item-gr">
                  <input
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    type="text"
                    className="main-input__input"
                    id="address"
                    placeholder="test"
                  />
                  <label className="main-input__label" htmlFor="address">
                    Your Address
                  </label>
                </div>
              </div>
              <div
                className="saleplace__general-trial saleplace__general-trial-select saleplace__general-trial--mt16"
                ref={yourCountryRef}
              >
                <div className="saleplace__general-trial-title">
                  Your Country
                </div>
                <div
                  className="saleplace__general-trial-inputbox saleplace__general-select"
                  onClick={() => listHandler()}
                >
                  <span>Australia</span>
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
                </div>
                {isList && (
                  <ul className="saleplace__general-select-list">
                    <li>Australia</li>
                    <ul>
                      <li
                        className="saleplace__general-select-item"
                        onClick={() => listHandler()}
                      >
                        Alice Springs
                      </li>
                      <li
                        className="saleplace__general-select-item"
                        onClick={() => listHandler()}
                      >
                        Byron Bay
                      </li>
                    </ul>
                  </ul>
                )}
              </div>
              <div className="main-input__checkbox">
                <label
                  className="main-input__checkbox-label"
                  htmlFor="checkbox"
                >
                  {values.checkbox ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z"
                        fill="#29ABE2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.9142 6.29297C15.3047 6.68349 15.3047 7.31666 14.9142 7.70718L8.70711 14.2072C8.31658 14.5977 7.68342 14.5977 7.29289 14.2072L4.29289 11.2072C3.90237 10.8167 3.90237 10.1835 4.29289 9.79297C4.68342 9.40245 5.31658 9.40245 5.70711 9.79297L8 12.0859L13.5 6.29297C13.8905 5.90244 14.5237 5.90244 14.9142 6.29297Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 4C1 2.34315 2.34315 1 4 1H18C19.6569 1 21 2.34315 21 4V18C21 19.6569 19.6569 21 18 21H4C2.34315 21 1 19.6569 1 18V4Z"
                        stroke="#29ABE2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  <Field
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    className="main-input__check"
                  />
                  I agree to terms & conditions
                </label>
                <div className="main-input__error">
                  {errors.checkbox && touched.checkbox && errors.checkbox}
                </div>
              </div>
              <button
                className="loginpanel__button"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
            </form>
          )}
        </Formik>
        <SocialsBottom title={"Or register with"} />
      </div>
    </div>
  );
};
