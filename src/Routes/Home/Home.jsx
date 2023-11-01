import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    
    navigate('/login');
  };

 const handleDemoClick = () => {
    navigate('/demo');
};

    return (
        <div className="homePage">
            <main className="content">
              <div className="typewriter">
                <h1>Welcome to MM-Code</h1>
                <p>Embark on a journey of deep practice with us, overcoming initial challenges to attain coding expertise.</p>
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
