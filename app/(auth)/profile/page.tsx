'use client';

import { useAuthStore } from '@/stores/zustand/authStore';

export default function Profile() {
  const user = useAuthStore(state => state.user);
  return (
    <>
      <h1>Page PROFILE</h1>
      <p>user: {user?.name}</p>
      <p>email: {user?.email}</p>
    </>
  );
}
