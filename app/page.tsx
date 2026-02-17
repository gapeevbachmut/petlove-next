'use client';

import clsx from 'clsx';
import css from './mainPage.module.css';
import Image from 'next/image';

export default function Main() {
  return (
    <div className={css.mainContainer}>
      <div className={css.textContainer}>
        <h1 className={css.title}>
          Take good <span className={css.titleSpan}>care</span> of your small
          pets
        </h1>
        <div className={css.textBox}>
          <p className={css.text}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div className={css.imgBox}>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="https://res.cloudinary.com/dyounr2tf/image/upload/v1771325883/mainImgTablet_jakqbz.png"
            width={704}
            height={496}
          />
          <Image
            src="https://res.cloudinary.com/dyounr2tf/image/upload/v1771322050/mainImgMobile_xfdr49.png"
            alt="Main image"
            width={320}
            height={402}
          />
        </picture>
      </div>
    </div>
  );
}
