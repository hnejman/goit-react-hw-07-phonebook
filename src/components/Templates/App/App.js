import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { getError, getIsLoading } from '../../../redux/selectors';
import { fetchContacts } from '../../../redux/operations';
import { useAuth } from '../../../redux/auth';

const HomePage = lazy(() => import('../pages/Home/Home.js'));
const RegisterPage = lazy(() => import('../pages/Register/Register.js'));
const LoginPage = lazy(() => import('../pages/Login/Login.js'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.js'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const isRefreshing = useAuth();

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
              components={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}; 