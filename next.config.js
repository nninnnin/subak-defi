/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ALCHEMY_APi_KEY: process.env.ALCHEMY_API_KEY,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
