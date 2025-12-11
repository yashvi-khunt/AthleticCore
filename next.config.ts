import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/AthleticCore",
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

export default nextConfig;
