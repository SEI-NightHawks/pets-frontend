import "./loginpage.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogin from "../../components/Nav-login"; 


//add class name sto this jsx and then change them again in the css

const LoginPage = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login auth logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <NavLogin />
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
          <label className='user-label' htmlFor="username">
            Username:
            <input 
              id="username"
              className='input-user'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          </div>
         <div className="form-group">
          <label className="user-label" htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          </div>
          <button className="signup-button" type="button" onClick={handleLogin}>
            Login
          </button>
          <br />
          {/* Link to the SignUpPage component */}
          <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
