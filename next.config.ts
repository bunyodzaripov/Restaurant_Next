import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anorkhulov.uz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
