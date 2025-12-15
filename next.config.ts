import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // use Vercel image optimization
  },
};

export default nextConfig;
