import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonOfPage from '../common/buttons/ButtonOfPage';
import axios from 'axios';
import './header.css';
import { apiUrl } from '../../config/config';
export default function LogoBar() {
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to track loading
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get(`${apiUrl}/user`, {
      withCredentials: true, 
    })
    .then(response => {
      setUserData(response.data.userData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      setLoading(false);
    });
  }, []);

  const handleLogout = () => {
    // Make a request to log out on the server
    axios.get(`${apiUrl}/logout`, { withCredentials: true })
      .then(() => {
        setUserData(null);
        navigate('/login', { replace: true });
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  

  const shouldShowNav = !!userData && location.pathname !== '/login';

  const handleUserProfile = () => {
    navigate('/UserProfile');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
  <div id="logo">
        <h1 onClick={handleLogoClick} className="logo-title">
          MM-Code
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : shouldShowNav && (
          <div className="userName">
            <h5>Hello, {userData.displayName}</h5>
            <ButtonOfPage
              nameButton="Logout"
              handle={handleLogout}
              styleButton="btn  p-2"
            />
            <i className="bi bi-person fs-3" onClick={handleUserProfile}></i>
          </div>
        )}
      </div>
    </>
  );
}
