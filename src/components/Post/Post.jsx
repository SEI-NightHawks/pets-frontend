import { useState } from "react";
import "./Post.css";
import Heart from "react-animated-heart";


function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      if (isLiked) {
        // await unlikePost(post.id);
        setIsLiked(false);
        console.log(`${post.pet} was unliked`);
      } else {
        // await likePost(post.id);
        setIsLiked(true);
        console.log(`${post.pet} was liked`);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img
          className="post-profile-pic"
          src={post.pet.profile_img}
          alt={post.pet.name}
        />
        <h1>{post.pet.name}</h1>
      </div>
      <img className="post-image" src={post.post_image} alt={post.pet} />
      <p>{post.content}</p>
      <div className="post-socials">
        <Heart isClick={isLiked} onClick={handleLike} />
      </div>
     
    </div>
  );
}

export default Post;
