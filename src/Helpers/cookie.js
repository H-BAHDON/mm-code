export const hasRememberLoginCookie = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('rememberLogin=')) {
        const value = cookie.substring('rememberLogin='.length);
        if (value === 'true') {
          return true;
        }
      }
    }
    return false;
  };