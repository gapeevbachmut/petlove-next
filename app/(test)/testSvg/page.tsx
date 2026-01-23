import css from './Test-SVG.module.css';

export default function TestSVG() {
  return (
    <>
      <div className={css.container}>
        <h1>Test SVG-icons</h1>
        <img src="/images/cat.png" />
        <img src="/images/dog.png" />
        <svg width={105} height={28}>
          <use href="/public/logo.svg"></use>
        </svg>
        <hr />
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-logo-white-mobile"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-logo-white"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-logo-mobile"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-logo"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-edit"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-trash"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-heart"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-male"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-female"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-healthicons_sex"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-star"></use>
        </svg>
        <svg width={30} height={30} className={css.calendar}>
          <use href="/images/sprite.svg#icon-calendar"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-user"></use>
        </svg>
        <svg width={30} height={30} className={css.down}>
          <use href="/images/sprite.svg#icon-chevron-down"></use>
        </svg>
        <svg width={30} height={30} className={css.search}>
          <use href="/images/sprite.svg#icon-search"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-check"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-cross-small"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-eye"></use>
        </svg>
        <svg width={30} height={30}>
          <use href="/images/sprite.svg#icon-eye-off"></use>
        </svg>
      </div>
    </>
  );
}
