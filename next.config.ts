import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/AthleticCore",
  output: "export",
  assetPrefix: "/AthleticCore",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

export default nextConfig;
