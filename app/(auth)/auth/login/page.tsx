//app/(auth)/auth/login/page.tsx

'use client';

import { ApiError, login } from '@/lib/api/api';
import { useAuthStore } from '@/stores/zustand/authStore';
import { LoginRequest } from '@/types/api-types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import css from './Login.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Link from 'next/link';

export default function LogIn() {
  const router = useRouter();
  const [error, setError] = useState('');
  // password + email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Отримуємо метод із стора
  const setUser = useAuthStore(state => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      setError('');

      // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as LoginRequest;
      // Виконуємо запит
      const res = await login(formValues);
      // Записуємо користувача у глобальний стан
      setUser({
        ...res,
        token: res.token, // зміни пов'язані з видаленням серверних обробників запитів
      });
      setEmail('');
      setPassword('');
      setIsVisible(false);
      router.push('/');
    } catch (error) {
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

  return (
    <div className={css.container}>
      <div className={css.imgBox}>
        <Image
          className={css.image}
          src="https://res.cloudinary.com/dyounr2tf/image/upload/v1771580453/login_zdrny7.png"
          alt="Login page"
          width={335}
          height={280}
        />
      </div>
      <form action={handleSubmit} className={css.form}>
        <h2 className={css.title}>Log in</h2>
        <p className={css.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <div className={css.inputBox}>
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

              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   setEmail(e.target.value)
              // }
            />
          </label>
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

              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   setPassword(e.target.value)
              // }
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

        <Button className={css.loginBtn}>Log in</Button>

        <div className={css.hintBox}>
          <p className={css.hintText}>Don`t have an account? </p>
          <Link href={'/auth/register'} className={css.hintLink}>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
