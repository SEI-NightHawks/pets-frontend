import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav-login.css";

const NavLogin = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-login">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavLogin;
