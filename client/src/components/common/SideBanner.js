import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import backgroundImage from "../../assets/bg-img.png";
import bubbleImage from "../../assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  bubbleStyle: {
    height: "67px",
    left: "17%",
    position: "absolute",
    top: "27%",
    width: "67px",
    "@media (max-width: 568px)": {
      left: "15%"
    }
  },
  image: {
    height: "100vh",
    width: "40vw"
  },
  container: {
    height: "100vh",
    width: "40vw"
  },
  overlay: {
    background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
    height: "100vh",
    left: 0,
    opacity: 0.85,
    position: "absolute",
    top: 0,
    width: "40vw"
  },
  text: {
    color: "#fff",
    font: "normal 26px/40px Open Sans",
    left: "10%",
    position: "absolute",
    textAlign: "center",
    top: "40%",
    whiteSpace: "pre-line",
    width: "19%",
    wordBreak: "break-all",
    "@media (max-width: 568px)": {
      left: "5%",
      width: "30%",
      wordBreak: "normal"
    },
  }
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <img
        alt="Background"
        src={backgroundImage}
        className={classes.image}
      />

      <div className={classes.overlay} />

      <img
        alt="Bubble"
        src={bubbleImage}
        className={classes.bubbleStyle}
      />

      <p className={classes.text}>
        Converse with anyone
        with any language
      </p>
    </Grid>
  );
};

export { SideBanner };