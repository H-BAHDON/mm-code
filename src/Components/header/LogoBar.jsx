import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'; // Import Box component
import { useAuth } from '../../hooks/useAuth';

const LogoBar = () => {
  const navigate = useNavigate();
  const { user, Logout } = useAuth();

  const handleUserProfile = () => {
    navigate('/UserProfile');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              cursor: 'pointer',
              color: 'black', 
            }}
            onClick={handleLogoClick}
          >
            MM-Code
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {user && (
            <>
              <Typography
                variant="subtitle1"
                sx={{
                  marginRight: 2,
                  color: 'black', 
                }}
              >
                Hello, {user.displayName}
              </Typography>
              <Button
                variant="contained"
                onClick={() => Logout().then(() => navigate('/'))}
                sx={{
                  marginRight: 2,
                  color: 'inherit',
                }}
              >
                Logout
              </Button>
              <Avatar
                src={user.avatarUrl}
                alt={user.displayName}
                onClick={handleUserProfile}
                sx={{
                  cursor: 'pointer',
                  color: 'inherit',
                }}
              />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LogoBar;
