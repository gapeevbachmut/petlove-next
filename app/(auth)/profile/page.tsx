'use client';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import ModalEditUser from '@/components/ModalEditUser/ModalEditUser';
import UserCard from '@/components/UserCard/UserCard';
import UserFavoriteNoticesList from '@/components/UserFavoriteNoticesList/UserFavoriteNoticesList';
import { getNoticesByIds } from '@/lib/api/api';
import { useAuthStore } from '@/stores/zustand/authStore';
import { Notice } from '@/types/api-types';
import { useEffect, useState } from 'react';
import css from './profile.module.css';

export default function Profile() {
  const user = useAuthStore(state => state.user);
  const [isModalEditUser, setIsModalEditUser] = useState(false);
  const [favoriteNotices, setFavoriteNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user?.noticesFavorites?.length) return;

      const ids = user.noticesFavorites.map(fav => fav._id);

      const res = await getNoticesByIds(ids);
      setFavoriteNotices(res);
    };

    fetchFavorites();
  }, [user]);

  const openModal = () => setIsModalEditUser(true);

  const closeModal = () => setIsModalEditUser(false);

  const handleModalEditUser = () => {
    if (user) {
      setIsModalEditUser(true);
    } else {
      setIsModalEditUser(false);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.btnBox}>
        <Button variant="simbol" onClick={handleModalEditUser}>
          <svg width={18} height={18}>
            <use href="/images/sprite.svg#icon-edit"></use>
          </svg>
        </Button>
      </div>

      <UserCard />
      <UserFavoriteNoticesList notices={favoriteNotices} />
      {isModalEditUser && (
        <Modal onClose={closeModal}>
          <ModalEditUser onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
