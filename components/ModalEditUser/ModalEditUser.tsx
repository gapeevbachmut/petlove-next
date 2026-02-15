'use client';

import Link from 'next/link';
import Button from '../Button/Button';
import AvatarPicker from '../AvatarPicker/AvatarPicker';

export default function ModalEditUser() {
  return (
    <div>
      <div>
        <h1>Edit profile</h1>
        <AvatarPicker />
      </div>
    </div>
  );
}
