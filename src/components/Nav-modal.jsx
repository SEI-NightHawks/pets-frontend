import React from "react";
import "./Nav-modal.css";
import { useNavigate } from "react-router-dom";

const NavModal = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-modal" onClick={handleImageClick}>
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavModal;
