import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: theme.palette.black,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSizeTitle,
    fontWeight: theme.typography.fontWeightTitle,
  },
  formContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    paddingLeft: "11%",
    justifyContent: "center",
    "@media (max-width: 568px)": {
      alignItems: "center",
      display: "flex",
      padding: "0",
      width: "100vw"
    },
  },
  inputContainer: {
    width: "40vw",
    "@media (max-width: 568px)": {
      width: "80vw",
    },
  },
  inputStyle: {
    width: "100%"
  },
  submitButtonContainer: {
    display: "flex",
    marginTop: "8%",
    justifyContent: "center",
    width: "40vw"
  },
  submitButton: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "3px",
    color: theme.palette.white,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.submitButtonSize,
    fontWeight: theme.typography.fontWeightBold,
    height: "56px",
    textAlign: "center",
    width: "160px",
  },
}));

const FormCard = ({
  firstInput = <></>,
  formTitle = "",
  isLogin = true,
  onSubmitForm = () => { },
  secondInput = <></>,
  submitButtonText = ""
}) => {
  const classes = useStyles();

  function renderInput(input) {
    return (
      <Grid className={classes.inputContainer}>
        <FormControl
          className={classes.inputStyle}
          margin="normal"
          required
        >
          {input}
        </FormControl>
      </Grid>
    );
  }

  function renderExtraInput() {
    if (!isLogin) {
      return renderInput(
        <TextField
          aria-label="username"
          label="Username"
          name="username"
          type="text"
          required
        />
      );
    }

    return null;
  }

  return (
    <form onSubmit={onSubmitForm}>
      <Grid className={classes.formContainer}>
        <Typography className={classes.cardTitle}>
          {formTitle}
        </Typography>

        {renderExtraInput()}

        {renderInput(firstInput)}

        {renderInput(secondInput)}

        <Grid className={classes.submitButtonContainer}>
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            size="large"
          >
            {submitButtonText}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { FormCard };
