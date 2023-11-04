import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    React.useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    }, [user, navigate]);

    return user ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
