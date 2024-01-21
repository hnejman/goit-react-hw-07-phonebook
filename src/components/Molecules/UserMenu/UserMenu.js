import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import { useAuth } from '../../../redux/auth';
import { Tab, useStyleConfig } from '@chakra-ui/react';
import { Taby } from '../../Atoms/themes/Tabs';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const  {user}  = useAuth();
  // const { variants, ...rest } = props;
  const styles = useStyleConfig('active', {Taby})

  return(
    <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
      <Tab >{user.email}</Tab>
      <Tab onClick={() => {
          dispatch(logOut());
        }
        }>
        Logout
      </Tab>
    </div>
  );
};