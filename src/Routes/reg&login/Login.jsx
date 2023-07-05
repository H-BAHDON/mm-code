import React, { useState } from 'react';
import axios from 'axios';
import Signup from './Signup';
import "./login.css";
import Header from '../../Components/header/Header';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../config/config';

axios.defaults.withCredentials = true;

export default function Login({ onLogin, isLoggedIn }) {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = (formData) => {
    // Handle signup logic, e.g., send the form data to the server
    console.log('Signup form submitted:', formData);
  };

  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    setShowSignup(true);
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    setShowSignup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        username,
        password
      });
  
      if (response.data.message === 'Login successful') {
        const { username, fullName } = response.data;
        console.log(`User ${username} logged in`);
  
        // Save user information in session storage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('fullName', fullName);
  
        // Set the login time in session storage
        sessionStorage.setItem('loginTime', new Date().getTime());
  
        onLogin(); // Update login status
  
        // Redirect to /platform
        navigate('/platform');
      } else {
        console.error('Login failed:', response.data.message);
        // Handle login error
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  
    setUsername('');
    setPassword('');
  };
  

  return (
    <>
      <Header />
      <div className="box">
        <form className="form" onSubmit={handleSubmit}>
          <h2>SIGN IN</h2>
          <div className="inputBox">
            <input
              type='text' id='username' name='username'
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type='password' name='password' id='password'
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forgot password</a>
            <a href="#" onClick={handleSignupLinkClick}>Sign up</a>
          </div>
          <input type="submit" value="Login" autoComplete="off" />
        </form>

        {showSignup && (
          <Signup onSignup={handleSignup} onSigninClick={handleSigninClick} />
        )}
      </div>
    </>
  );
}
