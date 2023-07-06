import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonOfPage from "../common/buttons/ButtonOfPage"
import "./header.css";

function Header({ handleHTMLClick, handleJavaScriptClick, handleCSSClick, handleReactClick, handleSqlClick, handleTestClick}) {
 
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
    navigate('/login', { replace: true });
    window.location.reload();
  };
  const shouldShowNav = !!fullName && location.pathname !== "/login";

  return (
    <header className="mainHeader">
      <div id="logo">
        <h1 className="logo-title">MM-Code</h1>
        {shouldShowNav && (
          <>    
          <div className="userName">
            {fullName && <p>Welcome, {fullName}</p>}
            <ButtonOfPage
            nameButton="Logout"
            handle={handleLogout}
            styleButton={"btn-success"}
            />
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
              <p
                className={`nav-item-react nav-link ${
                  activeTab === "react" ? "active" : ""
                }`}
                onClick={() => {
                  handleTabClick("react");
                  handleReactClick();
                }}
              >
                React
              </p>
              <p
                className={`nav-item-sql nav-link ${
                  activeTab === "sql" ? "active" : ""
                }`}
                onClick={() => {
                  handleTabClick("sql");
                  handleSqlClick();
                }}
              >
                SQL
              </p>
              <p
                className={`nav-item-test nav-link ${
                  activeTab === "test" ? "active" : ""
                }`}
                onClick={() => {
                  handleTabClick("test");
                  handleTestClick();
                }}
              >
                Test
              </p>
            </nav>
          </>
        )}
       
      </div>
    </header>
  );
}

export default Header;
