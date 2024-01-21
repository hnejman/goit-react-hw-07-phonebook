import { NavLink } from 'react-router-dom';
import { Tab } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <>
      <Tab>
        <NavLink to="/register">Register</NavLink>
      </Tab>
      <Tab>
        <NavLink to="/login">Log In</NavLink>
      </Tab>
    </>
  );
};
