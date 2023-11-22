import { Navigation } from '../../Molecules/Navigation/Navigation';
import { UserMenu } from '../../Molecules/UserMenu/UserMenu';
import { AuthNav } from '../../Atoms/AuthNav/AuthNav';
import { useAuth } from '../../../redux/auth.js';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};