import axios from 'axios';
import Cookies from 'js-cookie';
import env_config from '../config/env_config';

const DOMAIN = env_config.apiGateway.URL;
const PREFIX = '';

function configureAxios(config) {
  const token = Cookies.get('token'); // Get token from cookie using js-cookie

  const instance = axios.create({
    baseURL: `${DOMAIN}${PREFIX}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    ...config,
  });

  instance.interceptors.request.use(
    (requestConfig) => {
      const cookieToken = Cookies.get('token'); // Get token from cookie using js-cookie
      if (cookieToken) {
        requestConfig.headers.authorization = `Bearer ${cookieToken}`;
      }
      return requestConfig;
    },
    (error) => Promise.reject(error)
  );

  // Rest of your interceptors and configuration

  return instance;
}

export default configureAxios;
