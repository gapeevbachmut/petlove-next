import Link from 'next/link';
import css from './AuthNavigation.module.css';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { useAuthStore } from '@/stores/zustand/authStore';
import { logout } from '@/lib/api/api';

const AuthNavigation = () => {
  const router = useRouter();

  // Отримуємо поточну сесію та юзера
  const { isAuthenticated, user } = useAuthStore();

  // Отримуємо метод очищення глобального стану
  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    // Викликаємо logout
    await logout();
    // Чистимо глобальний стан
    clearIsAuthenticated();
    // Виконуємо навігацію на сторінку авторизації
    router.push('/');
  };

  // Якщо є сесія - відображаємо кнопку Logout та інформацію про користувача
  // інакше - посилання на логін та реєстрацію

  return (
    <div className={css.navContainer}>
      {isAuthenticated ? (
        <nav aria-label="User Navigation">
          <ul className={css.authNavigation}>
            <li>
              <Link href="/profile" className={css.authLink}>
                Profile
              </Link>
            </li>
            <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav aria-label="Auth Navigation">
          <ul className={css.authNavigation}>
            <li>
              <Link href="/auth/login" className={css.authLink}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/auth/register" className={css.authLink}>
                Registration
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default AuthNavigation;
