import React from "react";
import "./Nav-profile.css";
import { NavLink } from "react-router-dom";

const NavProfile = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="profile-namee">June</div>
        <div className="gender">(girl)</div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavProfile;
