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
  // Optional: Add trailing slash consistency
  trailingSlash: false,
  // Optional: Generate sitemap in build process
  async redirects() {
    return [
      // Redirect old domain to new domain (if needed)
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
    ];
  },
};

export default nextConfig;