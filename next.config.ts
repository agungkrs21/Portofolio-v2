import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
};

module.exports = { allowedDevOrigins: ['10.121.41.239'] };

export default nextConfig;
