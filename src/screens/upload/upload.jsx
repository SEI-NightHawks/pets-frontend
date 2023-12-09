import "./upload.css";
import NavUpload from "../../components/Nav-upload.jsx";

function Upload() {
  return (
    <div className="d-flex justify-content-center vh-100 bg-dark">
      <div className="bg-white p-5 rounded w-50 vh-80">
        <input type="file" onChange={handleFile} />
        <br /> <br />
      </div>
    </div>
  );
}

export default Upload;
