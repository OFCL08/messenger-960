import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: "#3A8DFF",
    font: "normal 600 14px/19px Open Sans",
    marginLeft: 64,
    textAlign: "center"
  },
  row: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    padding: "46px 42px 0 0",
    width: "100%"
  },
  legendText: {
    color: "#B0B0B0",
    font: "normal 400 14px/19px Open Sans",
    textAlign: "center"
  },
}));

const TopBarRedirect = ({
  buttonText = "",
  legendText = "",
  path = ""
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container item className={classes.row}>
      <Typography className={classes.legendText}>
        {legendText}
      </Typography>

      <Button
        className={classes.buttonStyle}
        onClick={() => history.push(path)}
      >
        {buttonText}
      </Button>
    </Grid>
  );
};

export { TopBarRedirect };
