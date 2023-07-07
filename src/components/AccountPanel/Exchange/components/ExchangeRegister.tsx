import { Field, Formik } from "formik";
import { FC, useEffect, useRef, useState } from "react";
import { IExchangeErrors } from "../../../../types/AccountPanel/ExchangeTypes/ExchangeTypes";
import { dataLands } from "../exchange.data";

export const ExchangeRegister: FC = () => {
  const [isActiveLandList, setActiveLandList] = useState(false);
  const [selectLand, setSelectLand] = useState<null | number>(null);

  const selectLandHandler = (idx: number) => {
    setSelectLand(idx);
    setActiveLandList(false);
  };

  const youLandRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        youLandRef.current &&
        !youLandRef.current.contains(event.target as Node)
      ) {
        setActiveLandList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="saleplace__general saleplace__general--pt28">
      <Formik
        initialValues={{
          checkbox: false,
          firstPrice: 10,
          bid: 10,
        }}
        validate={(values) => {
          const errors = {} as IExchangeErrors;
          if (!values.checkbox) {
            errors.checkbox = "Need your agreement";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
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
            <div className="saleplace__general-trials">
              <div className="form-item">
                <input
                  name="firstPrice"
                  id="firstPrice"
                  type="number"
                  defaultValue="10"
                  className="form-item__input"
                  placeholder="Ваш номер телефона"
                />
                <label htmlFor="firstPrice">Land Price</label>
                <svg
                  className="saleplace__svg"
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_363_19408)">
                    <path
                      d="M7.63456 18.297L0.986695 15.045L7.62853 24L8.62636 22.6545V17.8103L7.63456 18.297ZM7.62853 0L0 13.7144H15.2572L7.62853 0Z"
                      fill="#29ABE2"
                    />
                    <path
                      d="M15.2571 13.7347L7.62842 0V13.7347H15.2571Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M7.6992 10.8395L7.66926 10.8252L4.53456 12.7741L0.989258 15.0441L7.67599 18.3252L7.70594 18.3109L8.69703 17.825V11.3291L7.6992 10.8395Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M11.6589 13.4512L7.69913 10.8395L7.66919 10.8252L7.67593 18.3252L7.70587 18.3109L14.238 15.0795L11.6589 13.4512Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M7.62856 9.98988L7.59862 9.97559L0.000732422 13.7256H0.00751625L7.60535 17.4756L7.63529 17.4613L8.62639 16.9754V10.4795L7.62856 9.98988Z"
                      fill="#1F7EA6"
                    />
                    <path
                      d="M7.6345 18.2971L7.62842 24.0001L14.275 15.0391L7.6345 18.2971Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M15.243 13.7256L7.62858 9.98988L7.59863 9.97559L7.60537 17.4756L7.63531 17.4613L15.2498 13.7256H15.243Z"
                      fill="#1D7296"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_363_19408">
                      <rect width="15.2627" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="form-item">
                <input
                  name="bid"
                  id="bid"
                  type="number"
                  defaultValue="10"
                  className="form-item__input"
                  placeholder="Ваш номер телефона"
                  style={{ color: "#FF0000" }}
                />
                <label htmlFor="bid"></label>
                <svg
                  className="saleplace__svg"
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_363_19408)">
                    <path
                      d="M7.63456 18.297L0.986695 15.045L7.62853 24L8.62636 22.6545V17.8103L7.63456 18.297ZM7.62853 0L0 13.7144H15.2572L7.62853 0Z"
                      fill="#29ABE2"
                    />
                    <path
                      d="M15.2571 13.7347L7.62842 0V13.7347H15.2571Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M7.6992 10.8395L7.66926 10.8252L4.53456 12.7741L0.989258 15.0441L7.67599 18.3252L7.70594 18.3109L8.69703 17.825V11.3291L7.6992 10.8395Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M11.6589 13.4512L7.69913 10.8395L7.66919 10.8252L7.67593 18.3252L7.70587 18.3109L14.238 15.0795L11.6589 13.4512Z"
                      fill="#1E789E"
                    />
                    <path
                      d="M7.62856 9.98988L7.59862 9.97559L0.000732422 13.7256H0.00751625L7.60535 17.4756L7.63529 17.4613L8.62639 16.9754V10.4795L7.62856 9.98988Z"
                      fill="#1F7EA6"
                    />
                    <path
                      d="M7.6345 18.2971L7.62842 24.0001L14.275 15.0391L7.6345 18.2971Z"
                      fill="#2493C2"
                    />
                    <path
                      d="M15.243 13.7256L7.62858 9.98988L7.59863 9.97559L7.60537 17.4756L7.63531 17.4613L15.2498 13.7256H15.243Z"
                      fill="#1D7296"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_363_19408">
                      <rect width="15.2627" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className="saleplace__general-trial saleplace__general-trial-select exchange__select"
              style={{ marginTop: 34 }}
              ref={youLandRef}
            >
              <div
                className="saleplace__general-trial-inputbox saleplace__general-select"
                onClick={() => setActiveLandList(true)}
              >
                <span
                  className={
                    isActiveLandList || selectLand
                      ? "addwallet__span addwallet__span--active"
                      : "addwallet__span"
                  }
                >
                  Your Land
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
                    {dataLands[selectLand].item}
                  </div>
                )}
              </div>
              {isActiveLandList && (
                <ul className="saleplace__general-select-list addwallet__list exchange__list">
                  {dataLands.map((el, idx) => (
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

            <div className="main-input__checkbox" style={{marginTop: 18}}>
              <label
                className="main-input__checkbox-label main-input__checkbox-label--static"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z"
                      fill="#29ABE2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 4C1 2.34315 2.34315 1 4 1H18C19.6569 1 21 2.34315 21 4V18C21 19.6569 19.6569 21 18 21H4C2.34315 21 1 19.6569 1 18V4Z"
                      stroke="#29ABE2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
    </div>
  );
};
