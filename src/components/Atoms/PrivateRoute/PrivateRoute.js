import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../redux/auth';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ redirectTo, component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object,
}
