import { useAuth } from '../../../redux/auth';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ redirectTo, component,}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.func,
}