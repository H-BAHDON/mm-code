import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiUrl } from "../config/env_config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiUrl}/user`, { withCredentials: true })
      .then(res => {
        setUser(res.data.userData);
        setLoading(false);
      })
      .catch(err => { 
        console.error('Error loading user data: ', err);
        setLoading(false);
      });
  }, []);

  const Login = () => {
    window.location.href = `${apiUrl}/auth/google`;
  };

  const Logout = async () => {
    try {
          await axios.get(`${apiUrl}/logout`, { withCredentials: true });
          setUser(null);
          return true;
      } catch (error) {
          console.error('Error logging out: ', error);
          throw error;
      }
  };

  return (
    <AuthContext.Provider value={{ user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
