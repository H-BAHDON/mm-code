import React from "react";
import "./header.css";
import LogoBar from "./LogoBar";
import DemoNavigation from "./DemoNavigation";

function Header({
  showLogoBar = true,
  showNavigation = true,
//   handleHTMLClick,
  handleJavaScriptClick,
//   handleCSSClick,
//   handleReactClick,
//   handleSqlClick,
//   handleTestClick,
}) {
  return (
    <header className="mainHeader">
      {showLogoBar && <LogoBar />}
      {showNavigation && (
        <DemoNavigation
        //   handleHTMLClick={handleHTMLClick}
          handleJavaScriptClick={handleJavaScriptClick}
        //   handleCSSClick={handleCSSClick}
        //   handleReactClick={handleReactClick}
        //   handleSqlClick={handleSqlClick}
        //   handleTestClick={handleTestClick}
          
        />
      )}
    </header>
  );
}

export default Header;
