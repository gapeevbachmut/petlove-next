import { User } from '@/types/api-types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Описую тип стану:

type AuthStore = {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
};

// створюю глобальний стан - тут перелічую початкові значення станів
export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      isAuthenticated: false,
      user: null,
      setUser: (user: User) => {
        set(() => ({ user, isAuthenticated: true }));
      },
      clearIsAuthenticated: () => {
        set(() => ({ user: null, isAuthenticated: false }));
      },
    }),
    {
      name: 'pet-love' /*- це назва об'єкта у localstorage*/,

      /*- це властивість яку треба передати у функцію, яка повертає частинку стану */
      partialize: state => ({
        /*тут описую те що повертається*/
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

//----------------------------------------------------------------------

// export const useAuthStore = create<AuthStore>()(set => ({
//   isAuthenticated: false,
//   user: null,
//   setUser: (user: User) => {
//     set(() => ({ user, isAuthenticated: true }));
//   },
//   clearIsAuthenticated: () => {
//     set(() => ({ user: null, isAuthenticated: false }));
//   },
// }));

//----------------------------------------------------------------------
/*
useAuthStore - це хук, який ми будемо викликати у компонентах.
isUser: false - початкове значення .
set - функція, яка дозволяє оновити стан.
......... - функція, оновлення стану.
*/

/*
Використання у компоненті - це з приклада
'use client';
import { useCounterStore } from '@/stores/counterStore';
export const Counter = () => {
  // замість такого синтаксиса - const { count, increment } = useCounterStore();

// використовуємо такий:
//(Компонент буде оновлюватись тільки при зміні цих даних)
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return <button onClick={increment}>Click: {count}</button>;};
*/

//
//
//

/*
для збереження даних при перезавантаження записуємо їх у локальне сховище - localstorage
огортаємо хук у рперсіст
import { persist } from "zustand/middleware";

*/
