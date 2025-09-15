/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generate static HTML for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages can't handle Next.js image optimizer
  },
  basePath: "/prana-healthcare", // 👈 replace with your repo name
  assetPrefix: "/prana-healthcare/",
};

export default nextConfig;
