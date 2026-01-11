import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ❌ DELETED: The "www" redirect logic. 
  // REASON: Vercel already handles this. Having it here caused the crash.

  // -----------------------------------------------------------
  // 1. Block Non-Existent "Junk" Paths
  // Returns 410 (Gone) to tell Google "Stop looking here forever"
  // -----------------------------------------------------------
  const blockedPaths = [
    '/products',
    '/product',
    '/shop',
    '/cart',
    '/checkout',
  ];

  // If the path starts with any of the blocked paths, kill it.
  if (blockedPaths.some(path => pathname.startsWith(path))) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=604800', // Cache "Gone" status for 7 days
      }
    });
  }

  // Allow all other requests to pass through normally
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