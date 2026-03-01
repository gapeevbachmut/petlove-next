import { useAuthStore } from '@/stores/zustand/authStore';
import css from './UserCard.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { logout } from '@/lib/api/api';
import { useRouter } from 'next/navigation';

export default function UserCard() {
  const router = useRouter();

  const user = useAuthStore(state => state.user);

  const avatarSrc =
    user?.avatar && user.avatar.trim() !== ''
      ? user.avatar
      : 'https://res.cloudinary.com/dyounr2tf/image/upload/v1771165302/avatar-WHO_h5eh4t.png';

  const handleLogout = async () => {
    logout();
    // clearIsAuthenticated();
    router.push('/');
  };

  // console.log('user-card', user);
  return (
    <div className={css.container}>
      <div className={css.imageBox}>
        <Image
          src={avatarSrc}
          alt="User avatar"
          width={300}
          height={300}
          className={css.avatar}
        />
      </div>
      <div className={css.textContainer}>
        <h3 className={css.title}>My information</h3>
        <ul className={css.userList}>
          <li className={css.userData}>
            <p className={css.userText}>{user?.name}</p>
          </li>
          <li className={css.userData}>
            <p className={css.userText}>{user?.email}</p>
          </li>
          {user?.phone && (
            <li className={css.userData}>
              <p className={css.userText}>{user?.phone}</p>
            </li>
          )}
        </ul>
      </div>
      <Button variant="secondary" onClick={handleLogout} className={css.logout}>
        Logout
      </Button>
    </div>
  );
}
