// components/Header/Header.tsx

'use client';
import Image from 'next/image';
import css from './Header.module.css';
import Link from 'next/link';
import Button from '../Button/Button';

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
        {/* навігація для гостя  та авторизованого */}
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
        {/* //
        //
        // зробити компонент навігації користувачів та юзерів
        //
        // */}
        <ul>
          <li>
            <Link href="/login">Log In</Link>
            {/* <Button onClick={() => alert('It is WORK - Log In!!!!')}>
                Log In
              </Button> */}
          </li>
          <li>
            <Link href="/register">
              <Button onClick={() => alert('It is WORK - Log In!!!!')}>
                Registration
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
