// // app/api/auth/login/route.ts

// //  так не працює!!!!!

// import { NextRequest, NextResponse } from 'next/server';
// import { api } from '../../api';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const apiRes = await api.post('users/signin', body);

//     const response = NextResponse.json(apiRes.data);

//     const setCookie = apiRes.headers['set-cookie'];

//     console.log('SET COOKIE FROM BACKEND:', apiRes.headers['set-cookie']);

//     if (setCookie) {
//       if (Array.isArray(setCookie)) {
//         setCookie.forEach(cookie =>
//           response.headers.append('set-cookie', cookie)
//         );
//       } else {
//         response.headers.append('set-cookie', setCookie);
//       }
//     }

//     return response;
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         error: error.response?.data?.error ?? error.message,
//       },
//       { status: error.response?.status ?? 500 }
//     );
//   }
// }
