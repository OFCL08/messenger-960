import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardTitle: {
    color: "#000",
    font: "normal 600 26px/40px Open Sans"
  },
  forgotButton: {
    color: "#3A8DFF",
    font: "normal 600 12px/16px Open Sans",
    textAlign: "center"
  },
  formContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    paddingLeft: "11%",
    justifyContent: "center"
  },
  inputContainer: {
    width: "40vw"
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
    backgroundColor: "#3A8DFF",
    borderRadius: "3px",
    height: "56px",
    width: "160px",
    color: "#FFF",
    font: "normal 700 16px/21px Open Sans",
    textAlign: "center"
  },
}));

const FormCard = ({
  firstInputProps = {},
  formTitle = "",
  isLogin = true,
  onSubmitForm = () => { },
  secondInputProps = {},
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

        {renderInput(
          <TextField
            {...firstInputProps}
          />
        )}

        {renderInput(
          <TextField
            {...secondInputProps}
            InputProps={{
              endAdornment: isLogin ? (
                <Button position="end" className={classes.forgotButton}>
                  Forgot?
                </Button>
              ) : null,
            }}
          />
        )}

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
