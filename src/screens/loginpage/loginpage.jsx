import "./loginpage.css";

// LoginPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router

const LoginPage = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
    closeModal(); // Close the modal after login
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <br />
        {/* Link to the SignUpPage component */}
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default LoginPage;
