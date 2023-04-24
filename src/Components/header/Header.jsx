import React from 'react';

function Header() {
  return (
    <header>
      <div id="logo">
        <a href="#">
          <h1 className="logo-title">MM-Code</h1>
        </a>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="htmlExercise/mainHtml.html">HTML</a>
            <a className="nav-item nav-link" href="CssExercise/mainCSS.html">CSS</a>
            <a className="nav-item nav-link" href="#">Bootstrap</a>
            <a className="nav-item nav-link" href="JavascriptExercise/MainJS.html">Javascript</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
