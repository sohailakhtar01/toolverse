import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Non-existent paths - return 410 (Gone)
  const blockedPaths = [
    '/products',
    '/product', 
    '/shop',
    '/cart',
    '/checkout'
  ]
  
  // Check if path starts with any blocked path
  if (blockedPaths.some(path => pathname.startsWith(path))) {
    // Return 410 status with empty response
    return new NextResponse(
      JSON.stringify({ error: 'This page has been permanently removed' }),
      { 
        status: 410,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
  
  // Allow all other requests
  return NextResponse.next()
}

// Configure which paths this middleware runs on
export const config = {
  matcher: [
    '/products/:path*',
    '/product/:path*',
    '/shop/:path*',
    '/cart/:path*',
    '/checkout/:path*'
  ]
}