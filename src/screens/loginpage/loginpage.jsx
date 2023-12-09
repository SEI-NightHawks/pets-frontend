// import "./loginpage.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

//add class name sto this jsx and then change them again in the css

const LoginPage = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login auth logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label className='user-label'>
          Username:
          <input className='input-user'
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
        <button className="signup-button" type="button" onClick={handleLogin}>
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
