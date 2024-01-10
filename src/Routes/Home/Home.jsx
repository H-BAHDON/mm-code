import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  const handleDemoClick = () => {
    navigate('/demo');
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <Typography variant="h2" style={{ fontFamily: 'YourChosenFont', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
            Welcome to<br /> MM-Code
          </Typography>
          <Typography style={{ color: '#555', marginBottom: '20px', textAlign: 'center' }}>
            Embark on a journey of deep practice with us, overcoming initial challenges to attain coding expertise.
          </Typography>
          <Button
            onClick={handleGetStartedClick}
            variant="contained"
            sx={{ borderRadius: 20, marginTop: 2, marginRight: 2, marginBottom: 2, width: '100%', maxWidth: '200px', backgroundColor: '#4CAF50', color: 'white' }}
          >
            Journey On
          </Button>
          <Button
            onClick={handleDemoClick}
            variant="contained"
            sx={{ borderRadius: 20, marginTop: 2, marginBottom: 2, width: '100%', maxWidth: '200px', backgroundColor: '#2196F3', color: 'white' }}
          >
            Try the Demo
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="image" style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/debd04107642307.5fabc699c7aa9.png"
              alt="Placeholder"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
