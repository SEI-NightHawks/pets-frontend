import React, { useState } from "react";
import "./upload.css";
import NavUpload from "../../components/Nav-upload.jsx";
import { createPost } from "../../services/posts.js";
import FloatingBottomNav from "../../components/footer/FloatingBottomNav.jsx";

function Upload() {
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [progressBar, setProgressBar] = useState(0);

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
      pet: 1,
    });
  };

  return (
    <div className="vh-90 d-flex flex-column justify-content-center align-items-center bg-light">
  <NavUpload />
  <div className="text-center w-75">
    <div className="bg-white p-3 p-md-5 rounded w-100 w-md-75">
      <h2 className="text-center mb-4">Upload Image</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Paste image URL"
        onChange={handleUrl}
      />
      <div className="progress mb-3">
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
      {image && (
        <img
          src={image}
          className="img-fluid mx-auto mt-3"
          alt="Uploaded"
          style={{ maxHeight: "300px" }}
        />
      )}
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Caption"
        value={content}
        onChange={handleContent}
      />
      <button
        className="btn custom-btn mt-3"
        onClick={handlePost}
      >
        Post
      </button>
      {caption && (
        <div className="mt-3">
          <strong>Caption:</strong> {caption}
        </div>
      )}
      <FloatingBottomNav />
    </div>
  </div>
</div>
  );
}

export default Upload;










// import React, { useState } from "react";
// import "./upload.css";
// import NavUpload from "../../components/Nav-upload.jsx";
// import { createPost } from "../../services/posts.js";
// import FloatingBottomNav from "../../components/footer/FloatingBottomNav.jsx";

// function Upload() {
//   const [image, setImage] = useState("");
//   const [content, setContent] = useState("");
//   const [caption, setCaption] = useState("");
//   const [progressBar, setProgressBar] = useState(0);

//   const handleUrl = (event) => {
//     const url = event.target.value;
//     setImage(url);
//   };

//   const handleContent = (event) => {
//     setContent(event.target.value);
//   };

//   const uploadImage = () => {
//     if (image) {
//       setProgressBar(100);
//     }
//   };

//   const handlePost = async () => {
//     uploadImage();

//     await createPost({
//       content,
//       post_image: image,
//       pet: 1,
//     });
//   };

//   return (
//     <>
//       <div>
//         <NavUpload />
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//           <div className="bg-white p-5 rounded w-75">
//             <h2 className="text-center mb-4">Upload Image</h2>
//             <input
//               type="text"
//               className="form-control mb-4"
//               placeholder="Paste image URL"
//               onChange={handleUrl}
//             />
//             <div className="progress">
//               <div
//                 className="progress-bar progress-bar-striped progress-bar-animated"
//                 role="progressbar"
//                 aria-label="progressbar"
//                 aria-valuenow={progressBar}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//                 style={{ width: `${progressBar}%` }}
//               ></div>
//             </div>
//             <br />
//             {image && (
//               <img src={image} className="w-100 h-auto mt-4" alt="Uploaded"
//               style={{ maxWidth: "100%", maxHeight: "300px"}}
//               />
//             )}
//             <br />
//             <input
//               type="text"
//               className="form-control mt-4"
//               placeholder="Caption"
//               value={content}
//               onChange={handleContent}
//             />
//             <button
//               className="btn custom-btn mt-4"
//               // style={{
//               //   borderRadius: "20px",
//               //   backgroundColor: "#0089AD",
//               //   color: "#fefefe",
//               //   maxWidth: "100%",
//               //   width: "100%",
//               //   border: "none",
//               //   transition: "background-color 0.3s ease-in-out",
//               // }}
//               onClick={handlePost}
            
//             >
//               Post
//             </button>
      
//             {caption && (
//               <div className="mt-4">
//                 <strong>Caption:</strong> {caption}
//               </div>
//             )}
//             <FloatingBottomNav />
//           </div>
          
//         </div>
      
//       </div>
//     </>
//   );
// }

// export default Upload;
