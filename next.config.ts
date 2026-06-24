import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Sanity Images
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google Profile Images
      },
      
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash Images
      },
    ],
  },
};

export default nextConfig;