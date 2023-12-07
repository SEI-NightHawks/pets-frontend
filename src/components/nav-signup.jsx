import React from "react";
import "./Nav-signup.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Petstagram</div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-profile">Sign Up</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
