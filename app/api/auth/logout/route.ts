// // app/api/auth/logout/route.ts

// import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';
// import { api } from '../../api';

// export async function POST() {
//   // Передаємо поточні cookie до API
//   const cookieStore = await cookies();
//   await api.post('users/signout', {
//     headers: {
//       Cookie: cookieStore.toString(),
//     },
//   });

//   // Очищаємо токени після запиту
//   cookieStore.delete('accessToken');
//   cookieStore.delete('refreshToken');

//   return NextResponse.json({ message: 'Logged out successfully' });
// }

// /*Логіка логауту

// Що потрібно зробити для правильного виходу користувача:

// запит до API
// хендлер запиту
// очищення глобального стану
// редірект на сторінку авторизації
// */
