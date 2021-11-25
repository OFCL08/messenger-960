import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "../../store/utils/thunkCreators";
import { Box, Grid, TextField } from "@material-ui/core";
import { SideBanner } from "../common/SideBanner";
import { TopBarRedirect } from "../common/TopBarRedirect";
import { FormCard } from "../common/FormCard";

const useStyles = makeStyles(() => ({
  container: {
    width: "60vw",
    "@media (max-width: 568px)": {
      width: "100vw",
    },
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
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
    <Grid container>
      <SideBanner />

      <Box className={classes.container}>
        <TopBarRedirect
          buttonText="Login"
          legendText="Already have an account?"
          path="/login"
        />

        <FormCard
          isLogin={false}
          firstInput={(
            <TextField
              aria-label="e-mail address"
              label="E-mail address"
              name="email"
              required
              type="email"
            />
          )}
          secondInput={(
            <TextField
              aria-label="password"
              label="Password"
              name="password"
              type="password"
              inputProps={{ minLength: 6 }}
              required
            />
          )}
          formTitle="Create an account."
          onSubmitForm={handleRegister}
          submitButtonText="Create"
        />
      </Box>
    </Grid>
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
