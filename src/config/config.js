// config.js

const defaultApiUrl = 'http://localhost:3001';

const isDevelopment = process.env.NODE_ENV === 'development';

export const apiUrl = isDevelopment
  ? process.env.REACT_APP_API_URL || defaultApiUrl 
  : 'http://mmcode.io'; 
