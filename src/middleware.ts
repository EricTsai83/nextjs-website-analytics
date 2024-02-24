// Reference: https://nextjs.org/docs/app/building-your-application/routing/middleware

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { analytics } from './utils/analytics';

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    // track analytics event
    try {
      analytics.track('pageview', {
        page: '/',
      });
    } catch (err) {
      console.log(err);
    }
  }
  return NextResponse.next();
}

export const matcher = {
  matcher: ['/'],
};
