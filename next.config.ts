import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  trailingSlash: true,
  allowedDevOrigins: ["10.86.140.84"],
};

export default nextConfig;
