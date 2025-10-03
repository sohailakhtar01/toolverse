/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.thetoolsverse.com',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thetoolsverse.com',
  },
  trailingSlash: false,
  
  async redirects() {
    return [
      // 🌐 Redirect old vercel domain to main domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'toolverse-brown.vercel.app',
          },
        ],
        destination: 'https://www.thetoolsverse.com/:path*',
        permanent: true,
      },
      
      // 🚫 Block /products/ URLs
      {
        source: '/products/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/product/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shop/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cart/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/checkout/:path*',
        destination: '/',
        permanent: true,
      },
      
      // 📱 Mobile redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'm.thetoolsverse.com',
          },
        ],
        destination: 'https://www.thetoolsverse.com/:path*',
        permanent: true,
      },
      
      // 🔄 HTTP to HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.thetoolsverse.com/:path*',
        permanent: true,
      },
    ];
  },
  
  async headers() {
    return [
      // ✅ Default headers
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      
      // ❌ Block bad URLs
      {
        source: '/products/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
      {
        source: '/product/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/shop/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      
      // ✅ Tool pages - YOUR 250+ DYNAMIC PAGES
      {
        source: '/tools/:slug*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      
      // ✅ Category pages - YOUR 40+ DYNAMIC PAGES
      {
        source: '/categories/:slug*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, stale-while-revalidate=3600',
          },
        ],
      },
      
      // 🚀 Static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // 📄 Sitemap & Robots
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },
  
  // NO REWRITES NEEDED - sitemap.xml.js handles it automatically
  async rewrites() {
    return [];
  },
};

export default nextConfig;