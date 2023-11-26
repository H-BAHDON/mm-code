import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { Button, Container, Grid, Typography } from '@mui/material';
import { Card, CardContent, CardMedia, styled  } from '@mui/material';

function Home() {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    
    navigate('/login');
  };

 const handleDemoClick = () => {
    navigate('/demo');
};

const cards = [
  {
    id: 1,
    title: 'Card 1 Title',
    paragraph: 'Description for card 1. Add any relevant information here.',
    imageSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4a049e120416395.60b4beaed5514.png',
  },
  {
    id: 2,
    title: 'Card 2 Title',
    paragraph: 'Description for card 2. Add any relevant information here.',
    imageSrc: 'https://example.com/card2-image.jpg',
  },
  {
    id: 3,
    title: 'Card 3 Title',
    paragraph: 'Description for card 3. Add any relevant information here.',
    imageSrc: 'https://example.com/card3-image.jpg',
  },
];
const StyledCard = styled(Card)({
  borderRadius: '16px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  marginBottom: '118px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const StyledTitle = styled('div')({
  fontWeight: 'bold',
  marginBottom: '8px',
});

    return (
      <div className="landing-page">
      <div className="content">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <div className="info">
                <Typography variant="h2" style={{ fontFamily: 'YourChosenFont', fontWeight: 'bold', color: '#333' }}>
                  Welcome to<br /> MM-Code
                </Typography>
                <Typography style={{ color: '#555', marginBottom: '20px' }}>
                  Embark on a journey of deep practice with us, overcoming initial challenges to attain coding expertise.
                </Typography>
                <Button onClick={handleGetStartedClick} variant="contained" sx={{ borderRadius: 20, marginTop: 2, background: '#4CAF50', color: 'white' }}>
                  Journey On
                </Button>
                <Button onClick={handleDemoClick} variant="contained" sx={{ borderRadius: 20, marginTop: 2, marginLeft: 4, background: '#2196F3', color: 'white' }}>
                  Try the Demo
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="image" style={{ height: '100vh', width: '94vh' , overflow: 'hidden' }}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/debd04107642307.5fabc699c7aa9.png" alt="Placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
     
        
     
    </div>
    );
}


export default Home;
