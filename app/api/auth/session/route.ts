// app/api/auth/session/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { api } from '../../api/api';
import { parse } from 'cookie';

export async function GET() {
  // Отримуємо інстанс для роботи з cookie
  const cookieStore = await cookies();

  // Дістаємо токени
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  // Якщо accessToken є — сесія валідна
  if (accessToken) {
    return NextResponse.json({ success: true });
  }

  // Якщо accessToken немає — перевіряємо refreshToken
  if (refreshToken) {
    // Виконуємо запит до API, передаючи всі cookie у заголовку
    const apiRes = await api.get('auth/session', {
      headers: {
        Cookie: cookieStore.toString(), // перетворюємо cookie у рядок
      },
    });

    // Якщо бекенд повернув нові токени — встановлюємо їх
    const setCookie = apiRes.headers['set-cookie'];
    if (setCookie) {
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed['Max-Age']),
        };
        if (parsed.accessToken)
          cookieStore.set('accessToken', parsed.accessToken, options);
        if (parsed.refreshToken)
          cookieStore.set('refreshToken', parsed.refreshToken, options);
      }
      return NextResponse.json({ success: true });
    }
  }

  // Якщо немає refreshToken або API повернув пустий setCookie — сесія невалідна
  return NextResponse.json({ success: false });
}

//------------------------------------------------

// import { NextRequest, NextResponse } from 'next/server';
// import { api, ApiError } from '../../api/api';
// import { parse } from 'cookie';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const apiRes = await api.post('auth/register', body);

//     const response = NextResponse.json(apiRes.data);

//     const setCookie = apiRes.headers['set-cookie'];

//     if (setCookie) {
//       const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

//       for (const cookieStr of cookieArray) {
//         const parsed = parse(cookieStr);

//         const options = {
//           httpOnly: true,
//           secure: process.env.NODE_ENV === 'production',
//           path: parsed.Path ?? '/',
//           expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
//           maxAge: parsed['Max-Age'] ? Number(parsed['Max-Age']) : undefined,
//         };

//         if (parsed.accessToken) {
//           response.cookies.set('accessToken', parsed.accessToken, options);
//         }

//         if (parsed.refreshToken) {
//           response.cookies.set('refreshToken', parsed.refreshToken, options);
//         }
//       }
//     }

//     return response;
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error:
//           (error as ApiError).response?.data?.error ??
//           (error as ApiError).message,
//       },
//       { status: (error as ApiError).response?.status ?? 500 }
//     );
//   }
// }
