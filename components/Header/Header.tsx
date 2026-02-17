// components/Header/Header.tsx

'use client';
import Image from 'next/image';
import css from './Header.module.css';
import Link from 'next/link';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import { useAuthStore } from '@/stores/zustand/authStore';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  // блокуємо скрол
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={` containerGlobal
        ${clsx(css.header, isHomePage ? css.headerHome : css.headerInner)}`}
    >
      {isHomePage ? (
        <Link href="/" aria-label="Main" className={css.logoLink}>
          <Image
            className={css.logo}
            src="/images/logo_petLove_white.png"
            alt="logo"
            width={105}
            height={30}
          />
        </Link>
      ) : (
        <Link href="/" aria-label="Main" className={css.logoLink}>
          <Image
            className={css.logo}
            src="/images/logo_petLove.png"
            alt="logo"
            width={105}
            height={30}
          />
        </Link>
      )}

      {/* Desktop navigation */}
      <div className={css.headerNavigation}>
        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li>
              <Button
                className={css.desktonNav}
                variant="tertiary"
                onClick={() => handleNavigate('/news')}
              >
                News
              </Button>
            </li>
            <li>
              <Button
                className={css.desktonNav}
                variant="tertiary"
                onClick={() => handleNavigate('/notices')}
              >
                Find pet
              </Button>
            </li>
            <li>
              <Button
                className={css.desktonNav}
                variant="tertiary"
                onClick={() => handleNavigate('/friends')}
              >
                Our friends
              </Button>
            </li>
          </ul>
        </nav>
        <AuthNavigation />
      </div>

      <div className={css.authBox}>
        {/* icon  user */}
        {isAuthenticated && (
          <div className={css.authBoxUser}>
            <Button
              className={css.authUser}
              variant="simbol"
              onClick={() => handleNavigate('/profile')}
            >
              <svg width={26} height={26}>
                <use href="/images/sprite.svg#icon-user"></use>
              </svg>
            </Button>
            <p className={css.username}>{user?.name}</p>
          </div>
        )}

        {/* Burger button */}
        <Button
          className={css.burger}
          variant="quaternary"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <svg width={30} height={30} className={css.svgBurger}>
            <use href="/images/menu-01.svg"></use>
          </svg>
        </Button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <HeaderMobile closeMenu={closeMenu} handleNavigate={handleNavigate} />
      )}
    </header>
  );
};

export default Header;
