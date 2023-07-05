import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Platform from "./Routes/Platform/Platform";
import Home from "./Routes/Home/Home";
import Login from "./Routes/reg&login/Login"
import SignUp from "./Routes/reg&login/Signup"

import "./assets/style.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/platform"
          element={<Platform isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUp onSignup={handleLogin} />}
        />
         {/* <Route path="/userprofile" element={<UserProfile/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
