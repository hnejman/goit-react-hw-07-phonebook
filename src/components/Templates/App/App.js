import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchContacts } from '../../../redux/operations';
import { useAuth } from '../../../redux/auth';
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout.js";
import { RestrictedRoute } from "../../Atoms/RestrictedRoute/RestrictedRoute"
import { PrivateRoute } from '../../Atoms/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../../Organisms/Home/Home.js'));
const RegisterPage = lazy(() => import('../../Molecules/RegisterForm/RegisterForm'));
const LoginPage = lazy(() => import('../../Molecules/LoginForm/LoginForm'));
const ContactsPage = lazy(() => import('../../Organisms/ContactsPage/ContactsPage.js'));

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refereshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute 
              redirectTo="/contacts" 
              component={<RegisterPage />} 
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute 
              redirectTo="/contacts" 
              component={<LoginPage />} 
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute 
              redirectTo="login" 
              component={<ContactsPage />} 
            />
          }
        />
      </Route>
    </Routes>
  );
}; 