import { useState } from "react";
import "./Post.css";
import Heart from "react-animated-heart";
import Comment from "../Comment";

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      if (isLiked) {
        // await unlikePost(post.id);
        setIsLiked(false);
        console.log(`${post.Name} was unliked`);
      } else {
        // await likePost(post.id);
        setIsLiked(true);
        console.log(`${post.Name} was liked`);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div className="post-container">
      <h2>{post.Name}</h2>
      <img className="post-image" src={post.image_url} alt={post.Name} />
      <div className="post-socials">
        <Heart isClick={isLiked} onClick={handleLike} />
        <Comment />
      </div>
    </div>
  );
}

export default Post;
