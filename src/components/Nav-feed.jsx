import React from "react";
import "./Nav-feed.css";
import { FaSearch, FaUser, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavFeed = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/personal-profile");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-feed">
          <a href="feed">
            <img src="images/pets.png" alt="pets-logo" className="logo-image" />
          </a>
        </div>
        <form className="search-form">
          {/* Your search input and button code */}
        </form>
        <div className="profile-icon" onClick={handleProfileClick}>
          <FaUser className="icon" />
        </div>
        <div className="envelope-icon">
          <FaEnvelope className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavFeed;
