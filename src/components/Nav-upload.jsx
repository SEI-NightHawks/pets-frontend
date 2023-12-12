import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav-upload.css";

const NavUpload = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/feed");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-upload" onClick={handleImageClick}>
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavUpload;
