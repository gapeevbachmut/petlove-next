'use client';

import Button from '@/components/Button/Button';
import { ApiError } from '@/lib/api/api';
import { register } from '@/lib/api/api';
import { useAuthStore } from '@/stores/zustand/authStore';
import { RegisterRequest } from '@/types/api-types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import css from './Register.module.css';
import Link from 'next/link';

export default function Registration() {
  const router = useRouter();
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Отримуємо метод із стора
  const setUser = useAuthStore(state => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      setError('');
      // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as RegisterRequest & {
        confirmPassword?: string;
      };

      const { confirmPassword, ...dataToSend } = formValues;

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      // Виконуємо запит
      const res = await register(dataToSend);

      // Виконуємо редірект або відображаємо помилку

      // Записуємо користувача у глобальний стан
      setUser(res);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsVisible(false);
      router.push('/profile');
    } catch (error) {
      const status = (error as ApiError).response?.status;

      if (status === 409) {
        setError('User with this email already exists');
        return;
      }
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          'Oops... some error'
      );
    }
  };

  const handleEye = () => {
    setIsVisible(prev => !prev);
  };

  const confirmPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };
  useEffect(() => {
    if (!confirmPassword) {
      setError('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  }, [password, confirmPassword]);

  return (
    <div className={css.container}>
      <div className={css.imgBox}>
        <div className={css.textContainer}>
          <Image
            className={css.block}
            src="https://res.cloudinary.com/dyounr2tf/image/upload/v1771599795/block_1_tezkju.png"
            alt="Login page"
            width={294}
            height={122}
          />
        </div>
        <Image
          className={css.image}
          src="https://res.cloudinary.com/dyounr2tf/image/upload/v1771592953/image_1_gcnbxb.png"
          alt="Login page"
          width={335}
          height={280}
        />
      </div>

      <div className={css.formContainer}>
        <form action={handleSubmit} className={css.form}>
          <h2 className={css.title}>Registration</h2>
          <p className={css.text}>
            Thank you for your interest in our platform.
          </p>
          <div className={css.inputBox}>
            {/* --- NAME--- */}

            <label className={css.label}>
              <input
                className={css.input}
                type="text"
                name="name"
                value={name}
                required
                placeholder="Name"
                onChange={e => {
                  setName(e.target.value);
                  setError('');
                }}
              />
            </label>

            {/* --- EMAIL --- */}
            <label className={css.label}>
              <input
                className={css.input}
                type="email"
                name="email"
                value={email}
                required
                placeholder="Email"
                onChange={e => {
                  setEmail(e.target.value);
                  setError('');
                }}
              />
            </label>

            {/* --- PASSWORD --- */}
            <label className={css.label}>
              <input
                className={css.input}
                type={isVisible ? 'text' : 'password'}
                name="password"
                value={password}
                required
                placeholder="Password"
                onChange={e => {
                  setPassword(e.target.value);
                  setError('');
                }}
              />

              <button
                className={css.passwordEye}
                type="button"
                onClick={handleEye}
              >
                <svg width={18} height={18}>
                  <use
                    href={`/images/sprite.svg#${isVisible ? 'icon-eye' : 'icon-eye-off'}`}
                  ></use>
                </svg>
              </button>
            </label>

            {/* --- CONFIRM   PASSWORD --- */}
            <label className={css.label}>
              <input
                className={css.input}
                type={isVisible ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                required
                placeholder="Confirm Password"
                onChange={confirmPass}
              />

              <button
                className={css.passwordEye}
                type="button"
                onClick={handleEye}
              >
                <svg width={18} height={18}>
                  <use
                    href={`/images/sprite.svg#${isVisible ? 'icon-eye' : 'icon-eye-off'}`}
                  ></use>
                </svg>
              </button>
            </label>
          </div>
          {error && <p className={css.error}>{error}</p>}
          <Button className={css.loginBtn} disabled={!!error}>
            Registration
          </Button>

          <div className={css.hintBox}>
            <p className={css.hintText}>Already have an account? </p>
            <Link href={'/auth/login'} className={css.hintLink}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
