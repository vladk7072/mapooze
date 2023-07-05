import * as Yup from "yup";

export const validationSchemaLoginPanel = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .test(
      "lowercase",
      "Password must contain at least one lowercase character",
      (value) => /[a-z]/.test(value ?? "")
    )
    .test(
      "uppercase",
      "Password must contain at least one uppercase character",
      (value) => /[A-Z]/.test(value ?? "")
    )
    .test("number", "Password must contain at least one number", (value) =>
      /[0-9]/.test(value ?? "")
    )
    .test(
      "whitespace",
      "Password must not contain whitespace",
      (value) => !/\s/.test(value ?? "")
    )
    .required("Password is required"),
});
export const validationSchemaResetPassword = Yup.object().shape({
  repassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .test(
      "lowercase",
      "Password must contain at least one lowercase character",
      (value) => /[a-z]/.test(value ?? "")
    )
    .test(
      "uppercase",
      "Password must contain at least one uppercase character",
      (value) => /[A-Z]/.test(value ?? "")
    )
    .test("number", "Password must contain at least one number", (value) =>
      /[0-9]/.test(value ?? "")
    )
    .test(
      "whitespace",
      "Password must not contain whitespace",
      (value) => !/\s/.test(value ?? "")
    )
    .required("Password is required"),
  newpassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .test(
      "lowercase",
      "Password must contain at least one lowercase character",
      (value) => /[a-z]/.test(value ?? "")
    )
    .test(
      "uppercase",
      "Password must contain at least one uppercase character",
      (value) => /[A-Z]/.test(value ?? "")
    )
    .test("number", "Password must contain at least one number", (value) =>
      /[0-9]/.test(value ?? "")
    )
    .test(
      "whitespace",
      "Password must not contain whitespace",
      (value) => !/\s/.test(value ?? "")
    )
    .required("Password is required"),
});
