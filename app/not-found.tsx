'use client';

import Link from 'next/link';
import css from './NotFound.module.css';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.simbol}>4</span>
        </li>
        <li className={css.item}>
          <Image
            className={css.image}
            src="https://res.cloudinary.com/dyounr2tf/image/upload/v1771606513/IMG_5099_1_1_hvix2v.png"
            alt="Login page"
            width={116}
            height={116}
          />
        </li>
        <li className={css.item}>
          <span className={css.simbol}>4</span>
        </li>
      </ul>
      <p className={css.text}>Ooops! This page not found :(</p>
      <Link href="/" className={css.NotFoundLink}>
        To home page
      </Link>
    </div>
  );
};

export default NotFound;
