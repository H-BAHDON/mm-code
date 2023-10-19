import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './Routes/index';
import { getSessionData } from "./Helpers/authHelpers";
import Footer from './Components/Footer/Footer';
import DemoPlatform from './Routes/DemoPlatform/DemoPlatform'
import "./app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const sessionData = getSessionData(); 

    if (sessionData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (sessionData) => {

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
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
