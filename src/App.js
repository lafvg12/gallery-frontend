import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import "./index.css";
import { Card } from "../src/components/Card";

async function getImages() {
  const images = await fetch("https://gallery-app-01.herokuapp.com/image/all");
  const imagesJson = await images.json();
  return imagesJson;
}

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then((images) => setImages(images));
  }, []);

  return (
    <div>
      <Navbar />
      {images.map((image) => (
        <div className="card">
          <Card data={image} />
        </div>
      ))}
    </div>
  );
}

export default App;
