import Link from 'next/link';
import css from './AuthNavigation.module.css';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';

const AuthNavigation = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push('/login');
  };
  return (
    <>
      <nav aria-label="Auth Navigation">
        <ul className={css.authNavigation}>
          <li>
            <Link href="/login" className={css.authLink}>
              Log In
            </Link>
          </li>
          <li>
            <Link href="/register" className={css.authLink}>
              Registration
            </Link>
          </li>
        </ul>
      </nav>
      <nav aria-label="User Navigation">
        <ul className={css.authNavigation}>
          <li>
            <Link href="/prifile" className={css.authLink}>
              Profile
            </Link>
          </li>
          <li>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default AuthNavigation;
