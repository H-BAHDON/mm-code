import React, { useState } from "react";
import "./header.css";

function Header({ handleHTMLClick, handleJavaScriptClick, handleCSSClick, handleReactClick }) {
  const [activeTab, setActiveTab] = useState("html");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <header className="mainHeader">
      <div id="logo">
        <h1 className="logo-title">MM-Code</h1>
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
              className={`nav-item-react nav-link ${
                activeTab === "sql" ? "active" : ""
              }`}
              onClick={() => {
                handleTabClick("sql");
                handleSqlClick();
              }}
            >
              SQL
            </p>

          </nav>
    </header>
  );
}

export default Header;
