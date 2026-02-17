import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ftp.goit.study' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'www.nytimes.com' },
      { protocol: 'https', hostname: 'media4.giphy.com' },
      // { protocol: 'https', hostname: 'www.nytimes.com' },
    ],
  },
};

export default nextConfig;

// news:
// https://www.nytimes.com
// media4.giphy.com
