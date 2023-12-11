import React from "react";
import "./Nav-feed.css";
import { FaSearch, FaUser, FaEnvelope } from "react-icons/fa";

const NavFeed = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="search-loop">
          <FaSearch className="icon" />
        </div>
        <div className="logo-image">
          <a href="feed">
            <img src="images/pets.png" alt="pets-logo" className="logo-image" />
          </a>
        </div>
        <div className="profile-icon">
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
