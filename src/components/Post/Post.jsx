import { Link } from "react-router-dom";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post-container">
      <h2>{post.Name}</h2>
      {/* <Link to={`/${post._id}`}> */}
      <img className="post-image" src={post.image_url} alt={post.Name} />
      {/* </Link> */}
    </div>
  );
}

export default Post;
