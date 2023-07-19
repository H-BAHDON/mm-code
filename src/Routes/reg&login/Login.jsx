import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from './Signup';
import "./login.css";
import Header from '../../Components/header/Header';
import { useNavigate, Route, Navigate } from 'react-router-dom';
import { apiUrl } from '../../config/config';
import { useCookies } from 'react-cookie';
import { createSession, clearSession, hasRememberLoginCookie } from '../../Helpers/authHelpers';

export default function Login({ onLogin, isLoggedIn }) {

  axios.defaults.withCredentials = true;

  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['rememberLogin']);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');

    if (isLoggedIn || storedUsername) {
      navigate('/platform');
    }
  }, [isLoggedIn, navigate]);

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
        password,
      }, {
        withCredentials: true, // Include the cookie in the request
      });
  
      if (response.data.message === 'Login successful') {
        const { username, fullName } = response.data;
        console.log(`User ${username} logged in`);
  
        createSession(username, fullName, setCookie);
  
        onLogin(); // Update login status
  
        // Redirect to /UserProfile
        navigate('/UserProfile');
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
      <Header showNavigation={false}/>
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
            <a href="#" style={{fontSize: "15px"}} onClick={handleSignupLinkClick}>Sign up</a>
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
