'use client';

import Link from 'next/link';
import Button from '../Button/Button';
import Image from 'next/image';
import css from './ModalAuthRequired.module.css';

export default function ModalAuthRequired() {
  return (
    <div className={css.container}>
      <div className={css.imageBox}>
        <Image
          className={css.image}
          src="/images/dog.png"
          alt=""
          width={44}
          height={44}
        />
      </div>

      <div className={css.textBox}>
        <h2 className={css.title}>Attention</h2>
        <p className={css.text}>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
      </div>

      <div className={css.buttonBox}>
        <Link href="/auth/login">
          <Button className={css.button} variant="primary">
            Log in
          </Button>
        </Link>

        <Link href="/auth/register">
          <Button className={css.button} variant="secondary">
            Registration
          </Button>
        </Link>
      </div>
    </div>
  );
}
