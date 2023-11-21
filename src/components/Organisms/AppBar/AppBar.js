import { Navigation } from '../../Molecules/Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../../redux/auth.js';
// import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};