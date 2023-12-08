import React from "react";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import "./Nav-create-profile.css";
import { NavLink } from "react-router-dom";

const NavPersonalProfile = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="pet-info">
          <span className="pet-name">Dumbledoor</span>
          <span className="pet-gender">(Boy)</span>{" "}
        </div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <div className="search-loop">
          <FaSearch className="icon" />
        </div>
        <div className="burger-icon">
          <FaBars className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavPersonalProfile;
