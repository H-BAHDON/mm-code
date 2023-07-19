import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonOfPage from '../common/buttons/ButtonOfPage';
import "./header.css";

export default function LogoBar() {
  const fullName = sessionStorage.getItem("fullName"); // Get the fullName from session storage
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to the login page
    navigate('/login', { replace: true });
    window.location.reload();
  };

  const shouldShowNav = !!fullName && location.pathname !== "/login";

  const handleUserProfile = () => {
    navigate("/UserProfile");
  };

  return (
    <>
      <div id="logo">
        <h1 className="logo-title">MM-Code</h1>
        {shouldShowNav && (
          <>
            <div className="userName">
              {fullName && <p>{fullName}</p>}
              <ButtonOfPage
                nameButton="Logout"
                handle={handleLogout}
                styleButton="btn btn-light p-2"
              />
              <i className="bi bi-person fs-3" onClick={handleUserProfile}></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}
