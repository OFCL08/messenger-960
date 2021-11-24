import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../store/utils/thunkCreators";
import { BaseContainer } from "../common/BaseContainer";

const SignUp = (props) => {
  const { user, register } = props;

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <BaseContainer
      isLogin={false}
      topBarButtonText="Login"
      topLegendText="Already have an account?"
      topPath="/login"
      firstInputProps={{
        "aria-label": "e-mail address",
        "label": "E-mail address",
        "name": "email",
        "type": "email",
        "required": "true"
      }}
      secondInputProps={{
        "aria- label": "password",
        "label": "Password",
        "name": "password",
        "type": "password",
        "inputProps": "{{ minLength: 6 }}",
        "required": "true"
      }}
      formTitle="Create an account."
      onSubmitForm={handleRegister}
      submitButtonText="Create"
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
