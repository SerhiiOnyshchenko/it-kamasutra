import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
import {
  alphaNumeric,
  email,
  maxLength15,
  maxLength30,
  minLength2,
  minLength6,
  renderField,
  required,
} from "../../utils/validators/Validators";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
const eye = <FontAwesomeIcon icon={faEye} />;

const LoginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.App}>
        <div className={s.login_wrapper}>
          <Field
            placeholder={"Email"}
            type={"text"}
            name={"email"}
            component={renderField}
            validate={[required, maxLength30, minLength2]}
            warn={email}
          />
        </div>
        <div className={s.pass_wrapper}>
          <Field
            placeholder={"Password"}
            type={passwordShown ? "text" : "password"}
            name={"password"}
            component={renderField}
            validate={[required, maxLength15, minLength6]}
            warn={alphaNumeric}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
        <div>
          <Field
            className={s.remember}
            type={"checkbox"}
            name={"remamberMe"}
            component={"input"}
          />{" "}
          <span className={s.span}>remember me</span>
        </div>
        <div>
          <button type="submit" disabled={submitting} className={s.neon_button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            className={s.neon_button}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Clear Values
          </button>
        </div>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const Sub = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile/12188" />;
  }
  return (
    <div className={s.wrapper}>
      <LoginReduxForm onSubmit={Sub} />
    </div>
  );
};
export default Login;
