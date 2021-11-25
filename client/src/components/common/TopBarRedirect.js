import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    borderRadius: "5px",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    height: "54px",
    marginLeft: "30px",
    textAlign: "center",
    width: "140px"
  },
  row: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    padding: "46px 42px 0 0",
    width: "100%"
  },
  legendText: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
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
