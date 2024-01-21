import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../redux/auth';

export const PrivateRoute = ({ redirectTo, component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
