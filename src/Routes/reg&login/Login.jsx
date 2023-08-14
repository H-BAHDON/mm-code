import React, { useState, useEffect } from 'react';

import "./login.css";
import Header from '../../Components/header/Header';

import { apiUrl } from '../../config/config';

export default function Login() {

  return (
    <>
      <Header showNavigation={false}/>

      <div className="login-container">
        <h1>Login with Social Media</h1>
        <a href={`${apiUrl}/auth/google`} className="btn-google">Login with Google</a>
        <a href={`${apiUrl}/auth/github`} className="btn-github">Login with GitHub</a>
      </div>
    </>
  );
}
