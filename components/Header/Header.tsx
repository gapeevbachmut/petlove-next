// components/Header/Header.tsx

'use client';
import Image from 'next/image';
import css from './Header.module.css';
import Link from 'next/link';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Main">
        <Image
          src="/images/logo_petLove.png"
          alt="logo"
          width={105}
          height={30}
        />
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/notices">Find pet</Link>
          </li>
          <li>
            <Link href="/friends">Our friends</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* навігація для гостя  та авторизованого */}
        <AuthNavigation />
      </div>
    </header>
  );
};

export default Header;
