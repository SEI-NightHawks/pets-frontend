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
          {pets.map((pet) => (
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
