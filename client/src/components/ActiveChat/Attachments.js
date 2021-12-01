import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Image } from "cloudinary-react";
import { config } from "../../config/config";

const useStyles = makeStyles(() => ({
  attachmentContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    borderRadius: "10px 10px 10px 0px",
    height: 150,
    width: 150
  }
}));

const Attachments = ({ images = [] }) => {
  const classes = useStyles();

  if (images && images.length) {
    return (
      <Grid className={classes.attachmentContainer}>
        {images.map((image) => (
          <Image
            cloudName={config.cloud_name}
            publicId={image}
            className={classes.image}
          />
        ))}
      </Grid>
    );
  }

  return null;
};

export { Attachments };
