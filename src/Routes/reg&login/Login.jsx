import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from './Signup';
import "./login.css";
import Header from '../../Components/header/Header';
import { useNavigate, Route, Navigate } from 'react-router-dom';
import { apiUrl } from '../../config/config';
import { useCookies } from 'react-cookie';
import { hasRememberLoginCookie } from '../../Helpers/cookie';
import Footer from '../../Components/Footer/Footer';

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
        password
      }, {
        withCredentials: true // Include the cookie in the request
      });
      if (hasRememberLoginCookie()) {
        // User has the rememberLogin cookie
        // Proceed to the platform page
        navigate('/platform');
      } else {
        // User doesn't have the rememberLogin cookie
        // Redirect to the login page
        navigate('/login');
      }

      if (response.data.message === 'Login successful') {
        const { username, fullName } = response.data;
        console.log(`User ${username} logged in`);

        // Save user information in session storage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('fullName', fullName);

        // Set the login time in session storage
        sessionStorage.setItem('loginTime', new Date().getTime());

        // Set the remember-me cookie
        setCookie('rememberLogin', true, {
          path: '/',
          maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
        });

        onLogin(); // Update login status

        // Redirect to /platform
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
