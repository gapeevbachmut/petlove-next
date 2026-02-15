// components/AvatarPicker/AvatarPicker.tsx

'use client';

import { useEffect, useState } from 'react';
import css from './AvatarPicker.module.css';
import Image from 'next/image';
import Button from '../Button/Button';

type Props = {
  onChangeAvatar: (url: string) => void;
  profileAvatarUrl?: string;
};

const AvatarPicker = ({ onChangeAvatar, profileAvatarUrl }: Props) => {
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    setPreviewUrl(profileAvatarUrl ?? '');
    // if (profileAvatarUrl) {
    //   setPreviewUrl(profileAvatarUrl ?? '');
    // }
  }, [profileAvatarUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setPreviewUrl(url);
    onChangeAvatar(url);
    setError('');
  };

  const handleRemove = () => {
    onChangeAvatar(''); // очищуємо
    setPreviewUrl('');
  };

  return (
    <div>
      <div className={css.picker}>
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Avatar preview"
            width={300}
            height={300}
            className={css.avatar}
          />
        )}
        <label
          className={previewUrl ? `${css.wrapper} ${css.reload}` : css.wrapper}
        >
          Paste avatar URL
          <input
            type="text"
            placeholder="Paste avatar URL"
            value={previewUrl}
            onChange={handleFileChange}
            className={css.inputNo}
          />
        </label>
        {previewUrl && (
          <Button
            variant="primary"
            // className={css.remove}
            onClick={handleRemove}
          >
            ❌
          </Button>
        )}
      </div>
      {error && <p className={css.error}>{error}</p>}
    </div>
  );
};

export default AvatarPicker;
