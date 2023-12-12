import React, { useState } from "react";
import "./upload.css";
import NavUpload from "../../components/Nav-upload.jsx";
import { createPost } from "../../services/posts.js";
import { useNavigate } from "react-router-dom";

function Upload({ primaryPet }) {
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [progressBar, setProgressBar] = useState(0);

  let navigate = useNavigate();

  const handleUrl = (event) => {
    const url = event.target.value;
    setImage(url);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const uploadImage = () => {
    if (image) {
      setProgressBar(100);
    }
  };

  const handlePost = async () => {
    uploadImage();

    await createPost({
      content,
      post_image: image,
      pet: primaryPet.id,
    });

    navigate("/feed");
  };

  return (
    <>
      <div>
        <NavUpload />
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="bg-white p-5 rounded w-50">
            <h2 className="text-center mb-4">Upload Image</h2>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Paste image URL"
              onChange={handleUrl}
            />
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-label="progressbar"
                aria-valuenow={progressBar}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${progressBar}%` }}
              ></div>
            </div>
            <br />
            {image && (
              <img src={image} className="w-100 h-auto mt-4" alt="Uploaded" />
            )}
            <br />
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Caption"
              value={content}
              onChange={handleContent}
            />
            <button
              className="btn btn-primary mt-4"
              style={{
                borderRadius: "20px",
                backgroundColor: "#0089AD",
                color: "#EAE0D7",
                width: "640px",
                border: "none",
              }}
              onClick={handlePost}
            >
              Post
            </button>
            {caption && (
              <div className="mt-4">
                <strong>Caption:</strong> {caption}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
