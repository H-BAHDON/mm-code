import React from "react";
import "./header.css";
import LogoBar from "./LogoBar";
import Navigation from "./Navigation";

function Header({
  showLogoBar = true,
  showNavigation = true,
  handleHTMLClick,
  handleJavaScriptClick,
  handleCSSClick,
  handleReactClick,
  handleSqlClick,
  handleTestClick,
}) {
  return (
    <header className="mainHeader">
      {showLogoBar && <LogoBar />}
      {showNavigation && (
        <Navigation
          handleHTMLClick={handleHTMLClick}
          handleJavaScriptClick={handleJavaScriptClick}
          handleCSSClick={handleCSSClick}
          handleReactClick={handleReactClick}
          handleSqlClick={handleSqlClick}
          handleTestClick={handleTestClick}
        />
      )}
    </header>
  );
}

export default Header;
