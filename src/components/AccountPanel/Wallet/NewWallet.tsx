import { Formik } from "formik";
import React, { FC, useState } from "react";
import { INewWalletErrors, NewWalletType } from "../../../types/AccountPanel/AccountWalletTypes/AddWalletTypes";

export const NewWallet:FC<NewWalletType> = ({ setAddedMode, setCards }) => {
  const [isHiddenPassword, setHiddenPassword] = useState(true);

  const hiddenPasswordHandler = () => {
    if (isHiddenPassword) {
      setHiddenPassword(false);
    } else {
      setHiddenPassword(true);
    }
  };

  return (
    <div className="addwallet">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setAddedMode(false)}
        className="addwallet__prev"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
          fill="#29ABE2"
        />
      </svg>
      <div className="addwallet__mob-title">My Wallet</div>
      <div className="addwallet__error-title addwallet__error-title--mt20">
        Type your personal date for a new wallet
      </div>
      <div className="addwallet__new-title">New Wallet</div>
      <div className="addwallet__form">
        <Formik
          initialValues={{
            name: "",
            walletaddress: "",
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {} as INewWalletErrors;
            if (!values.name) {
              errors.name = "Wallet Name is required";
            }
            if (!values.walletaddress) {
              errors.walletaddress = "Wallet Address is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            if (!values.email) {
              errors.email = "Email Address is required";
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
              setAddedMode(false);
              setCards(true);
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
                    errors.name && touched.name && errors.name
                      ? "main-input__input main-input__input--error"
                      : "main-input__input"
                  }
                  id="name"
                  placeholder="test"
                />
                <label
                  className={
                    errors.name && touched.name && errors.name
                      ? "main-input__label main-input__label--error"
                      : "main-input__label"
                  }
                  htmlFor="name"
                >
                  Wallet Name*
                </label>
              </div>
              <div className="main-input__error">
                {errors.name && touched.name && errors.name}
              </div>
              <div className="main-input__item main-input__item-pt5">
                <input
                  name="walletaddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.walletaddress}
                  type="text"
                  className={
                    errors.walletaddress &&
                    touched.walletaddress &&
                    errors.walletaddress
                      ? "main-input__input main-input__input--error"
                      : "main-input__input"
                  }
                  id="walletaddress"
                  placeholder="test"
                />
                <label
                  className={
                    errors.walletaddress &&
                    touched.walletaddress &&
                    errors.walletaddress
                      ? "main-input__label main-input__label--error"
                      : "main-input__label"
                  }
                  htmlFor="walletaddress"
                >
                  Wallet Address
                </label>
              </div>
              <div className="main-input__error">
                {errors.walletaddress &&
                  touched.walletaddress &&
                  errors.walletaddress}
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
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type={isHiddenPassword ? "password" : "text"}
                  className={
                    errors.password && touched.password && errors.password
                      ? "main-input__input main-input__input--error"
                      : "main-input__input"
                  }
                  id="password"
                  placeholder="test"
                />
                <label
                  className={
                    errors.password && touched.password && errors.password
                      ? "main-input__label main-input__label--error"
                      : "main-input__label"
                  }
                  htmlFor="password"
                >
                  Password
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
                {errors.password && touched.password && errors.password}
              </div>
              <button
                className="loginpanel__button"
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
