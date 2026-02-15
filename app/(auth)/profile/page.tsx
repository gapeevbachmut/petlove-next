'use client';

// import AvatarPicker from '@/components/AvatarPicker/AvatarPicker';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import ModalEditUser from '@/components/ModalEditUser/ModalEditUser';
import { useAuthStore } from '@/stores/zustand/authStore';
import Image from 'next/image';
import { useState } from 'react';

export default function Profile() {
  const user = useAuthStore(state => state.user);
  const [isModalEditUser, setIsModalEditUser] = useState(false);

  const openModal = () => setIsModalEditUser(true);

  const closeModal = () => setIsModalEditUser(false);

  const handleModalEditUser = () => {
    if (user) {
      setIsModalEditUser(true);
    } else {
      setIsModalEditUser(false);
    }
  };

  // console.log('user', user);

  return (
    <>
      <h1>Page PROFILE</h1>
      <p>user: {user?.name}</p>
      <p>email: {user?.email}</p>
      {user?.avatar && (
        <Image
          src={user.avatar}
          alt="User avatar"
          width={300}
          height={300}
          // className={css.avatar}
        />
      )}

      <Button variant="primary" onClick={handleModalEditUser}>
        Edit profile
      </Button>
      {isModalEditUser && (
        <Modal onClose={closeModal}>
          <ModalEditUser onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}
