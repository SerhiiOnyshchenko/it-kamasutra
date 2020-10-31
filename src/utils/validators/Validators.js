import s from "./Validators.module.css";

export const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength30 = maxLength(30);
export const maxLength15 = maxLength(15);
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const minLength6 = minLength(6);

export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => (
  <>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={touched && ((error && s.inputRed) || (warning && s.inputRed))}
    />
    {touched &&
      ((error && <div className={s.divError}>{error}</div>) ||
        (warning && <div className={s.divWarning}>{warning}</div>))}
  </>
);
