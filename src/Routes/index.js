import React, { useState, useEffect, useRef } from 'react';
import Home from './Home/Home';
import Platform from './Platform/Platform';
import Login from './reg&login/Login';
import UserProfile from './User-Dashboard/userProfile';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const PrivateRoute = ({ element, path }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the existence of a session cookie
    axios.get('http://localhost:3001/check-session', { withCredentials: true })
      .then(response => {
        setIsAuthenticated(true); // User is authenticated
      })
      .catch(error => {
        setIsAuthenticated(false); // User is not authenticated
        navigate('/login'); // Redirect to the login page
      });
  }, [navigate]);

  return isAuthenticated ? element : null;
};

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/platform',
    element: <PrivateRoute element={<Platform />} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/UserProfile',
    element: <PrivateRoute element={<UserProfile />} />,
  },
];
