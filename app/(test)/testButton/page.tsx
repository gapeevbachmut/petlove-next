'use client';

import Button from '@/components/Button/Button';
import ModalOn from '@/components/Modal/ModalOn';

export default function testButton() {
  return (
    <div>
      <h1>TEST BUTTON</h1>
      <p>variant="primary"</p>
      <Button variant="primary">LOG IN</Button>
      <Button onClick={() => alert('It is WORK!!!!')}>Основна кнопка</Button>
      <p>variant="secondary"</p>
      <Button variant="secondary">registration</Button>
      <Button variant="secondary">Другорядна кнопка</Button>
      <p>variant="tertiary"</p>
      <Button variant="tertiary">Третинна кнопка</Button>
      quaternary
      <p>variant="quaternary"</p>
      <Button variant="quaternary">4 X 4 X 4</Button>
      <p>variant="text"</p>
      <Button variant="text">Read more</Button>
      <p>variant="simbol"</p>
      <Button variant="simbol">
        <svg width={18} height={18}>
          <use href="/images/sprite.svg#icon-edit"></use>
        </svg>
      </Button>
      <Button variant="simbol">
        <svg width={18} height={18}>
          <use href="/images/sprite.svg#icon-heart"></use>
        </svg>
      </Button>
      <Button variant="simbol">
        <svg width={18} height={18}>
          <use href="/images/sprite.svg#icon-trash"></use>
        </svg>
      </Button>
      <p>disabled</p>
      <Button disabled>Вимкнена кнопка</Button>
      <hr />
      <ModalOn />
    </div>
  );
}
