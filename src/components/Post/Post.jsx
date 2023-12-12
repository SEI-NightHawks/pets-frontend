import { useState } from "react";
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
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div
          style={{ maxWidth: "600px" }}
          className="container bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg p-2"
        >
          <div>
            <span class="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
              Follow
            </span>
            <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
              {post.pet.name}
            </h1>
          </div>
          <img class="w-full cursor-pointer" src={post.post_image} alt="" />
          <div class="flex p-4 justify-between">
            <div class="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={post.pet.profile_img}
                alt={post.pet.name}
              />{" "}
              <h2 class="text-gray-800 font-bold cursor-pointer">
                {post.pet.name}
              </h2>
            </div>
            <div class="flex space-x-2">
              <div class="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-gray-600 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <span>22</span>
              </div>
              <div class="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>20</span>
              </div>
            </div>
          </div>
          <h2>{post.content}</h2>
        </div>
      </div>
    </div>
  );
}

export default Post;

// return (
//   <div className="post-container">
//     <div className="post-header">
//       <img
//         className="post-profile-pic"
//         src={post.pet.profile_img}
//         alt={post.pet.name}
//       />
//       <h1>{post.pet.name}</h1>
//     </div>
//     <img className="post-image" src={post.post_image} alt={post.pet} />
//     <p>{post.content}</p>
//     <div className="post-socials">
//       <Heart isClick={isLiked} onClick={handleLike} />
//     </div>
//   </div>
// );
