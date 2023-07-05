import { FC } from "react";
import { Field, Formik } from "formik";
import InputMask from "react-input-mask";
import { IPriceToSellErrors } from "../../../../types/AccountPanel/LandsTypes/LandsTypes";

export const PriceToSell: FC = () => {
  return (
    <div className="saleplace__general">
      <div className="saleplace__general-subtitle">
      Set a Price to Sell
      </div>
      <Formik
        initialValues={{
          value: 0,
        }}
        validate={(values) => {
          const errors = {} as IPriceToSellErrors;
          if (!values.value) {
            errors.value = "Set a Price to Sell";
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
          <form onSubmit={handleSubmit} className="lands__sell">
            <input
              name="value"
              id="value"
              className="lands__sellinput"
              placeholder="value"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value}
              type="number"
              maxLength={5}
            />
            <button
              className="lands__button"
              type="submit"
              disabled={isSubmitting}
            >
              Offer for Sale
            </button>
            <div className="main-input__error lands__error">
              {errors.value && touched.value && errors.value}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
