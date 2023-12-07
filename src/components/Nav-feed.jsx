import React from "react";
import "./Nav-create-acc.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Petstagram</div>
        <div className="logo-image">
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/modal">Modal</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
