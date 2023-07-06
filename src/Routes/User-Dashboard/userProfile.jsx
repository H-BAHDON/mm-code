
import React, { useEffect, useState } from 'react';
import "./userProfile.css";
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/header/Header';
import Footer from '../../Components/Footer/Footer';

export default function UserProfile() {
    const navigate = useNavigate();
    const fullName = sessionStorage.getItem('fullName');
    const [score, setScore] = useState('');
    const [loginDuration, setLoginDuration] = useState('');
  
    useEffect(() => {
      // Check if the user is logged in
      const isLoggedIn = sessionStorage.getItem('username');
  
      // If the user is not logged in, redirect to the login page
      if (!isLoggedIn) {
        navigate('/login');
      }
  
      // Get the score value from localStorage
      const storedScore = localStorage.getItem('score');
      if (storedScore) {
        setScore(storedScore);
      }
  
      // Calculate the login duration
      const loginTime = sessionStorage.getItem('loginTime');
      if (loginTime) {
        const startTime = new Date(parseInt(loginTime, 10));
        const endTime = new Date();
        const durationInSeconds = Math.floor((endTime - startTime) / 1000);
        const durationFormatted = formatDuration(durationInSeconds);
        setLoginDuration(durationFormatted);
      }
    }, [navigate]);
  
    const handleLogout = () => {
      // Clear session storage
      sessionStorage.clear();
  
      // Redirect to the login page
      navigate('/login');
    };
  
    const formatDuration = (durationInSeconds) => {
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = durationInSeconds % 60;
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    };
  
    const padZero = (number) => {
      return number.toString().padStart(2, '0');
    };
  
    return (
        <>
     <div>
   <Header/>
        {/* Dashboard */}
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          {/* Vertical Navbar */}
          <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
            <div className="container-fluid">
              {/* Toggler */}
              <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
            
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="sidebarCollapse">
                {/* Navigation */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-house" /> Dashboard
                    </a>
                  </li>
                 
                </ul>
                {/* Divider */}
                <hr className="navbar-divider my-5 opacity-20" />
                {/* Navigation */}
               
                {/* Push content down */}
                <div className="mt-auto" />
                {/* User (md) */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-person-square" /> Account
                    </a>
                  </li>
                  {sessionStorage.getItem('username') && sessionStorage.getItem('fullName') ? (
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleLogout}>
              <i className="bi bi-box-arrow-left" /> Logout
            </a>
          </li>
        ) : (
          <li className="nav-item">
            <a className="nav-link" href="/login">
              <i className="bi bi-box-arrow-right" /> Login
            </a>
          </li>
        )}
                </ul>
              </div>
            </div>
          </nav>
          {/* Main content */}
          <div className="h-screen flex-grow-1 overflow-y-lg-auto mainHub">
            {/* Header */}
            <header className="bg-surface-primary border-bottom pt-6">
              <div className="container-fluid">
                <div className="mb-npx">
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                      {/* Title */}
                      <h1 className="h2 mb-6 ls-tight">Application</h1>
                    </div>
                  </div>
                 
                 
                </div>
              </div>
            </header>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                {/* Card stats */}
                <div className="row g-6 mb-6">
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">FullName</span>
                            <span className="h3 font-bold mb-0">{fullName}</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i className="bi bi-person" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />13%
                          </span>
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Daily Score</span>
                            <span className="h3 font-bold mb-0">{score}</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                              <i className="bi bi-braces" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />30%
                          </span>
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                            <span className="h3 font-bold mb-0">{loginDuration}</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                              <i className="bi bi-clock-history" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-danger text-danger me-2">
                            <i className="bi bi-arrow-down me-1" />-5%
                          </span>
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                            <span className="h3 font-bold mb-0">95%</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                              <i className="bi bi-minecart-loaded" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />10%
                          </span>
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow border-0 mb-7">
                  <div className="card-header">
                    <h5 className="mb-0">Contribution</h5>
                  </div>

                  <div className="card-footer border-0 py-5">
                    <span className="text-muted text-sm">The contribution Panel</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer/>
                    </>
                    )
                    }
