// app/api/auth/me/route.ts

import { NextResponse } from 'next/server';
import { api, ApiError } from '../../api';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map(cookie => `${cookie.name}=${cookie.value}`)
    .join('; ');

  console.log('SERVER COOKIES:', cookieStore.getAll());
  console.log('HEADER:', cookieHeader);

  try {
    const { data } = await api.get('users/current', {
      headers: {
        // Cookie: cookieStore.toString(),
        Cookie: cookieHeader,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    );
  }
}
