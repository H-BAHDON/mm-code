import React, { useState, useEffect, useRef } from 'react';
import Home from './Home/Home';
import Platform from './Platform/Platform';
import Login from './reg&login/Login';
import UserProfile from './User-Dashboard/userProfile';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { apiUrl } from '../config/config';

const PrivateRoute = ({ element, path }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment) {
      setIsAuthenticated(true);
    } else {
      axios
        .get(`${apiUrl}/check-session`, { withCredentials: true })
        .then((response) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setIsAuthenticated(false);
          navigate('/login');
        });
    }
  }, [navigate]);

  // Render the element only if authenticated
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
