import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './Routes/index';
import { getSessionData } from "./Helpers/authHelpers";

import "./assets/style.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a session exists (e.g., by checking if the session data exists in local storage or cookies)
    const sessionData = getSessionData(); // Implement this function to retrieve session data

    if (sessionData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (sessionData) => {
    // Perform login logic here and set the session data
    setIsLoggedIn(true);
  };


  return (
    <>
   <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={React.cloneElement(route.element, { onLogin: handleLogin })}
          />
        ))}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
