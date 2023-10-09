import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    
    navigate('/platform');
  };

 const handleDemoClick = () => {
    navigate('/demo');
};

  return (
    <>
      <div className="container">
          <h1 className="display-3 mb-4">MM-Code</h1>
          <h2 className="lead mb-4">with its active real-time users, emphasizes repetition and targeted focus, drawing inspiration from
the philosophy of deep practice and the path to expertise. Our aim is to nurture intuitive coding abilities and tackle the initial learning
hurdles we recognized early in the programming journey.</h2>
<div className="d-flex align-items-center justify-content-center flex-column min-vh-100 content-container"></div>
<div className="button-group">
          <button onClick={handleGetStartedClick} className="btn btn-success btn-lg">
            Get Started
            <i className="ml-2 fas fa-arrow-right"></i>
          </button>
          <button onClick={handleDemoClick} className="btn btn-info btn-lg">
            Demo
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
