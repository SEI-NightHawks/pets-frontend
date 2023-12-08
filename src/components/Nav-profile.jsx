import React from "react";
import { FaUser } from "react-icons/fa";
import "./Nav-profile.css";

const NavProfile = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="pet-info">
          <span className="pet-name">June</span>
          <span className="pet-gender">(girl)</span>{" "}
        </div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <div className="profile-icon">
          <FaUser className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavProfile;
