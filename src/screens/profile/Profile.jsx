import React from "react";
import "./profile.css"; // Ensure this path points to your CSS file

const Profile = () => {
  const pets = [
    {
      post_image:
        "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
    },
    {
      post_image:
        "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
    },
    {
      post_image:
        "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
    },
    {
      post_image:
        "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
    },
    {
      post_image:
        "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
    },
  ];

  return (
    <div className="challenge">
      <div className="header">
        <h1>PETSTAGRAM</h1>
      </div>
      <div className="small-box-1">
        <img
          src="http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg"
          alt="Profile"
          className="profile-pic"
        />
      </div>
      <div className="small-box-2">
        <ul>
          <li>26 Posts</li>
          <li>10K followers</li>
          <li>0 following</li>
          <li>
            <button className="follow-btn-on-pp">Follow</button>
          </li>
        </ul>
      </div>
      <div className="small-box-3">
        <ul>
          <li>
            <span>Agility Champ</span>
          </li>
          <li>
            <span>Poser Pup</span>
          </li>
          <li>
            <span>Gentle Giant</span>
          </li>
          <li>
            <span>Mail Icon</span>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <ul className="image-list">
          {pets.map(pet => (
            <li>
              <img src={pet.post_image} alt="post" />
              <button className="like-btn">Like</button>
              <button className="love-btn">Love</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <span>
              <button className="post-btn-on-pp">Post</button>{" "}
            </span>
          </li>
          <li>
            <span>
              <button className="edit-profile-btn">Edit Profile</button>{" "}
            </span>
          </li>
        </ul>
      </div>
      <div className="footer">
        <span>Postgram @ All rights reserved 2023</span>
      </div>
    </div>
  );
};

export default Profile;

// import React from "react";
// import "./profile.css";

// const Profile = () => {
//   const posts = [
//     { imageUrl: "path-to-post1.jpg", caption: "Sunny day", likes: 120 },
//     { imageUrl: "path-to-post2.jpg", caption: "I mean business", likes: 250 },
//     // ... add more posts as needed
//   ];

//   return (
//     <div className="profileContainer">
//       <header className="profileHeader">
//         <img
//           src="path-to-profile-picture.jpg"
//           alt="Dumbledore"
//           className="profilePhoto"
//         />
//         <div className="profileStats">
//           <h2>DUMBLEDOOR (Boy)</h2>
//           <strong>26 Posts</strong>
//           <strong>10k Followers</strong>
//           <strong>0 Following</strong>
//         </div>
//         <button className="followButton">Follow</button>
//       </header>

//       <div className="postGrid">
//         {posts.map((post, index) => (
//           <div key={index} className="post">
//             <img src={post.imageUrl} alt={post.caption} className="postImage" />
//             <div className="postInfo">
//               <span className="likes">{post.likes} likes</span>
//               <span className="caption">{post.caption}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// // import "./profile.css";
// // import React from "react";
// // import styles from "./profile.css";

// // const Profile = () => {
// //   // Placeholder data, replace with your own data
// //   const posts = [
// //     { imageUrl: "path-to-post1.jpg", caption: "Sunny day", likes: 120 },
// //     { imageUrl: "path-to-post2.jpg", caption: "I mean business", likes: 250 },
// //     // Add more posts as needed
// //   ];

// //   return (
// //     <div className={styles.profileContainer}>
// //       <header className={styles.profileHeader}>
// //         <img
// //           src="path-to-profile-picture.jpg"
// //           alt="Dumbledore"
// //           className={styles.profilePhoto}
// //         />
// //         <div className={styles.profileStats}>
// //           <strong>967 Posts</strong>
// //           <strong>10k Followers</strong>
// //           <strong>0 Followings</strong>
// //         </div>
// //         <button className={styles.followButton}>Follow</button>
// //       </header>

// //       <div className={styles.postGrid}>
// //         {posts.map((post, index) => (
// //           <div key={index} className={styles.post}>
// //             <img src={post.imageUrl} alt={post.caption} />
// //             <div className={styles.postInfo}>
// //               <span className={styles.likes}>{post.likes} likes</span>
// //               <span className={styles.caption}>{post.caption}</span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;
