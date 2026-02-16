'use client';

import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Button from '../Button/Button';
import css from './HeaderMobile.module.css';

type Props = {
  closeMenu: () => void;
  handleNavigate: (path: string) => void;
};

export default function HeaderMobile({ closeMenu, handleNavigate }: Props) {
  return (
    <div className={css.mobileMenu}>
      <Button
        className={css.closeBtn}
        variant="quaternary"
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <svg width={30} height={30}>
          <use href="/images/x.svg"></use>
        </svg>
      </Button>

      <nav>
        <ul className={css.mobileNavigation}>
          <li>
            <Button
              variant="tertiary"
              className={css.buttonMobileMenu}
              onClick={() => handleNavigate('/news')}
            >
              News
            </Button>
          </li>
          <li>
            <Button
              variant="tertiary"
              className={css.buttonMobileMenu}
              onClick={() => handleNavigate('/notices')}
            >
              Find pet
            </Button>
          </li>
          <li>
            <Button
              variant="tertiary"
              className={css.buttonMobileMenu}
              onClick={() => handleNavigate('/friends')}
            >
              Our friends
            </Button>
          </li>
        </ul>
      </nav>
      <AuthNavigation handleNavigate={handleNavigate} />
    </div>
  );
}
