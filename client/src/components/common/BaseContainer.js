import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { SideBanner } from "./SideBanner";
import { TopBarRedirect } from "./TopBarRedirect";
import { FormCard } from "./FormCard";

const useStyles = makeStyles(() => ({
  container: {
    width: "60vw"
  },
}));

const BaseContainer = ({
  isLogin = true,
  firstInputProps = {},
  formTitle = "",
  onSubmitForm = () => { },
  secondInputProps = {},
  submitButtonText = "",
  topBarButtonText = "",
  topLegendText = "",
  topPath = ""
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <SideBanner />

      <Box className={classes.container}>
        <TopBarRedirect
          buttonText={topBarButtonText}
          legendText={topLegendText}
          path={topPath}
        />

        <FormCard
          firstInputProps={firstInputProps}
          formTitle={formTitle}
          isLogin={isLogin}
          onSubmitForm={onSubmitForm}
          secondInputProps={secondInputProps}
          submitButtonText={submitButtonText}
        />
      </Box>
    </Grid>
  )
};

export { BaseContainer };
