import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Platform from "./Pages/Platform";
import Home from "./Pages/Home";
import Login from "./Components/reg&login/login";
import SignUp from "./Components/reg&login/Signup";
import UserProfile from "./Components/User Dashboard/userProfile"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
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
         <Route path="/userprofile" element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
