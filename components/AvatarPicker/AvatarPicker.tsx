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

const defaultAvatar =
  'https://res.cloudinary.com/dyounr2tf/image/upload/v1771165302/avatar-WHO_h5eh4t.png';

const AvatarPicker = ({ onChangeAvatar, profileAvatarUrl }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [previewUrl, setPreviewUrl] = useState(defaultAvatar);
  const [error, setError] = useState('');

  useEffect(() => {
    const avatar = profileAvatarUrl?.trim() || defaultAvatar;
    setPreviewUrl(avatar);
    setInputValue(profileAvatarUrl ?? '');
  }, [profileAvatarUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError('');
  };

  // const handleUpload = () => {
  //   if (!inputValue.trim()) {
  //     setError('Please enter image URL');
  //     return;
  //   }

  //   try {
  //     new URL(inputValue);
  //     setPreviewUrl(inputValue);
  //     onChangeAvatar(inputValue);
  //   } catch {
  //     setError('Invalid URL format');
  //   }
  // };

  const handleUpload = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setError('Please enter image URL');
      return;
    }

    try {
      new URL(trimmed);

      const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(trimmed);

      if (!isImage) {
        setError('URL must point to an image');
        return;
      }

      setPreviewUrl(trimmed);
      onChangeAvatar(trimmed);
      setError('');
    } catch {
      setError('Invalid URL format');
    }
  };

  return (
    <div className={css.container}>
      <div className={css.picker}>
        <Image
          src={previewUrl || defaultAvatar}
          alt="Avatar preview"
          width={300}
          height={300}
          className={css.avatar}
        />

        <div className={css.urlBox}>
          <input
            type="text"
            placeholder="Paste avatar URL"
            value={inputValue}
            onChange={handleChange}
            className={css.inputUrl}
          />

          <Button
            variant="secondary"
            type="button"
            className={css.upload}
            onClick={handleUpload}
          >
            Previev avatar
          </Button>
        </div>
      </div>

      {error && <p className={css.error}>{error}</p>}
    </div>
  );
};

export default AvatarPicker;
