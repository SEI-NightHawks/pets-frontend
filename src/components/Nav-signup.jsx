import React from "react";
import "./Nav-signup.css";
import { NavLink } from "react-router-dom";

const NavSignup = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-signup">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavSignup;
