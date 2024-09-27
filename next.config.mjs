/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/mangadex/images/:path*',
        destination: 'https://uploads.mangadex.org/:path*'
      }
    ]
  }
};

export default nextConfig;
