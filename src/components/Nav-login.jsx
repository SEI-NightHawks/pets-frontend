// Nav-login.jsx
import React from "react";
import "./Nav-login.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Petstagram</div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/feed">Feed</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
