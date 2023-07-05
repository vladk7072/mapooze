import { FC } from "react";
import { Field, Formik } from "formik";
import { IAdverstingsErrors } from "../../../../types/AccountPanel/LandsTypes/LandsTypes";

export const Advertising: FC = () => {
  return (
    <div className="saleplace__general">
      <div className="saleplace__general-subtitle">Advertising</div>
      <Formik
        initialValues={{
          advcheck: false,
        }}
        validate={(values) => {
          const errors = {} as IAdverstingsErrors;
          if (!values.advcheck) {
            errors.advcheck = "Need your agreement";
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
            <div
              className="main-input__checkbox"
              style={{ marginBottom: 29, marginTop: 18 }}
            >
              <label
                className="main-input__checkbox-label main-input__checkbox-label--static"
                htmlFor="advcheck"
                style={{ color: "#fff" }}
              >
                {values.advcheck ? (
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
                  id="advcheck"
                  name="advcheck"
                  type="checkbox"
                  className="main-input__check"
                />
                <div className="main-input__check-title">
                  Your <a href="#">Advertising</a> (you can select it in main menu)
                </div>
              </label>
              <div className="main-input__error" style={{ marginBottom: 8 }}>
                {errors.advcheck && touched.advcheck && errors.advcheck}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
