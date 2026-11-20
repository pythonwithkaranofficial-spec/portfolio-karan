import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Screenshots are pre-sized WebP files (see public/work), so no runtime image optimisation is needed.
  images: { unoptimized: true },
};

export default nextConfig;
