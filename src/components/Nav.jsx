import { NavLink } from "react-router-dom";
import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Petstagram</div>
        <div className="logo-image">
          <img
            src="src/components/images/pets.png"
            alt="pets-logo"
            className="logo-image"
          />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Log In</a>
          </li>
          <li>
            <a href="/about">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
