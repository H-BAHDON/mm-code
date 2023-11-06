import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { apiUrl } from '../../config/env_config';
import Header from '../../Components/header/Header';
import { useAuth } from '../../hooks/useAuth'; 

import "./login.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {

  const navigate = useNavigate(); 
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/platform');
    }
  }, [user, navigate]);



  const logoStyles = {
    width: '203px',
    height: 'auto', // Set to 'auto' to maintain aspect ratio
    marginBottom: '20px',
    marginTop: '50px',
  };
  

  return (
    <>      
    <Header showNavigation={false}/>
      <div className="parent-container">
        <div className="square red top-right hu__hu_r_"></div>
        <div className="square blue-dark left-bottom hu_hu_animation"></div>
      </div>

      <div className="main-container">
      <div className="fixed-width">
        <div className="box">
          <div className="logo text-center">
          <img
          src="https://www.svgart.org/wp-content/uploads/2022/06/vector-google-01-01.png"
          alt="Google Logo"
          style={logoStyles}
        />
          </div>
          <div className="contents text-center">
            <h2>Sign in</h2>
            <p>Use your Google Account</p>
          </div>

          <button href={`${apiUrl}/auth/google`}  className="login-with-google-btn">
          Sign in with Google
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
