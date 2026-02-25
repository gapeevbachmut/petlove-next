'use client';

// import AvatarPicker from '@/components/AvatarPicker/AvatarPicker';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import ModalEditUser from '@/components/ModalEditUser/ModalEditUser';
import UserCard from '@/components/UserCard/UserCard';
import UserFavoriteNoticesList from '@/components/UserFavoriteNoticesList/UserFavoriteNoticesList';
import { getNoticesByIds } from '@/lib/api/api';
import { useAuthStore } from '@/stores/zustand/authStore';
import { Notice } from '@/types/api-types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

  const avatarSrc =
    user?.avatar && user.avatar.trim() !== ''
      ? user.avatar
      : 'https://res.cloudinary.com/dyounr2tf/image/upload/v1771165302/avatar-WHO_h5eh4t.png';

  console.log('user', user);

  return (
    <>
      {/* <UserCard /> */}
      <div>
        <h1>Page PROFILE</h1>
        <p>user: {user?.name}</p>
        <p>email: {user?.email}</p>
        <p>phone: {user?.phone}</p>

        <Image
          src={avatarSrc}
          alt="User avatar"
          width={300}
          height={300}
          // className={css.avatar}
        />

        <Button variant="primary" onClick={handleModalEditUser}>
          Edit profile
        </Button>

        <UserFavoriteNoticesList notices={favoriteNotices} />
        {isModalEditUser && (
          <Modal onClose={closeModal}>
            <ModalEditUser onClose={closeModal} />
          </Modal>
        )}
      </div>
    </>
  );
}
