import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import { useAuth } from '../../../redux/auth';
import { Tab } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const  {user}  = useAuth();

  return(
    <>
      <Tab >{user.email}</Tab>
      <Tab onClick={() => {
          dispatch(logOut());
        }
        }>
        Logout
      </Tab>
    </>
  );
};