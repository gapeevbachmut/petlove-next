import Link from 'next/link';
import css from './AuthNavigation.module.css';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { useAuthStore } from '@/stores/zustand/authStore';
import { logout } from '@/lib/api/api';

type Props = {
  handleNavigate?: (path: string) => void;
};

const AuthNavigation = ({ handleNavigate }: Props) => {
  const router = useRouter();

  const { isAuthenticated, user } = useAuthStore();

  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    logout();
    clearIsAuthenticated();
    router.push('/');
  };

  return (
    <div className={css.navContainer}>
      {isAuthenticated ? (
        <nav aria-label="User Navigation">
          <ul className={css.authNavigation}>
            <li>
              <Button
                className={css.authNavBtn}
                variant="primary"
                onClick={() =>
                  handleNavigate
                    ? handleNavigate('/auth/profile')
                    : router.push('/auth/profile')
                }
              >
                Profile
              </Button>
              {/* <Link href="/profile" className={css.authLink}>
                Profile
              </Link> */}
            </li>
            <li>
              <Button
                variant="secondary"
                className={css.authNavBtn}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav aria-label="Auth Navigation">
          <ul className={css.authNavigation}>
            <li>
              <Button
                className={css.authNavBtn}
                variant="primary"
                onClick={() =>
                  handleNavigate
                    ? handleNavigate('/auth/login')
                    : router.push('/auth/login')
                }
              >
                LOG IN
              </Button>
            </li>
            <li>
              <Button
                className={css.authNavBtn}
                variant="secondary"
                onClick={() =>
                  handleNavigate
                    ? handleNavigate('/auth/register')
                    : router.push('/auth/register')
                }
              >
                Registration
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default AuthNavigation;
