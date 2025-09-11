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
      
      // 🚫 Block ALL /products/ URLs (main fix for 404 issues)
      {
        source: '/products/:path*',
        destination: '/',
        permanent: true,
      },
      
      // 🚫 Block parent directories that don't exist
      {
        source: '/tools',
        destination: '/',
        permanent: true,
      },
      {
        source: '/categories',
        destination: '/',
        permanent: true,
      },
      
      // 🚫 Block other common e-commerce patterns
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
      
      // 📱 Handle common mobile/subdomain redirects
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
      
      // 🔄 Handle HTTP to HTTPS (if needed)
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
  
  // 🎯 SEO Headers for better crawling control
  async headers() {
    return [
      // ✅ Default headers for all pages
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
      
      // ❌ Block problematic URLs from being indexed
      {
        source: '/products/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
      
      // ❌ Block parent directories
      {
        source: '/tools',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/categories',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      
      // 🎯 Enhanced headers for tool pages
      {
        source: '/tools/:path*',
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
      
      // 🎯 Enhanced headers for category pages
      {
        source: '/categories/:path*',
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
      
      // 🚀 Optimize static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // 🔧 Additional optimizations
  async rewrites() {
    return [
      // Handle sitemap requests
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

export default nextConfig;
