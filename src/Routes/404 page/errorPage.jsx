import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./errorPageCss.css";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };
  
    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <>
            <div id="background" />
            <div className="top">
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
            <div className="container">
                <div className="ghost-copy">
                    <div className="one" />
                    <div className="two" />
                    <div className="three" />
                    <div className="four" />
                </div>
                <div className="ghost">
                    <div className="face">
                        <div className="eye" />
                        <div className="eye-right" />
                        <div className="mouth" />
                    </div>
                </div>
                <div className="shadow" />
            </div>
            <div className="bottom">
               
                <div className="buttons">
                    <button className="btn" onClick={handleBackClick}>
                        Back
                    </button>
                    <button className="btn" onClick={handleHomeClick}>
                        Home
                    </button>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
