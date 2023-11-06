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
          <Button
            href={`${apiUrl}/auth/google`}
            style={{
              transition: 'background-color 0.3s, box-shadow 0.3s',
              padding: '12px 16px 12px 42px',
              border: 'none',
              borderRadius: '3px',
              boxShadow: '0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25)',
              color: '#757575',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
              backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)',
              backgroundColor: 'white',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '12px 11px',
            }}
          >
            Sign in with Google
          </Button>

        </div>
      </div>
    </div>
    </>
  );
}
