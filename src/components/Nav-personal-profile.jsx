import React from "react";
import "./Nav-create-profile.css";
import { NavLink } from "react-router-dom";

const NavPersonalProfile = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="profile-namee">Dumbledoor</div>
        <div className="gender">(Boy)</div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavPersonalProfile;
