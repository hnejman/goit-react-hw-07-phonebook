import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../redux/auth';
import { Tab } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/">
        <Tab>Home</Tab>
      </NavLink>
      {isLoggedIn && (
          <NavLink to="/contacts"><Tab>Contacts</Tab></NavLink>
      )}
    </>
  );
};
