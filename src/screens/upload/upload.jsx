import "./upload.css";
import NavUpload from "../../components/Nav-upload.jsx";

function Upload({ posts }) {
  return (
    <div>
      <NavUpload />
      <h1>This is the Feed page</h1>
      <div>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}

export default Upload;
