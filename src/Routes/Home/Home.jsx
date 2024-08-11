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
        <div className="homePage">
            <main className="content">
              <div className="typewriter">
                <h1>Welcome to MM-Code</h1>
                <p>Overcome your initial challenges and attain comfort in coding.</p>
                </div>
               <div className="button-group">
          <button onClick={handleGetStartedClick} className="journey-on-button">
            Journey On
          </button>
          <button onClick={handleDemoClick} className="demo-button">Try the Demo</button>
        </div>
            </main>
        </div>
    );
}


export default Home;
