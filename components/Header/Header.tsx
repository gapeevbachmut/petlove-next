// components/Header/Header.tsx

import css from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Main">
        <svg width={120} height={30}>
          <use href="/images/sprite.svg#icon-logo"></use>
        </svg>
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
