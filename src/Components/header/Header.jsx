import React from "react";
import "../../css/style.css";

function Header({ handleHTMLClick, handleJavaScriptClick, handleCSSClick }) {
  return (
    <header>
      <div id="logo">
        <h1 className="logo-title">MM-Code</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <p className="nav-item nav-link" onClick={handleHTMLClick}>
              HTML
            </p>
            <p className="nav-item nav-link" onClick={handleCSSClick}>
              CSS
            </p>
            <p className="nav-item nav-link" onClick={handleJavaScriptClick}>
              JavaScript
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
