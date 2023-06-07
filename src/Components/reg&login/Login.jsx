import React, { useState } from 'react';
import Signup from './Signup';
import "./login.css"
import Header from '../header/Header';

export default function Login() {
  const [showSignup, setShowSignup] = useState(false);

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

  return (
    <>
    <Header/>
    <div className="box">
      <div className="form">
        <h2>SIGN IN</h2>
        <div className="inputBox">
          <input type="text" required />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" autocomplete="off" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot password</a>
          <a href="#" onClick={handleSignupLinkClick}>
            Sign up
          </a>
        </div>
        <input type="submit" value="Login" autocomplete="off" />
      </div>

      {showSignup && (
        <Signup onSignup={handleSignup} onSigninClick={handleSigninClick} />
      )}
    </div>
    </>
  );
}
