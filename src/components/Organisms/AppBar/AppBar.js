import { Navigation } from '../../Molecules/Navigation/Navigation';
import { UserMenu } from '../../Molecules/UserMenu/UserMenu';
import { AuthNav } from '../../Atoms/AuthNav/AuthNav';
import { useAuth } from '../../../redux/auth.js';
import { Tabs, TabList } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Tabs>
        <TabList>
          <Navigation />
          <div className='bufor'></div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </TabList>
      </Tabs>
    </header>
  );
};
