import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { apiUrl } from '../../config/env_config';
import Header from '../../Components/header/Header';
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="parent-container">
        <div className="square red top-right hu__hu_r_"></div>
        <div className="square blue-dark left-bottom hu_hu_animation"></div>
      </div>
      <Header showNavigation={false}/>

      <Container maxWidth="sm" className="login-container">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Login
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            "Where Creativity Meets MMCode, Your Journey Begins."
          </Typography>
          <Button href={`${apiUrl}/auth/google`} variant="contained" color="primary" className="btn-google">
            ...with Google
          </Button>
        </Box>
      </Container>
    </>
  );
}
