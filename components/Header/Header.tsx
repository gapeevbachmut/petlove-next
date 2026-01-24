// components/Header/Header.tsx

import Image from 'next/image';
import css from './Header.module.css';
import Link from 'next/link';

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
          <li>
            <Link href="/testSvg">SVG</Link>
          </li>
          <li>
            <Link href="/testButton">BUTTON</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
