import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav-home.css";

const NavHome = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Petstagram</div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHome;
