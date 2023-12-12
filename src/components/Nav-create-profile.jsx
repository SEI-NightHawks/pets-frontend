import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav-create-profile.css";

const NavCreateProfile = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-create-profile" onClick={handleProfileClick}>
          <img src="images/pets.png" alt="pets-logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavCreateProfile;
