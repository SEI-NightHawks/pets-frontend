import React from "react";
import "./Nav-upload.css";
import { NavLink } from "react-router-dom";

const NavUpload = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-upload">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavUpload;
