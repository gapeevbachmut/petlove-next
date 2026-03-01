import { Notice } from '@/types/api-types';
import NoticesItem from '../NoticesItem/NoticesItem';
import css from './UserFavoriteNoticesList.module.css';
import { useAuthStore } from '@/stores/zustand/authStore';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const UserFavoriteNoticesList = ({ notices }: { notices: Notice[] }) => {
  const user = useAuthStore(state => state.user);
  // const router = useRouter();
  // const routPet = router.push('/notices');

  const favoriteList = user?.noticesFavorites ?? [];
  if (!favoriteList.length) {
    return (
      <p className={css.text}>
        Oops,{' '}
        <span className={css.textSpan}>
          looks like there aren't any furries
        </span>{' '}
        on our adorable page yet. Do not worry! View your pets on the
        <Link href="/notices" className={css.textLink}>
          "find your favorite pet"{' '}
        </Link>
        page and add them to your favorites.
      </p>
    );
  }

  return (
    <ul className={css.noticesList}>
      {favoriteList.map(notice => (
        <NoticesItem key={notice._id} item={notice} isProfile />
      ))}
    </ul>
  );
};

export default UserFavoriteNoticesList;
