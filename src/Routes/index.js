import React from 'react';
import Home from './Home/Home';
import Platform from './Platform/Platform';
import Login from './reg&login/Login';
import UserProfile from './User-Dashboard/userProfile';
import DemoPlatform from '../Routes/DemoPlatform/DemoPlatform';



export const routes = [
  {
    path: '*',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/platform',
    element: <Platform />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/UserProfile',
    element: <UserProfile />,
  },
  {
    path: '/demo',
    element: <DemoPlatform />,
  },
];