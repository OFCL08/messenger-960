import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../../store/utils/thunkCreators";
import { SideBanner } from "../common/SideBanner";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import { TopBarRedirect } from "../common/TopBarRedirect";
import { FormCard } from "../common/FormCard";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "60vw",
    "@media (max-width: 568px)": {
      width: "100vw",
    },
  },
  forgotButton: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.forgotButtonSize,
    fontWeight: theme.typography.fontWeightTitle,
    textAlign: "center"
  },
}));

const Login = (props) => {
  const classes = useStyles();
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
    <Grid container>
      <SideBanner />

      <Box className={classes.container}>
        <TopBarRedirect
          buttonText="Create account"
          legendText="Don't have an account?"
          path="register/"
        />

        <FormCard
          firstInput={(
            <TextField
              aria-label="username"
              label="E-mail address"
              name="username"
              type="text"
            />
          )}
          secondInput={(
            <TextField
              aria-label="password"
              label="Password"
              name="password"
              type="password"
              InputProps={{
                endAdornment: (
                  <Button position="end" className={classes.forgotButton}>
                    Forgot?
                  </Button>
                ),
              }}
            />
          )}
          formTitle="Welcome back!"
          onSubmitForm={handleLogin}
          submitButtonText="Login"
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
