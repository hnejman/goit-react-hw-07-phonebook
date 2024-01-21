import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../redux/auth';
import { Tab } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
        <Tab _selected>
          <NavLink to="/">Home</NavLink>
        </Tab>
        {isLoggedIn && (
          <Tab>
            <NavLink to="/contacts">Contacts</NavLink>
         </Tab> 
         )}
    </>
  );
};