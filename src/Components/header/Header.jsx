import React, { useState } from "react";
import "../../css/style.css";

function Header({ handleHTMLClick, handleJavaScriptClick, handleCSSClick }) {
  const [activeTab, setActiveTab] = useState("html");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <header>
      <div id="logo">
        <h1 className="logo-title">MM-Code</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <p
              className={`nav-item nav-link ${
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
              className={`nav-item nav-link ${
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
              className={`nav-item nav-link ${
                activeTab === "javascript" ? "active" : ""
              }`}
              onClick={() => {
                handleTabClick("javascript");
                handleJavaScriptClick();
              }}
            >
              javascript
            </p>
          </div>
          {/* <div>
            <h3 class="sitedescription">MM-Code is a website aimed at improving the muscle memory of software developers.</h3>
          </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
