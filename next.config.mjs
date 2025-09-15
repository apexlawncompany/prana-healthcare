/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  distDir: "dist",
  basePath: isProd ? "/prana-healthcare" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;