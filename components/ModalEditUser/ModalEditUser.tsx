'use client';

// import Link from 'next/link';
// import Button from '../Button/Button';
import AvatarPicker from '../AvatarPicker/AvatarPicker';
import { useEffect, useState } from 'react';
import { getMe, updateMe } from '@/lib/api/api';
import { useAuthStore } from '@/stores/zustand/authStore';
import Button from '../Button/Button';

type Props = {
  onClose: () => void;
};

export default function ModalEditUser({ onClose }: Props) {
  const setUser = useAuthStore(state => state.setUser);
  const currentUser = useAuthStore(state => state.user);

  const [userName, setUserName] = useState(currentUser?.name ?? '');
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar ?? '');

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const updatedUser = await updateMe({
        name: userName,
        avatar: avatarUrl,
      });
      //   console.log('UPDATED USER:', updatedUser);
      //  ОНОВЛЮЄМО ZUSTAND
      setUser({
        ...updatedUser,
        token: currentUser?.token,
      });

      onClose();
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <div>
        <h1>Edit profile</h1>
        <AvatarPicker
          profileAvatarUrl={avatarUrl}
          onChangeAvatar={setAvatarUrl}
        />
        <form onSubmit={handleSaveUser}>
          <input type="text" value={userName} onChange={handleChange} />
          {/* <Button type="submit">Save user</Button> */}
          <button type="submit">Save change</button>
        </form>
      </div>
    </div>
  );
}
