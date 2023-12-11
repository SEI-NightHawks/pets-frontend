import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Nav-profile.css";

const NavProfile = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/Personal-Profile");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="pet-info">
          <span className="pet-name">June</span>
          <span className="pet-gender">(girl)</span>{" "}
        </div>
        <div className="logo-image" onClick={handleImageClick}>
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <div className="profile-icon" onClick={handleImageClick}>
          <FaUser className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavProfile;
