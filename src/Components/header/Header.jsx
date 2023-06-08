import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import "../../css/style.css";

function Header({ handleHTMLClick, handleJavaScriptClick, handleCSSClick }) {
  const [activeTab, setActiveTab] = useState("html");
  const fullName = sessionStorage.getItem("fullName"); // Get the fullName from session storage
  const navigate = useNavigate();
  const location = useLocation();
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to the login page
    navigate("/login");
  };

  const showLoginButton = location.pathname !== "/login";

  return (
    <header>
      <div id="logo">
        <h1 className="logo-title">MM-Code</h1>
        {fullName && <p>Welcome, {fullName}</p>}
        {fullName && showLoginButton && (
          <button onClick={handleLogout}>Logout</button>
        )}
        {!fullName && showLoginButton && (
          <button onClick={() =>  navigate("/login")}>Login</button>
        )}
      </div>
      <nav className="navbar">
        <p
          className={`nav-item-html nav-link ${
            activeTab === "html" ? "active" : ""
          }`}
          onClick={() => {
            handleTabClick("html");
            handleHTMLClick();
          }}
        >
          html
        </p>
        <p
          className={`nav-item-css nav-link ${
            activeTab === "css" ? "active" : ""
          }`}
          onClick={() => {
            handleTabClick("css");
            handleCSSClick();
          }}
        >
          css
        </p>
        <p
          className={`nav-item-javascript nav-link ${
            activeTab === "javascript" ? "active" : ""
          }`}
          onClick={() => {
            handleTabClick("javascript");
            handleJavaScriptClick();
          }}
        >
          javascript
        </p>
      </nav>
    </header>
  );
}

export default Header;
