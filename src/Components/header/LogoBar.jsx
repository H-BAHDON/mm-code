import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonOfPage from '../common/buttons/ButtonOfPage';
import './header.css';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

export default function LogoBar() {
  const navigate = useNavigate();
  const { user, Logout } = useAuth();

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
        <div className="userName">
          {user && <h5>Hello, {user.displayName}</h5>}
          {user && <ButtonOfPage nameButton="Logout" handle={() => Logout().then(() => navigate('/'))} styleButton="btn p-2" />}
          {user && <i className="bi bi-person fs-3" onClick={handleUserProfile}></i>}
        </div>
      </div>
    </>
  );
}
