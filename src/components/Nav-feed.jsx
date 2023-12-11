// import React from "react";
// import "./Nav-feed.css";
// import { FaSearch, FaUser, FaEnvelope } from "react-icons/fa";

// const NavFeed = () => {
//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="search-loop">
//           <FaSearch className="icon" />
//         </div>
//         <div className="logo-image-feed">
//           <a href="feed">
//             <img src="images/pets.png" alt="pets-logo" className="logo-image" />
//           </a>
//         </div>
//         <div className="profile-icon">
//           <FaUser className="icon" />
//         </div>
//         <div className="envelope-icon">
//           <FaEnvelope className="icon" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavFeed;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaEnvelope } from "react-icons/fa";
import "./Nav-feed.css";

const NavFeed = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const lowercaseQuery = searchQuery.toLowerCase();

    // You can replace this with your actual logic to find the pet based on the name
    // For now, let's assume you have a function findPetByName in your services
    const matchingPet = findPetByName(lowercaseQuery);

    if (matchingPet) {
      // Assuming the profile page is "/profile/:petId"
      navigate(`/profile/${matchingPet.id}`);
    } else {
      // Handle case when pet is not found (you can show an error message or do nothing)
      console.log("Pet not found");
    }
  };

  const findPetByName = (name) => {
    // Replace this with your actual logic to find the pet based on the name
    // For now, let's assume pets is an array of objects with a name property
    const pets = [
      { id: 1, name: "Buddy" },
      { id: 2, name: "Max" },
      // Add more pets as needed
    ];

    return pets.find((pet) => pet.name.toLowerCase() === name);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-image-feed">
          <a href="feed">
            <img src="images/pets.png" alt="pets-logo" className="logo-image" />
          </a>
        </div>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search pets"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-icon">
            <FaSearch className="icon" />
          </button>
        </form>
        <div className="profile-icon">
          <FaUser className="icon" />
        </div>
        <div className="envelope-icon">
          <FaEnvelope className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavFeed;
