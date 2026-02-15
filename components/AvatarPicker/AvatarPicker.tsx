// components/AvatarPicker/AvatarPicker.tsx

'use client';

import { useEffect, useState } from 'react';
import css from './AvatarPicker.module.css';
import Image from 'next/image';
import Button from '../Button/Button';

type Props = {
  //   avatar?: string;
  onChangeAvatar: (file: File | null) => void;
  profileAvatarUrl?: string;
};

const AvatarPicker = ({ onChangeAvatar, profileAvatarUrl }: Props) => {
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    if (profileAvatarUrl) {
      setPreviewUrl(profileAvatarUrl);
    }
  }, [profileAvatarUrl]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('file', file);
    setError('');

    if (file) {
      // Перевіряємо тип файлу
      if (!file.type.startsWith('image/')) {
        setError('Only images');
        return;
      }

      // Перевіряємо розмір файлу (максимум 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Max file size 5MB');
        return;
      }

      onChangeAvatar(file); // передаємо файл у батьківський компонент

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemove = () => {
    onChangeAvatar(null); // очищуємо батьківський стан
    setPreviewUrl('');
  };

  return (
    <div>
      <div className={css.picker}>
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview"
            width={300}
            height={300}
            className={css.avatar}
          />
        )}
        <label
          className={previewUrl ? `${css.wrapper} ${css.reload}` : css.wrapper}
        >
          📷 Choose photo
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={css.input}
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
