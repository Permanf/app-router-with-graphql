import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export default async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl;

  if (cookies().has('app_access_token') == true && pathname === '/auth/login') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  } else if (cookies().has('app_access_token') == false) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}