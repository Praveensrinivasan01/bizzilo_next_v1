import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const locales = ['en', 'fr', 'es'];
const defaultLocale = 'en';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return;
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
