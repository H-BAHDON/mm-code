import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  }

  function handleHoverMeClick() {
    navigate('/platform');
  }

  function handleLoginClick() {
    navigate('/Login');
  }

  return (
    <div>
      <div className="nav-bar">
        <div className="nav-logo">
          <h2>MM-code</h2>
        </div>
        <div className={`nav-links ${showMobileMenu ? 'active' : ''}`} id="mobileMenu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" onClick={handleLoginClick}>Login</a>
            </li>
            <li>
              <a href="#" onClick={handleHoverMeClick}>Platform</a>
            </li>
          </ul>
        </div>
        <img
          src="https://atisnet.com/wp-content/uploads/2020/02/menu-icon.png"
          alt="navigation icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
      </div>
      {/* <div className="content">
        <h1>MM-Code</h1>
        <div className="btn" onClick={handleHoverMeClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p>Hover Me</p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
