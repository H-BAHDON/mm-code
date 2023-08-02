import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Replace '/login' with the actual path of your login page
    navigate('/platform');
  };

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column min-vh-100">
          <h1 className="display-3 mb-4">MM-code</h1>
          <h2 className="lead mb-4">Let's Get Started</h2>
          <button onClick={handleGetStartedClick} className="btn btn-success btn-lg">
            Get Started
            <i className="ml-2 fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
