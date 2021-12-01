import React from "react";
import { Box, InputAdornment, Input, InputLabel, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import attachIcon from "../../assets/copy.svg";
import smileIcon from "../../assets/smile.svg";

const useStyles = makeStyles(() => ({
  attachIconStyle: {
    marginLeft: 20,
  },
  adornmentContainer: {
    height: '100%',
    width: '10%'
  },
}));

const InputImageAdornment = ({
  totalImages,
  onChangeTotalImages = function () { },
}) => {
  const classes = useStyles();

  function handleFileChange(event) {
    onChangeTotalImages(event);
  }

  return (
    <InputAdornment position="end" className={classes.adornmentContainer}>
      <Box
        alt="Smile"
        className={classes.attachIconStyle}
        component="img"
        src={smileIcon}
      />

      <InputLabel htmlFor="contained-button-file">
        <Badge badgeContent={totalImages} color="primary">
          <Box
            alt="Attach"
            className={classes.attachIconStyle}
            component="img"
            src={attachIcon}
          />
        </Badge>
      </InputLabel>

      <Input
        accept="image/*"
        id="contained-button-file"
        inputProps={{ multiple: true }}
        onChange={handleFileChange}
        style={{ display: "none" }}
        type="file"
      />
    </InputAdornment>
  );
};

export { InputImageAdornment };
