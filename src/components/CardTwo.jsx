import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
//import itemData from "./itemData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 500,
  },
}));

const CardTwo = () => {
  const classes = useStyles();
  const [imagesCard, setImagesCard] = useState([]);

  async function getImagesCard() {
    const images = await fetch(
      "https://gallery-app-01.herokuapp.com/image/all"
    );
    const imagesJson = await images.json();
    return imagesJson;
  }
  useEffect(() => {
    getImagesCard().then((images) => {
      return setImagesCard(images);
    });
  }, []);
  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {imagesCard.map((item) => (
          <ImageListItem key={item.src} cols={item.cols || 1}>
            <img src={item.src} alt={item.width} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export { CardTwo };
