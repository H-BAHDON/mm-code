import React, { useEffect, useState } from 'react';
import Home from './Home/Home';
import Platform from './Platform/Platform';
import Login from './reg&login/Login';
import UserProfile from './User-Dashboard/userProfile';
import DemoPlatform from '../Routes/DemoPlatform/DemoPlatform';
import axios from 'axios'; 
import {apiUrl} from "../config/env_config"; 
import { useNavigate } from 'react-router-dom';
import ErrorPage from "./404 page/errorPage";
const AuthService = {
  checkSession: async () => {
    try {
      const response = await axios.get(`${apiUrl}/checkSession`, { withCredentials: true });
      return response.status; 
    } catch (error) {
      throw error;
    }
  },
};


const ProtectedRoute = ({ element }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const statusCode = await AuthService.checkSession();
        if (statusCode === 200) {
          setLoading(false);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
        navigate('/login'); 
      }
    };
    checkSession();
  }, [navigate]);
  return loading ? <div>Loading...</div> : element;
};



export const routes = [
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/platform',
    element: <ProtectedRoute element={<Platform />} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/UserProfile',
    element: <ProtectedRoute element={<UserProfile />} />,
  },
  {
    path: '/demo',
    element: <DemoPlatform />,
  },
];
