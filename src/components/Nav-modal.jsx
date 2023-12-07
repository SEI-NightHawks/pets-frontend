import React from "react";
import "./Nav-modal.css";
import { NavLink } from "react-router-dom";

const NavModal = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavModal;
