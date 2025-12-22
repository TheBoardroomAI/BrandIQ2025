import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brandiqcreative.com',
      },
    ],
  },
};

export default nextConfig;
