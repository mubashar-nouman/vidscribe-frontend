// src/middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Get the token from the user's cookies
  const authToken = request.cookies.get('token')?.value;
  console.log('authToken', authToken);

  // 2. Get the URL the user is trying to access
  const { pathname } = request.nextUrl;

  // 3. Define public paths that don't require authentication
  const publicPaths = ['/', '/signin', '/signin/', '/signup', '/signup/'];

  // If the user is trying to access a public path, let them
  if (publicPaths.includes(pathname)) {
    console.log('✅ Public path, allowing access');
    return NextResponse.next();
  }

  // 4. If there's no token and the user is trying to access a protected route,
  //    redirect them to the login page.
  if (!authToken) {
    console.log('❌ No auth token, redirecting to signin');
    const loginUrl = new URL('/signin', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 5. If the token is valid, allow them to proceed
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}