import React from 'react';
import FloatingBottomNav from '../../components/footer/FloatingBottomNav';

const Profile = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* Top Portion */}
      <div className="flex flex-col items-center justify-between mb-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            {/* Add your profile picture source */}
            <img
              src="https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_1280.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
     {/* User Name */}
     <p className="text-xl font-bold mb-2">Dumbledoor</p>
        {/* User Stats */}
        <ul class="hidden md:flex space-x-8 mb-4">
          <li>
            <span class="font-semibold mb-1 mr-1">6</span>
            Posts
          </li>

          <li>
            <span class="font-semibold mb-1 mr-1">50.5k</span>
            Followers
          </li>
          <li>
            <span class="font-semibold mb-1 mr-1">10</span>
            Following
          </li>
        </ul>
 {/* Bio */}
 <div className="text-center mb-6">
          <p className="text-lg font-semibold mb-2"></p>
          {/* Add your user's bio content here */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitashdjfkasdfd dfgsdfgsdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsd....</p>
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-3 py-2 rounded">
            Edit Profile
          </button>
          <button className="bg-green-500 text-white px-3 py-2 rounded">
            Post
          </button>
        </div>
      </div>

      {/* Bottom Portion - Photo Gallery */}
      <div className="grid grid-cols-3 gap-4 bg-red-500 max-w-2xl mx-auto">
        {/* Replace the following with your photo data */}
        <div className="relative overflow-hidden rounded">
          <img
            src="https://cdn.pixabay.com/photo/2018/11/15/17/47/halloween-3817698_1280.jpg"
            alt="Photo 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://media.istockphoto.com/id/187468574/photo/doberman-pinscher-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=O-j3o8qv_ejmWlEBErri3BNlVOrrJTLdf0UT7rkLthA="
            alt="Photo 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://media.istockphoto.com/id/1223511966/photo/beautiful-tan-and-black-german-pinscher.jpg?s=612x612&w=0&k=20&c=8CxVvRyFA7klgRgwIKEbGInoTQhwoGoQ1kn_QgX8R_Q="
            alt="Photo 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://t3.ftcdn.net/jpg/01/41/05/84/360_F_141058449_210jjcd4uVxsG7UBqPsDACWEDrS9ZOPR.jpg"
            alt="Photo 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://t3.ftcdn.net/jpg/00/85/90/18/360_F_85901816_rqnXT1PW6xeMtBiIg8UmEJPZwUif9Uwr.jpg"
            alt="Photo 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://static.wixstatic.com/media/e5f819_01126f3b2de9401baa38dfa9ec5676f8~mv2.jpg/v1/fill/w_960,h_637,al_c,q_85,enc_auto/Hasko%202018%20.jpg"
            alt="Photo 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://media.istockphoto.com/id/182467304/photo/doberman-pinscher-dogs-outdoors-in-winter-snow-strong-intelligent-noble.jpg?s=612x612&w=0&k=20&c=XgDBQ5JWIO4-uPmK6JVEgOP-FnkA-XfXq75FPkU-Z20="
            alt="Photo 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Dobermann_puppy.jpg/331px-Dobermann_puppy.jpg"
            alt="Photo 8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://www.pumpkin.care/wp-content/uploads/2021/03/Doberman-Hero.jpg"
            alt="Photo 9"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/images/blog/Thumbnails/breed-spotlight/doberman-pinscher.webp"
            alt="Photo 10"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://ppg-web-external.s3.amazonaws.com/uploads/zinnia/Doberman.jpg"
            alt="Photo 11"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Doberman-12833551920.jpg"
            alt="Photo 12"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Add more photo items as needed */}
      </div>
      <FloatingBottomNav />
    </div>
  );
}; 

export default Profile;







// import React from "react";
// import "./profile.css"; // Ensure this path points to your CSS file

// const Profile = () => {
//   const pets = [
//     {
//       post_image:
//         "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
//     },
//     {
//       post_image:
//         "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
//     },
//     {
//       post_image:
//         "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
//     },
//     {
//       post_image:
//         "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
//     },
//     {
//       post_image:
//         "http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg",
//     },
//   ];

//   return (
//     <div className="challenge">
//       <div className="header">
//         <h1>PETSTAGRAM</h1>
//       </div>
//       <div className="small-box-1">
//         <img
//           src="http://theawesomedaily.com/wp-content/uploads/2017/04/cutest-cat-in-the-world-47-1.jpg"
//           alt="Profile"
//           className="profile-pic"
//         />
//       </div>
//       <div className="small-box-2">
//         <ul>
//           <li>26 Posts</li>
//           <li>10K followers</li>
//           <li>0 following</li>
//           <li>
//             <button className="follow-btn-on-pp">Follow</button>
//           </li>
//         </ul>
//       </div>
//       <div className="small-box-3">
//         <ul>
//           <li>
//             <span>Agility Champ</span>
//           </li>
//           <li>
//             <span>Poser Pup</span>
//           </li>
//           <li>
//             <span>Gentle Giant</span>
//           </li>
//           <li>
//             <span>Mail Icon</span>
//           </li>
//         </ul>
//       </div>
//       <div className="main-content">
//         <ul className="image-list">
//           {pets.map(pet => (
//             <li>
//               <img src={pet.post_image} alt="post" />
//               <button className="like-btn">Like</button>
//               <button className="love-btn">Love</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="sidebar">
//         <ul>
//           <li>
//             <span>
//               <button className="post-btn-on-pp">Post</button>{" "}
//             </span>
//           </li>
//           <li>
//             <span>
//               <button className="edit-profile-btn">Edit Profile</button>{" "}
//             </span>
//           </li>
//         </ul>
//       </div>
//       <div className="footer">
//         <span>Postgram @ All rights reserved 2023</span>
//       </div>
//     </div>
//   );
// };

// export default Profile;

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
