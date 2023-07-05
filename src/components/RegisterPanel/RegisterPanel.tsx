import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";

import {
  IRegisterPanelErrors,
  RegisterPanelType,
} from "../../types/RegisterPanelTypes";
import { validationSchema } from "../AccountPanel/Details/details.data";
import { SocialsBottom } from "../LoginPanel/components/SocialsBottom";

export const RegisterPanel: FC<RegisterPanelType> = ({ isOpenAside }) => {
  const [isHiddenPassword, setHiddenPassword] = useState(true);
  const [isVisibleMismatch, setVisibleMismatch] = useState(false);

  const hiddenPasswordHandler = () => {
    if (isHiddenPassword) {
      setHiddenPassword(false);
    } else {
      setHiddenPassword(true);
    }
  };

  const navigate = useNavigate();

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
        <div className="loginpanel__step">STEP 01/03</div>
        <div className="loginpanel__pretext loginpanel__pretext-pt24">
          Enter your personal data
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            newpassword: "",
            repassword: "",
            mismatch: "",
          }}
          validationSchema={validationSchema}
          validate={(values) => {
            const errors = {} as IRegisterPanelErrors;
            if (!values.name) {
              errors.name = "Name is required";
            }
            if (!values.newpassword) {
              errors.newpassword = "New password is required";
            }
            if (!values.repassword) {
              errors.repassword = "Confirm password is required";
            }
            if (values.newpassword !== values.repassword) {
              errors.mismatch = "Passwords mismatch";
            }
            if (!values.email) {
              errors.email = "Login is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              navigate("/register/2");
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
              <div className="main-input__item">
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={
                    errors.email && touched.email && errors.email
                      ? "main-input__input main-input__input--error"
                      : "main-input__input"
                  }
                  id="name"
                  placeholder="test"
                />
                <label
                  className={
                    errors.email && touched.email && errors.email
                      ? "main-input__label main-input__label--error"
                      : "main-input__label"
                  }
                  htmlFor="name"
                >
                  Your name*
                </label>
              </div>
              <div className="main-input__error">
                {errors.name && touched.name && errors.name}
              </div>

              <div className="main-input__item main-input__item-pt5">
                <input
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  className={
                    errors.email && touched.email && errors.email
                      ? "main-input__input main-input__input--error"
                      : "main-input__input"
                  }
                  id="email"
                  placeholder="test"
                />
                <label
                  className={
                    errors.email && touched.email && errors.email
                      ? "main-input__label main-input__label--error"
                      : "main-input__label"
                  }
                  htmlFor="email"
                >
                  Email Address*
                </label>
              </div>
              <div className="main-input__error">
                {errors.email && touched.email && errors.email}
              </div>

              <div className="main-input__item main-input__item-pt5">
                <input
                  name="newpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newpassword}
                  type={isHiddenPassword ? "password" : "text"}
                  className={
                    errors.newpassword &&
                    touched.newpassword &&
                    errors.newpassword
                      ? "main-input__input main-input__input--error"
                      : "main-input__input"
                  }
                  id="newpassword"
                  placeholder="test"
                />
                <label
                  className={
                    errors.newpassword &&
                    touched.newpassword &&
                    errors.newpassword
                      ? "main-input__label main-input__label--error"
                      : "main-input__label"
                  }
                  htmlFor="newpassword"
                >
                  New Password*
                </label>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="main-input__view-password"
                  onClick={() => hiddenPasswordHandler()}
                >
                  <path
                    d="M4.28065 11.8199C2.79398 10.8466 1.83398 9.3799 1.83398 8.09323C1.83398 5.90656 4.59398 3.22656 8.00065 3.22656C9.39398 3.22656 10.6873 3.67323 11.7273 4.36656"
                    stroke="#29ABE2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.2347 5.74023C13.8287 6.49357 14.1747 7.3269 14.1747 8.09357C14.1747 10.2802 11.408 12.9602 8.00138 12.9602C7.39471 12.9602 6.80205 12.8736 6.24805 12.7202"
                    stroke="#29ABE2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.51121 9.57812C6.11454 9.18545 5.89254 8.65012 5.89454 8.09212C5.89188 6.92878 6.83321 5.98345 7.99721 5.98145C8.55721 5.98012 9.09454 6.20212 9.49054 6.59812"
                    stroke="#29ABE2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0741 8.46582C9.91815 9.32715 9.24415 10.0025 8.38281 10.1605"
                    stroke="#29ABE2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.2621 2.83301L2.74609 13.349"
                    stroke="#29ABE2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="main-input__error">
                {errors.newpassword &&
                  touched.newpassword &&
                  errors.newpassword}
              </div>
              <div className="main-input__item main-input__item-pt5">
                <input
                  name="repassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repassword}
                  type="password"
                  className={
                    errors.repassword && touched.repassword && errors.repassword
                      ? "main-input__input main-input__input--error"
                      : "main-input__input"
                  }
                  id="repassword"
                  placeholder="test"
                />
                <label
                  className={
                    errors.repassword && touched.repassword && errors.repassword
                      ? "main-input__label main-input__label--error"
                      : "main-input__label"
                  }
                  htmlFor="repassword"
                >
                  Confirm Password*
                </label>
              </div>
              <div className="main-input__error">
                {errors.repassword && touched.repassword && errors.repassword}
              </div>
              {isVisibleMismatch && (
                <div className="main-input__error">{errors.mismatch}</div>
              )}

              <button
                className="loginpanel__button"
                type="submit"
                disabled={isSubmitting}
                onClick={() => setVisibleMismatch(true)}
              >
                Next
              </button>
            </form>
          )}
        </Formik>
        <SocialsBottom title={"Or register with"} />
      </div>
    </div>
  );
};
