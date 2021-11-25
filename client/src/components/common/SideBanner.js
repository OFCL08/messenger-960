import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import backgroundImage from "../../assets/bg-img.png";
import bubbleImage from "../../assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  bubbleStyle: {
    height: "67px",
    left: "17%",
    maxHeight: "67px",
    maxWidth: "67px",
    position: "absolute",
    top: "27%",
    width: "67px",
    "@media (max-width: 568px)": {
      left: "15%"
    }
  },
  image: {
    height: "100vh",
    objectFit: "cover",
    maxWidth: "40vw",
    width: "40vw"
  },
  container: {
    height: "100vh",
    width: "40vw",
    "@media (max-width: 568px)": {
      display: "none"
    },
  },
  overlay: {
    background: theme.palette.overlayBackground,
    height: "100vh",
    left: 0,
    maxWidth: "40vw",
    opacity: 0.85,
    position: "absolute",
    top: 0,
    width: "40vw"
  },
  text: {
    color: theme.palette.white,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSizeTitle,
    fontWeight: theme.typography.fontWeightRegular,
    left: "10%",
    position: "absolute",
    textAlign: "center",
    top: "40%",
    whiteSpace: "pre-line",
    width: "19%",
  }
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Box
        alt="Background"
        className={classes.image}
        component="img"
        src={backgroundImage}
      />

      <Box
        className={classes.overlay}
      />

      <Box
        alt="Bubble"
        className={classes.bubbleStyle}
        component="img"
        src={bubbleImage}
      />

      <Typography className={classes.text}>
        Converse with anyone
        with any language
      </Typography>
    </Grid>
  );
};

export { SideBanner };