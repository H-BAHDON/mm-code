export const calculateLoginDuration = () => {
    const loginTime = sessionStorage.getItem('loginTime');
    if (loginTime) {
      const startTime = new Date(parseInt(loginTime, 10));
      const endTime = new Date();
      const durationInSeconds = Math.floor((endTime - startTime) / 1000);
      const durationFormatted = formatDuration(durationInSeconds);
      setLoginDuration(durationFormatted);
    }
  };