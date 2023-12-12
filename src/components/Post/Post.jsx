import { useState } from "react";
import "./Post.css";
import Heart from "react-animated-heart";
import FloatingBottomNav from "../footer/FloatingBottomNav.jsx";

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  let petName = "";
  let petProfilePic = "";

  // pets.forEach((pet) => {
  //   if (pet.id === post.pet) {
  //     petName = pet.name;
  //     petProfilePic = pet.profile_img;
  //   }
  // });

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
        <img className="post-profile-pic" src={petProfilePic} alt={petName} />
        <h1>{petName}</h1>
      </div>
      <img className="post-image" src={post.post_image} alt={post.pet} />
      <p>{post.content}</p>
      <div className="post-socials">
        <Heart isClick={isLiked} onClick={handleLike} />
      </div>
      <FloatingBottomNav />
    </div>
  );
}

export default Post;
