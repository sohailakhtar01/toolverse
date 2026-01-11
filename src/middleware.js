import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const { pathname } = url;
  const hostname = request.headers.get('host') || '';

  // -----------------------------------------------------------
  // 1. CRITICAL SEO FIX: Force "non-www"
  // If user visits www.thetoolsverse.com, move them to thetoolsverse.com
  // -----------------------------------------------------------
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace('www.', '');
    return NextResponse.redirect(url, 301); // 301 = Moved Permanently (SEO Gold Standard)
  }

  // -----------------------------------------------------------
  // 2. Block Non-Existent "Junk" Paths
  // Returns 410 (Gone) to tell Google "Stop looking here forever"
  // -----------------------------------------------------------
  const blockedPaths = [
    '/products',
    '/product',
    '/shop',
    '/cart',
    '/checkout',
  ];

  if (blockedPaths.some(path => pathname.startsWith(path))) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=604800', // Cache "Gone" status for 7 days
      }
    });
  }

  // Allow all other requests
  return NextResponse.next();
}

// -----------------------------------------------------------
// CONFIG: Run on ALL pages (except static assets and API)
// -----------------------------------------------------------
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
};