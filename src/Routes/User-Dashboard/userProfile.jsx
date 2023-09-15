
import React, { useEffect, useState } from 'react';
import "./userProfile.css";
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/header/Header';
import axios from 'axios';
import { apiUrl } from '../../config/config';

import ButtonOfPage from '../../Components/common/buttons/ButtonOfPage';

export default function UserProfile() {
    const navigate = useNavigate();
    const [score, setScore] = useState('');
    const [loginDuration, setLoginDuration] = useState('');
    const [fullName, setFullName] = useState(''); // Initialize fullName state

    useEffect(() => {
      // Function to fetch user data
      const fetchUserData = () => {
        axios.get(`${apiUrl}/user`, { withCredentials: true })
          .then(response => {
            setFullName(response.data.displayName);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      };
  
      // Function to calculate login duration
      const calculateLoginDuration = () => {
        const loginTime = sessionStorage.getItem('loginTime');
        if (loginTime) {
          const startTime = new Date(parseInt(loginTime, 10));
          const endTime = new Date();
          const durationInSeconds = Math.floor((endTime - startTime) / 1000);
          const durationFormatted = formatDuration(durationInSeconds);
          setLoginDuration(durationFormatted);
        }
      };
  
      // Fetch user data when the component mounts
      fetchUserData();
  
      // Calculate login duration when the component mounts
      calculateLoginDuration();
  
      // Fetch and update score if it's valid
      const storedScore = localStorage.getItem('score');
      if (!isNaN(storedScore)) {
        setScore(storedScore);
  
        axios.post(`${apiUrl}/save-score`, { score: storedScore }, { withCredentials: true })
          .then(response => {
            // Handle the response if needed
          })
          .catch(error => {
            console.error('Error saving score:', error);
          });
      }
    }, []);


  
    const handleLogout = () => {
      navigate('/platform');
    };
  
  
  
    return (
        <>
     <div>
     <Header showNavigation={false} />
        {/* Dashboard */}
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          {/* Vertical Navbar */}

          {/* Main content */}
          <div className="h-screen flex-grow-1 overflow-y-lg-auto mainHub">
            {/* Header */}
            <header className="bg-surface-primary border-bottom pt-6">
              <div className="container-fluid">
                <div className="mb-npx">
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                      {/* Title */}
                      <h1 className="h2 mb-6 ls-tight">My Profile</h1>
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
                          <span className="text-nowrap text-xs text-muted">Welcome to MM-Code  {fullName}</span>
                        </div>
                      </div>
                    </div>
                  </div> <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Daily Score</span>
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
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Score</span>
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
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Languages MM'd</span>
                            <span className="h3 font-bold mb-0">Coming Soon</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                              <i className="bi bi-minecart-loaded" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="" />
                          </span>
                          <span className="text-nowrap text-xs text-muted">Feature Coming Soon</span>
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
              <div className='build-more-mm'>
              <ButtonOfPage 
                  nameButton="Build more MM"
                  styleButton={"btn-outline-dark btn-lg fs-4"}
                  handle={handleLogout}
                />
                
              </div>
              </div>
            </main>
          </div>
        </div>
      </div>
                    </>
                    )
                    }
