// import Image from "next/image";
'use client';

import Button from '@/components/Button/Button';

export default function Main() {
  return (
    <div>
      <main>
        <div>
          <h1>Main page</h1>
          <Button variant="primary">LOG IN</Button>
          <Button onClick={() => alert('Натиснули!')}>Основна кнопка</Button>
          <Button variant="secondary">registration</Button>
          <Button variant="secondary">Другорядна кнопка</Button>
          <Button disabled>Вимкнена кнопка</Button>
          <Button variant="text">Read more</Button>
          <Button variant="simbol">
            <svg width={30} height={30}>
              <use href="/public/images/sprite.svg#icon-edit"></use>
            </svg>
          </Button>
        </div>
      </main>
    </div>
  );
}
