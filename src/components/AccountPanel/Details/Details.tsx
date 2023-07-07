import { FC, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  DetailsType,
  IDetailsErrors,
} from "../../../types/AccountPanel/DetailsTypes/DetailsTypes";
import { Field, Form, Formik } from "formik";
//@ts-ignore
import logo from "../../../assets/images/account/logo.jpg";
//@ts-ignore
import placelogo from "../../../assets/images/saleplace/placeicon.svg";
import { SocialItem } from "./SocialItem";
import { AddSocial } from "./AddSocial";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { socialsData, validationSchema } from "./details.data";
import { ScrollToTopOnMount } from "../../../utils/routerUp";

export const Details: FC<DetailsType> = ({ setOpenBar }) => {
  const { isMobile } = useAppSelector((state) => state.mainPanelReducer);

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

  const [isHiddenPassword, setHiddenPassword] = useState(true);
  const [isVisibleMismatch, setVisibleMismatch] = useState(false);

  const hiddenPasswordHandler = () => {
    if (isHiddenPassword) {
      setHiddenPassword(false);
    } else {
      setHiddenPassword(true);
    }
  };

  const [visibleInput, setVisivbleInput] = useState(false);

  const [isActiveCheckBox, setActiveCheckBox] = useState<number | null>(null);

  const [activeAddSocialPanel, setAddSocialPanel] = useState(false);

  const countryRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setList(false);
      }
      if (
        phoneRef.current &&
        !phoneRef.current.contains(event.target as Node)
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
    <div className="addwallet">
      {isMobile && (
        <Link onClick={() => setOpenBar(true)} to="..">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="white"
              style={{ fill: "white" }}
            />
          </svg>
        </Link>
      )}
      <div className="addwallet__mob-title">Account Details</div>
      <div className="addwallet__error-title">
        Your options are limited
        <span>Personal ID: 26485428</span>
        <Link className="account__close" to="/">
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
        </Link>
      </div>
      <Formik
        validationSchema={validationSchema}
        validate={(values) => {
          const errors = {} as IDetailsErrors;
          if (+values.age < 18) {
            errors.age = "Your age must not be less than 18";
          }
          if (!values.age) {
            errors.age = "Name is required";
          }
          if (!values.picked) {
            errors.picked = "This fields is required";
          }
          if (!values.name) {
            errors.name = "Full Name is required";
          }
          if (!values.username) {
            errors.username = "User Name is required";
          }
          if (!values.newpassword) {
            errors.newpassword = "New password is required";
          }
          if (!values.curpassword) {
            errors.curpassword = "Current password is required";
          }
          if (values.curpassword !== values.newpassword) {
            errors.mismatch = "Passwords mismatch";
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
        initialValues={{
          picked: "",
          age: "",
          name: "",
          username: "",
          email: "",
          tel: "",
          curpassword: "",
          newpassword: "",
          mismatch: "",
          facebook: "",
          twitter: "",
          instagram: "",
          telegram: "",
          website: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
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
          <Form>
            <div className="accountdetails">
              <div className="accountdetails__personal">
                <div className="accountdetails__personal-title">
                  Personal Information
                </div>
                <div className="accountdetails__personal-box">
                  <img
                    src={logo}
                    alt=""
                    className="accountdetails__personal-box-logo"
                  />
                  <div className="accountdetails__personal-box-btn">Change</div>
                  <div className="accountdetails__personal-box-remove">
                    Remove
                  </div>
                </div>

                <div
                  className="accountdetails__radios"
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label className="accountdetails__radios-label">
                    Male
                    <input
                      className={
                        isActiveCheckBox === 0
                          ? "accountdetails__radios-input accountdetails__radios-input--active"
                          : "accountdetails__radios-input"
                      }
                      type="radio"
                      name="picked"
                      value="Male"
                      onClick={() => setActiveCheckBox(0)}
                    />
                  </label>
                  <label className="accountdetails__radios-label">
                    Female
                    <input
                      className={
                        isActiveCheckBox === 1
                          ? "accountdetails__radios-input accountdetails__radios-input--active"
                          : "accountdetails__radios-input"
                      }
                      type="radio"
                      name="picked"
                      value="Female"
                      onClick={() => setActiveCheckBox(1)}
                    />
                  </label>
                </div>
                <div className="main-input__error">
                  {errors.picked && touched.picked && errors.picked}
                </div>
                <div className="main-input__item main-input__item-pt5">
                  <input
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    type="number"
                    className={
                      errors.age && touched.age && errors.age
                        ? "main-input__input main-input__input--error"
                        : "main-input__input"
                    }
                    id="age"
                    placeholder="test"
                  />
                  <label
                    className={
                      errors.age && touched.age && errors.age
                        ? "main-input__label main-input__label--error"
                        : "main-input__label"
                    }
                    htmlFor="age"
                  >
                    Type or Chose Age*
                  </label>
                </div>
                <div className="main-input__error">
                  {errors.age && touched.age && errors.age}
                </div>
                <div className="main-input__item main-input__item-pt5">
                  <input
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    type="text"
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
                    Full Name*
                  </label>
                </div>
                <div className="main-input__error">
                  {errors.name && touched.name && errors.name}
                </div>
                <div className="main-input__item-wrapper main-input__item-pt5">
                  <div className="main-input__item">
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
                <div className="main-input__error">
                  {errors.email && touched.email && errors.email}
                </div>
                <div className="main-input__item main-input__item-pt5">
                  <input
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    type="text"
                    className={
                      errors.username && touched.username && errors.username
                        ? "main-input__input main-input__input--error"
                        : "main-input__input"
                    }
                    id="username"
                    placeholder="test"
                  />
                  <label
                    className={
                      errors.username && touched.username && errors.username
                        ? "main-input__label main-input__label--error"
                        : "main-input__label"
                    }
                    htmlFor="username"
                  >
                    User Name*
                  </label>
                </div>
                <div className="main-input__error">
                  {errors.username && touched.username && errors.username}
                </div>
                <div
                  className="saleplace__general-trial saleplace__general-trial-select"
                  ref={phoneRef}
                >
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
                    <ul
                      className="saleplace__general-select-list"
                      style={{ maxWidth: 300 }}
                    >
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
                <div
                  className="saleplace__general-trial saleplace__general-trial-select"
                  ref={countryRef}
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
                    <ul
                      className="saleplace__general-select-list"
                      style={{ maxWidth: 300 }}
                    >
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
                <div
                  className="accountdetails__personal-title"
                  style={{ marginTop: 24 }}
                >
                  Password change
                </div>
                <div className="main-input__item main-input__item-pt5">
                  <input
                    name="curpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.curpassword}
                    type={isHiddenPassword ? "password" : "text"}
                    className={
                      errors.curpassword &&
                      touched.curpassword &&
                      errors.curpassword
                        ? "main-input__input main-input__input--error"
                        : "main-input__input"
                    }
                    id="curpassword"
                    placeholder="test"
                  />
                  <label
                    className={
                      errors.curpassword &&
                      touched.curpassword &&
                      errors.curpassword
                        ? "main-input__label main-input__label--error"
                        : "main-input__label"
                    }
                    htmlFor="curpassword"
                  >
                    Current Password*
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
                  {errors.curpassword &&
                    touched.curpassword &&
                    errors.curpassword}
                </div>
                <div className="main-input__item main-input__item-pt5">
                  <input
                    name="newpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newpassword}
                    type="password"
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
                    Confirm Password*
                  </label>
                </div>
                <div className="main-input__error">
                  {errors.newpassword &&
                    touched.newpassword &&
                    errors.newpassword}
                </div>
                {isVisibleMismatch && (
                  <div className="main-input__error">{errors.mismatch}</div>
                )}
              </div>
              <div className="accountdetails__socials">
                <div className="accountdetails__personal-title">Socials</div>
                {socialsData.map((dataItem, idx) => (
                  <SocialItem
                    dataItem={dataItem}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    key={idx}
                  />
                ))}
                <div
                  className="accountdetails__addbtn"
                  onClick={() => setAddSocialPanel(true)}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0625 2.25C10.1341 2.25 8.24907 2.82183 6.64569 3.89317C5.04232 4.96451 3.79263 6.48726 3.05468 8.26884C2.31672 10.0504 2.12364 12.0108 2.49985 13.9021C2.87605 15.7934 3.80465 17.5307 5.16821 18.8943C6.53178 20.2579 8.26906 21.1865 10.1604 21.5627C12.0517 21.9389 14.0121 21.7458 15.7937 21.0078C17.5752 20.2699 19.098 19.0202 20.1693 17.4168C21.2407 15.8134 21.8125 13.9284 21.8125 12C21.8098 9.41498 20.7817 6.93661 18.9538 5.10872C17.1259 3.28084 14.6475 2.25273 12.0625 2.25ZM12.0625 20.25C10.4308 20.25 8.83576 19.7661 7.47905 18.8596C6.12234 17.9531 5.06492 16.6646 4.4405 15.1571C3.81608 13.6496 3.6527 11.9908 3.97103 10.3905C4.28935 8.79016 5.07509 7.32015 6.22887 6.16637C7.38266 5.01259 8.85267 4.22685 10.453 3.90852C12.0534 3.59019 13.7122 3.75357 15.2196 4.37799C16.7271 5.00242 18.0156 6.05984 18.9221 7.41655C19.8286 8.77325 20.3125 10.3683 20.3125 12C20.31 14.1873 19.44 16.2843 17.8934 17.8309C16.3468 19.3775 14.2498 20.2475 12.0625 20.25ZM16.5625 12C16.5625 12.1989 16.4835 12.3897 16.3428 12.5303C16.2022 12.671 16.0114 12.75 15.8125 12.75H12.8125V15.75C12.8125 15.9489 12.7335 16.1397 12.5928 16.2803C12.4522 16.421 12.2614 16.5 12.0625 16.5C11.8636 16.5 11.6728 16.421 11.5322 16.2803C11.3915 16.1397 11.3125 15.9489 11.3125 15.75V12.75H8.3125C8.11359 12.75 7.92283 12.671 7.78217 12.5303C7.64152 12.3897 7.5625 12.1989 7.5625 12C7.5625 11.8011 7.64152 11.6103 7.78217 11.4697C7.92283 11.329 8.11359 11.25 8.3125 11.25H11.3125V8.25C11.3125 8.05109 11.3915 7.86032 11.5322 7.71967C11.6728 7.57902 11.8636 7.5 12.0625 7.5C12.2614 7.5 12.4522 7.57902 12.5928 7.71967C12.7335 7.86032 12.8125 8.05109 12.8125 8.25V11.25H15.8125C16.0114 11.25 16.2022 11.329 16.3428 11.4697C16.4835 11.6103 16.5625 11.8011 16.5625 12Z"
                      fill="#29ABE2"
                    />
                  </svg>
                  <div className="accountdetails__addbtn-title">
                    You can add your social messenger
                  </div>
                </div>
                <button
                  className="loginpanel__button accountdetails__button"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => setVisibleMismatch(true)}
                >
                  Save Change
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {activeAddSocialPanel && (
        <AddSocial setAddSocialPanel={setAddSocialPanel} />
      )}
    </div>
  );
};
