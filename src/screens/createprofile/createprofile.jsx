import "createprofile.css";
import React, { useState } from "react";

const Profile = () => {
 const [pets, setPets] = useState([]);
 const [petSpecies, setPetSpecies] = useState("");
 const [breed, setBreed] = useState("");
 const [dateOfBirth, setDateOfBirth] = useState("");
 const [profilePicture, setProfilePicture] = useState(null);

 const addPet = (e) => {
    e.preventDefault();
    const newPet = {
      species: petSpecies,
      breed: breed,
      dateOfBirth: dateOfBirth,
      profilePicture: profilePicture,
    };
    setPets([...pets, newPet]);
 };
 
 return (
    <div>
      <form onSubmit={addPet}>
        <label>
          Species:
          <input
            type="text"
            value={petSpecies}
            onChange={(e) => setPetSpecies(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>
        <label>
          Profile Pet Picture:
          <input
            type="file"
            onChange={handleProfilePictureChange}
          />
        </label>
        <button type="submit">Add Pet</button>
      </form>
    </div>
 );
};

export default Profile;
