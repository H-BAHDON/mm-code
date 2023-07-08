import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../config/config';

axios.defaults.withCredentials = true;

export default function Signup({ onSigninClick }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        username,
        email,
        password,
        fullName
      });
  
      if (response.status === 200) {
        console.log('Signup successful');
  
        // Save user information in session storage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('fullName', fullName);
  
        // Set the login time in session storage
        sessionStorage.setItem('loginTime', new Date().getTime());
  
        // Redirect to the /platform page
        navigate('/platform');
      } else {
        console.error('Signup failed:', response.data.message);
        // Handle signup error
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup error
    }
  
    setUsername("");
    setEmail("");
    setPassword("");
    setFullName("");
  };
  

  useEffect(() => {
    // Check if user is already logged in
    axios.get('http://localhost:3001/checklogin')
      .then(response => {
        if (response.data.loggedIn) {
          // Redirect to /platform if logged in
          navigate('/platform');
        }
      })
      .catch(error => {
        console.error('Error checking login status:', error);
      });
  }, [navigate]);

  return (
    <div className="form">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSignup}>
        <div className="inputBox">
          <input
            type="text"
            name='fullName'
            id='fullName'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="off"
          />
          <span>Full Name</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="text"
            name='username'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off"
          />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot password</a>
          <a href="#" onClick={onSigninClick}>
            Sign in
          </a>
        </div>
        <input type="submit" value="Sign Up" style={{paddingLeft: "20px" }}/>
      </form>
    </div>
  );
}
