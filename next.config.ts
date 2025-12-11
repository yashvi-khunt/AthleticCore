import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/AthleticCore",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

export default nextConfig;
