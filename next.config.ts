import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Content files are loaded with fs at build time, so no custom loader is needed.
};

export default nextConfig;
