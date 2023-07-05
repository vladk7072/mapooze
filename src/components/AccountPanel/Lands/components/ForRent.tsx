import { Formik } from "formik";
import { FC } from "react";
import { IForRentErrors } from "../../../../types/AccountPanel/LandsTypes/LandsTypes";
import InputMask from "react-input-mask";

export const ForRent: FC = () => {
  return (
    <div className="saleplace__general">
      <div className="saleplace__general-subtitle">Offer for rent</div>
      <Formik
        initialValues={{
          start: "",
          end: "",
          rate: "",
        }}
        validate={(values) => {
          const errors = {} as IForRentErrors;
          if (!values.start) {
            errors.start = "Required";
          }
          if (!values.end) {
            errors.end = "Required";
          }
          if (!values.rate) {
            errors.rate = "Required";
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
            <div className="lands__rent">
              <div>
                <div className="form-item">
                  <InputMask
                    mask="99/99/99"
                    name="start"
                    id="start"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.start}
                    className="form-item__input"
                    placeholder="Start Day"
                  />
                  <label htmlFor="start">Start Day</label>
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
                <div className="main-input__error">
                  {errors.start && touched.start && errors.start}
                </div>
              </div>

              <div>
                <div className="form-item">
                  <InputMask
                    name="end"
                    id="end"
                    className="form-item__input"
                    mask="99/99/99"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.end}
                    placeholder="End Day"
                  />
                  <label htmlFor="end">End Day</label>
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
                <div className="main-input__error">
                  {errors.end && touched.end && errors.end}
                </div>
              </div>

              <div>
                <div className="form-item">
                  <InputMask
                    mask="99%"
                    name="rate"
                    id="rate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rate}
                    className="form-item__input"
                    placeholder="test"
                  />
                  <label htmlFor="rate">% Rate</label>
                </div>
                <div className="main-input__error">
                  {errors.rate && touched.rate && errors.rate}
                </div>
              </div>
            </div>
            <button
              className="lands__button"
              type="submit"
              disabled={isSubmitting}
            >
              Rent Out
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
