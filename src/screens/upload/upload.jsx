import React, { useState } from "react";
import axios from "axios";
import "./upload.css";
import NavUpload from "../../components/Nav-upload.jsx";

function Upload() {
  const [image, setImage] = useState("");
  const [progressBar, setProgressBar] = useState(0);

  const handleUrl = (event) => {
    const url = event.target.value;
    setImage(url);

    // Perform the upload based on the URL (you may need to adjust this logic)
    if (url) {
      const formData = new FormData();
      formData.append("file", url);

      uploadImage(formData);
    }
  };

  const uploadImage = (formData) => {
    axios
      .post("YOUR_UPLOAD_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          setProgressBar(Math.round((100 * event.loaded) / event.total));
        },
      })
      .then((res) => {
        // Handle successful upload, if needed
        console.log("File uploaded successfully:", res.data);
      })
      .catch((err) => {
        console.error("Error uploading file:", err);
      });
  };

  return (
    <div className="d-flex justify-content-center vh-100 bg-dark">
      <div className="bg-white p-5 rounded w-50 vh-80">
        {/* Remove the file input */}
        {/* <input type="file" onChange={handleFile} />
        <br /> <br /> */}
        <input type="text" placeholder="Paste image URL" onChange={handleUrl} />
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
        {image && <img src={image} className="w-75 h-75" alt="Uploaded" />}
      </div>
    </div>
  );
}

export default Upload;
