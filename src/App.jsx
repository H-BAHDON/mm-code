import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Platform from "./Routes/Platform";
import Home from "./Routes/Home";
import "./assets/style.css";

function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/platform"
          element={<Platform/>}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
