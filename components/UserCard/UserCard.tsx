import { useAuthStore } from '@/stores/zustand/authStore';
import css from './UserCard.module.css';
import Image from 'next/image';
import Button from '../Button/Button';

export default function UserCard() {
  const user = useAuthStore(state => state.user);

  const avatarSrc =
    user?.avatar && user.avatar.trim() !== ''
      ? user.avatar
      : 'https://res.cloudinary.com/dyounr2tf/image/upload/v1771165302/avatar-WHO_h5eh4t.png';

  return (
    <div>
      <h2>{user?.name}</h2>
      <Button variant="simbol">
        <svg width={18} height={18}>
          <use href="/images/sprite.svg#icon-edit"></use>
        </svg>
      </Button>
      <Image
        src={avatarSrc}
        alt="User avatar"
        width={300}
        height={300}
        className={css.avatar}
      />
    </div>
  );
}
