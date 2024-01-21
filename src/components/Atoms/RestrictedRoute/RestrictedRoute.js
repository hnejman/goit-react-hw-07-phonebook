import { useAuth } from '../../../redux/auth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ redirectTo, component,}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
