/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // required for static export
  basePath: isProd ? '/prana-healthcare' : '',
  assetPrefix: isProd ? '/prana-healthcare/' : '',
  reactStrictMode: true,
};

export default nextConfig;
