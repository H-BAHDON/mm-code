import React from 'react'
import './header.css'




function Header(){
    return (
        <header>
        <div id="logo">
          <a href="#">
            <h1 class="logo-title">MM-Code</h1>
          </a>
        </div>
        <nav class="navbar navbar-expand-lg">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="htmlExercise\mainHtml.html">HTML</a>
              <a class="nav-item nav-link" href="CssExercise\mainCSS.html">CSS</a>
              <a class="nav-item nav-link" href="#">Bootstrap</a>
              <a class="nav-item nav-link" href="JavascriptExercise\MainJS.html">Javascript</a>
            </div>
          </div>
        </nav>
      </header>
    
    )
}


export default Header;