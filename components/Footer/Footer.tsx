import Link from 'next/link';
import css from './Footer.module.css';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <ul>
        <li>
          <Link href="/testSvg">SVG</Link>
        </li>
        <li>
          <Link href="/testButton">BUTTON</Link>
        </li>
      </ul>
      <p>
        Created by
        <Link href="https://github.com/gapeevbachmut" target="_blank">
          {' '}
          Hapieiev Andrii
        </Link>
      </p>

      <p>© 2026 - All rights reserved.</p>
      {/* <p>{date}</p> */}
    </footer>
  );
};

export default Footer;
