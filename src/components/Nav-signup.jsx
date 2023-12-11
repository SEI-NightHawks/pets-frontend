import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav-signup.css";

const NavSignup = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-signup" onClick={handleImageClick}>
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavSignup;
