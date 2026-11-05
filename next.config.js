/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Optional: enables static export if deploying to GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
