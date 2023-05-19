/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  env: {
    ALCHEMY_APi_KEY: process.env.ALCHEMY_API_KEY,
  },
};

module.exports = nextConfig;
