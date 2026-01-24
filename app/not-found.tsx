'use client';

import Link from 'next/link';
import css from './notFound.module.css';

const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.NotFoundContainer}>
        <h1 className={css.NotFoundTitle}>OOPS!!!</h1>
        <p className={css.NotFoundTitle}>You have a problem!</p>
        <p className={css.NotFoundTitle}>404</p>
        <h3 className={css.NotFoundDescr}>Page not found</h3>
        <p className={css.NotFoundText}>Try again.</p>
        <Link href="/" className={css.NotFoundLink}>
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
