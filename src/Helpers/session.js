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