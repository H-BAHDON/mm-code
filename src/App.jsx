import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './Routes/index';
import Footer from './Components/Footer/Footer';
import './app.css';
import { AuthProvider, useAuth } from './hooks/useAuth';

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}



export default App;
