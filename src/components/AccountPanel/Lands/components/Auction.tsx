import { FC } from "react";
import { Field, Formik } from "formik";
import InputMask from "react-input-mask";
import { ILandsErrors } from "../../../../types/AccountPanel/LandsTypes/LandsTypes";

export const Auction: FC = () => {
  return (
    <div className="saleplace__general">
      <div className="saleplace__general-subtitle">Auction</div>
      <Formik
        initialValues={{
          startDay: "",
          endDay: "",
          startBid: "",
          endBid: "",
          checkbox: false,
        }}
        validate={(values) => {
          const errors = {} as ILandsErrors;
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
                <InputMask
                  mask="99/99/99"
                  name="startDay"
                  id="startDay"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.startDay}
                  className="form-item__input"
                  placeholder="Start Day"
                />
                <label htmlFor="startDay">Start Day</label>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="saleplace__svg"
                >
                  <path
                    d="M6.945 11.688V6.354H6.312C5.85864 6.59567 5.42049 6.86484 5 7.16V7.855C5.375 7.598 5.969 7.235 6.258 7.078H6.27V11.688H6.945ZM8.133 10.383C8.18 11.023 8.727 11.789 9.836 11.789C11.094 11.789 11.836 10.723 11.836 8.918C11.836 6.984 11.055 6.25 9.883 6.25C8.957 6.25 8.086 6.922 8.086 8.059C8.086 9.219 8.91 9.829 9.762 9.829C10.508 9.829 10.992 9.453 11.145 9.039H11.172C11.168 10.355 10.711 11.203 9.867 11.203C9.203 11.203 8.859 10.753 8.817 10.383H8.133ZM11.086 8.066C11.086 8.762 10.527 9.246 9.902 9.246C9.301 9.246 8.758 8.863 8.758 8.046C8.758 7.223 9.34 6.836 9.926 6.836C10.559 6.836 11.086 7.234 11.086 8.066Z"
                    fill="#29ABE2"
                  />
                  <path
                    d="M4 0C4.13261 0 4.25979 0.0526784 4.35355 0.146447C4.44732 0.240215 4.5 0.367392 4.5 0.5V1H12.5V0.5C12.5 0.367392 12.5527 0.240215 12.6464 0.146447C12.7402 0.0526784 12.8674 0 13 0C13.1326 0 13.2598 0.0526784 13.3536 0.146447C13.4473 0.240215 13.5 0.367392 13.5 0.5V1H14.5C15.0304 1 15.5391 1.21071 15.9142 1.58579C16.2893 1.96086 16.5 2.46957 16.5 3V14C16.5 14.5304 16.2893 15.0391 15.9142 15.4142C15.5391 15.7893 15.0304 16 14.5 16H2.5C1.96957 16 1.46086 15.7893 1.08579 15.4142C0.710714 15.0391 0.5 14.5304 0.5 14V3C0.5 2.46957 0.710714 1.96086 1.08579 1.58579C1.46086 1.21071 1.96957 1 2.5 1H3.5V0.5C3.5 0.367392 3.55268 0.240215 3.64645 0.146447C3.74021 0.0526784 3.86739 0 4 0ZM1.5 4V14C1.5 14.2652 1.60536 14.5196 1.79289 14.7071C1.98043 14.8946 2.23478 15 2.5 15H14.5C14.7652 15 15.0196 14.8946 15.2071 14.7071C15.3946 14.5196 15.5 14.2652 15.5 14V4H1.5Z"
                    fill="#29ABE2"
                  />
                </svg>
              </div>
              <div className="form-item">
                <InputMask
                  name="endDay"
                  id="endDay"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.endDay}
                  className="form-item__input"
                  mask="99/99/99"
                  placeholder="End Day"
                />
                <label htmlFor="endDay">End Day</label>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="saleplace__svg"
                >
                  <path
                    d="M6.945 11.688V6.354H6.312C5.85864 6.59567 5.42049 6.86484 5 7.16V7.855C5.375 7.598 5.969 7.235 6.258 7.078H6.27V11.688H6.945ZM8.133 10.383C8.18 11.023 8.727 11.789 9.836 11.789C11.094 11.789 11.836 10.723 11.836 8.918C11.836 6.984 11.055 6.25 9.883 6.25C8.957 6.25 8.086 6.922 8.086 8.059C8.086 9.219 8.91 9.829 9.762 9.829C10.508 9.829 10.992 9.453 11.145 9.039H11.172C11.168 10.355 10.711 11.203 9.867 11.203C9.203 11.203 8.859 10.753 8.817 10.383H8.133ZM11.086 8.066C11.086 8.762 10.527 9.246 9.902 9.246C9.301 9.246 8.758 8.863 8.758 8.046C8.758 7.223 9.34 6.836 9.926 6.836C10.559 6.836 11.086 7.234 11.086 8.066Z"
                    fill="#29ABE2"
                  />
                  <path
                    d="M4 0C4.13261 0 4.25979 0.0526784 4.35355 0.146447C4.44732 0.240215 4.5 0.367392 4.5 0.5V1H12.5V0.5C12.5 0.367392 12.5527 0.240215 12.6464 0.146447C12.7402 0.0526784 12.8674 0 13 0C13.1326 0 13.2598 0.0526784 13.3536 0.146447C13.4473 0.240215 13.5 0.367392 13.5 0.5V1H14.5C15.0304 1 15.5391 1.21071 15.9142 1.58579C16.2893 1.96086 16.5 2.46957 16.5 3V14C16.5 14.5304 16.2893 15.0391 15.9142 15.4142C15.5391 15.7893 15.0304 16 14.5 16H2.5C1.96957 16 1.46086 15.7893 1.08579 15.4142C0.710714 15.0391 0.5 14.5304 0.5 14V3C0.5 2.46957 0.710714 1.96086 1.08579 1.58579C1.46086 1.21071 1.96957 1 2.5 1H3.5V0.5C3.5 0.367392 3.55268 0.240215 3.64645 0.146447C3.74021 0.0526784 3.86739 0 4 0ZM1.5 4V14C1.5 14.2652 1.60536 14.5196 1.79289 14.7071C1.98043 14.8946 2.23478 15 2.5 15H14.5C14.7652 15 15.0196 14.8946 15.2071 14.7071C15.3946 14.5196 15.5 14.2652 15.5 14V4H1.5Z"
                    fill="#29ABE2"
                  />
                </svg>
              </div>
            </div>
            <div
              className="saleplace__general-trials"
              style={{ marginTop: 20 }}
            >
              <div className="form-item">
                <input
                  name="startBid"
                  id="startBid"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.startBid}
                  className="form-item__input"
                  placeholder="start bid"
                />
                <label htmlFor="startBid">Start Bid</label>
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
                  name="endBid"
                  id="endBid"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.endBid}
                  className="form-item__input"
                  placeholder="end bid"
                />
                <label htmlFor="endBid">End Bid</label>
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
              className="main-input__checkbox"
              style={{ marginBottom: 19, marginTop: 18 }}
            >
              <label
                className="main-input__checkbox-label main-input__checkbox-label--static"
                htmlFor="checkbox"
                style={{ color: "#fff" }}
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
                <div className="main-input__check-title">
                  I agree to <a href="#">auction agreement</a>
                </div>
              </label>
              <div className="main-input__error" style={{ marginBottom: 8 }}>
                {errors.checkbox && touched.checkbox && errors.checkbox}
              </div>
            </div>
            <button
              className="lands__button"
              type="submit"
              disabled={isSubmitting}
            >
              Activate Auction
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
