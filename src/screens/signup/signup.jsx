
// Signup.jsx

import React, { useState } from 'react';
import './signup.css'; // Import the CSS file

const Signup = () => {
  const [petUsername, setPetUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up with:', petUsername, email, password, petSpecies, breed, dateOfBirth, profilePicture);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <label>
          Pet Username:
          <input
            type="text"
            value={petUsername}
            onChange={(e) => setPetUsername(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Pet Species:
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
          onChangeCapture={(e) => setBreed(e.target.value)} />
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
          Profile Picture:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </label>

        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
