import React, { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Navbar from "./components/Navbar";
import "./index.css";
import Lottie from "react-lottie";
import * as animationData from "./animation.json";

async function getImages() {
  const images = await fetch("https://gallery-app-01.herokuapp.com/image/all");
  const imagesJson = await images.json();
  return imagesJson;
}

const buttonStyle = {
  display: "block",
  margin: "10px auto",
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then((images) => {
      return setImages(images);
    });
  }, []);

  return (
    <div>
      <Navbar />

      {images.length > 0 ? (
        <PhotoAlbum layout="masonry" photos={images} />
      ) : (
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      )}

      {/* {images.map((image) => (
        <div className="card">
          <Card data={image} />
        </div>
      ))} */}
    </div>
  );
}

export default App;
