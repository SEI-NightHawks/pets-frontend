import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Nav-create-profile.css";

const NavPersonalProfile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/profile/${searchQuery}`);
  };

  const handleImageClick = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="pet-info">
            <span className="pet-name">Dumbledoor</span>
            <span className="pet-gender">(Boy)</span>
          </div>
          <div
            className="logo-image-personal-profile"
            onClick={handleImageClick}
          >
            <img src="images/pets.png" alt="pets-logo" className="logo-image" />
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a pet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="search-icon" onClick={handleSearch} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavPersonalProfile;
