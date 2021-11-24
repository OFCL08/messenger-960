import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/utils/thunkCreators";
import { BaseContainer } from "../common/BaseContainer";

const Login = (props) => {
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <BaseContainer
      topBarButtonText="Create account"
      topLegendText="Don't have an account?"
      topPath="register/"
      firstInputProps={{
        "aria- label": "username",
        "label": "E-mail address",
        "name": "username",
        "type": "text"
      }}
      secondInputProps={{
        "aria- label": "password",
        "label": "Password",
        "name": "password",
        "type": "password"
      }}
      formTitle="Welcome back!"
      onSubmitForm={handleLogin}
      submitButtonText="Login"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
