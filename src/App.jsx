import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./css/style.css";


//Pages
import Platform from "./Pages/Platform";
import Home from "./Pages/Home";
import Login from "./Components/reg&login/Login"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Platform" element={<Platform/>}/>
                <Route path="/account" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
