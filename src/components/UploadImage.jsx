import React, { useState } from "react";
import ImageUpload from "image-upload-react";
import "image-upload-react/dist/index.css";
import axios from "axios";

function UploadImage() {
  const [imageSrc, setImageSrc] = useState();

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  function capture(e) {
    let nameStudent = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    let config = {
      body: {
        file: imageSrc,
        title: nameStudent,
        description: description,
      },
    };

    axios
      .post(
        "https://gallery-app-01.herokuapp.com/image/upload/6265da6de1a2b518b53a804d",
        config.body,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        // if (response.status === 200) {
        //   const token = response.data.access_token;
        //   const id = response.data.user._id;
        //   window.localStorage.setItem("token", token);
        //   window.localStorage.setItem("id", id);

        // }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <ImageUpload
        handleImageSelect={handleImageSelect}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        style={{
          width: 400,
          height: 300,
          background: "black",
        }}
      />
      <form action="">
        <input type="text" name="name" id="name" placeholder="Name" />
        <input
          type="textArea"
          name="description"
          id="description"
          placeholder="Description"
        />
        <button type="button" onClick={capture}>
          Send
        </button>
      </form>
    </div>
  );
}

export { UploadImage };
