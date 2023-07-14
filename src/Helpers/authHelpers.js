// helpers/session.js
export const getSessionData = () => {
  const username = sessionStorage.getItem('username');
  const fullName = sessionStorage.getItem('fullName');

  if (username && fullName) {
    return {
      username,
      fullName
    };
  }
  return null;
};

  export const removeSessionData = () => {
    // Remove the session data from local storage
    localStorage.removeItem('sessionData');
  };

  export const createSession = (username, fullName, setCookie) => {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('fullName', fullName);
    sessionStorage.setItem('loginTime', new Date().getTime());
  
    // Set the remember-me cookie
    setCookie('rememberLogin', true, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60, // Expires in 30 days
    });
  };

  export const clearSession = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('fullName');
    sessionStorage.removeItem('loginTime');
  };
  