import { Notice } from '@/types/api-types';
import NoticesItem from '../NoticesItem/NoticesItem';
import css from './UserFavoriteNoticesList.module.css';
import { useAuthStore } from '@/stores/zustand/authStore';

const UserFavoriteNoticesList = ({ notices }: { notices: Notice[] }) => {
  const user = useAuthStore(state => state.user);

  const favoriteList = user?.noticesFavorites ?? [];
  if (!favoriteList.length) {
    return <p className={css.text}>You have no favorite pets yet</p>;
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
