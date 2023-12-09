import "./upload.css";
import NavUpload from "../../components/Nav-upload.jsx";
import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [image, setImage] = useState();
  const [progressBar, setProgressBar] = useState(0);

  const handleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    setImage(URL.createObjectURL(file));
    formdata.append("file", file);
    axios
      .post("url", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          setProgressBar(Math.round(100 * event.loaded) / event.total);
        },
      })
      .then((res) => setImage(URL.createObjectURL(file)))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center vh-100 bg-dark">
      <NavUpload />
      <div className="bg-white p-5 rounded w-50 vh-80">
        <input type="file" onChange={handleFile} />
        <br /> <br />
        <div className="progress">
          <div
            className="progress-bar progress-bar-stripped progress-bar-animated"
            role="progressbar"
            aria-label="progressbar"
            aria-valuenow={progressBar}
            aria-aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>
        <br />
        {image && <img src={image} className="w-75 h-75"></img>}
      </div>
    </div>
  );
}

export default Upload;
