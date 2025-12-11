import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/AthleticCore" : "",
  output: "export",
  assetPrefix: isProd ? "/AthleticCore" : "",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

export default nextConfig;
