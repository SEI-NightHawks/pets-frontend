import React from "react";
import "./Nav-modal.css";
import { FaSearch, FaUser, FaEnvelope } from "react-icons/fa";

const NavModal = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="search-loop">
          <FaSearch className="icon" />
        </div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
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

export default NavModal;