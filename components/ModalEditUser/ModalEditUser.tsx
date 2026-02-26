'use client';

import AvatarPicker from '../AvatarPicker/AvatarPicker';
import { useState } from 'react';
import { updateMe } from '@/lib/api/api';
import { useAuthStore } from '@/stores/zustand/authStore';
import css from './ModalEditUser.module.css';
import Button from '../Button/Button';

type Props = {
  onClose: () => void;
};

export default function ModalEditUser({ onClose }: Props) {
  const setUser = useAuthStore(state => state.setUser);
  const currentUser = useAuthStore(state => state.user);

  const [username, setUsername] = useState(currentUser?.name ?? '');
  const [email, setEmail] = useState(currentUser?.email ?? '');
  const [phone, setPhone] = useState(currentUser?.phone ?? '');
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar ?? '');
  const [loading, setLoading] = useState(false);

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      const updatedUser = await updateMe({
        name: username,
        email,
        phone,
        avatar: avatarUrl,
      });

      setUser({
        ...updatedUser,
        token: currentUser?.token,
      });

      onClose();
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className={css.title}>Edit information</h1>

      <AvatarPicker
        profileAvatarUrl={avatarUrl}
        onChangeAvatar={setAvatarUrl}
      />

      <form onSubmit={handleSaveUser} className={css.form}>
        <input
          className={css.input}
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Name"
        />

        <input
          className={css.input}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          disabled
        />

        <input
          className={css.input}
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Phone"
        />

        <Button variant="primary" disabled={loading} className={css.save}>
          {loading ? 'Saving...' : 'Save changes'}
        </Button>
      </form>
    </div>
  );
}
