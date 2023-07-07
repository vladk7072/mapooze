import { Formik } from "formik";
import { FC } from "react";
import { IPutUpForExchangeErrors } from "../../../../types/AccountPanel/LandsTypes/LandsTypes";

export const ForExchange: FC = () => {
  return (
    <div className="saleplace__general">
      <div className="saleplace__general-subtitle">Put up for exchange</div>
      <Formik
        initialValues={{
          exchangeValue: 0,
        }}
        validate={(values) => {
          const errors = {} as IPutUpForExchangeErrors;
          if (!values.exchangeValue) {
            errors.exchangeValue = "Set a put up for exchange";
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
            <div className="lands__sell-box">
              <input
                name="exchangeValue"
                id="exchangeValue"
                className="lands__sellinput"
                placeholder="exchangeValue"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.exchangeValue}
                type="number"
                maxLength={5}
              />
              <button className="lands__button" type="submit">
                Exchange
              </button>
            </div>
            <div className="main-input__error lands__error">
              {errors.exchangeValue && touched.exchangeValue && errors.exchangeValue}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
