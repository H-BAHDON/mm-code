import React from 'react';
import Home from './Home/Home';
import Platform from './Platform/Platform';
import Login from './reg&login/Login';
import Signup from './reg&login/Signup';
import UserProfile from './User-Dashboard/userProfile';
import { getSessionData } from "../Helpers/session";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, path }) => {
  const sessionData = getSessionData(); // Retrieve the session data
  const isLoggedIn = sessionData != null; // Check if user is logged in

  return isLoggedIn ? element : <Navigate to="/login" />;
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
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/UserProfile',
    element: <UserProfile />,
  },
];
