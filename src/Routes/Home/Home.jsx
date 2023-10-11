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
                <p>Embark on a journey of deep practice with us, overcoming initial challenges to attain coding expertise.</p>
                </div>
               <div className="button-group">
          <button onClick={handleGetStartedClick} className="btn btn-success btn-lg">
            Get Started
          </button>
          <button onClick={handleDemoClick} className="btn btn-info btn-lg">Demo</button>
        </div>
            </main>
        </div>
    );
}

//   return (
//     <>
//       <div className="container">
//           <h1 className="title">MM-Code</h1>
//           <h2 className="intro">Leveraging the power of real-time user activity, we embrace the philosophy of deep practice and the journey towards expertise.
//            Our mission is to cultivate intuitive coding abilities, providing solutions to the initial challenges 
//            faced at the start of one's programming journey.</h2>
// {/* <div className="d-flex align-items-center justify-content-center flex-column min-vh-100 content-container"></div> */}
// <div className="button-group">
//           <button onClick={handleGetStartedClick} className="btn btn-success btn-lg">
//             Get Started
//             <i className="ml-2 fas fa-arrow-right"></i>
//           </button>
//           <button onClick={handleDemoClick} className="btn btn-info btn-lg">
//             Demo
//           </button>
//         </div>
//       </div>
//     </>
//   );


export default Home;
