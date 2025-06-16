import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e526efa973a610da0df9e8_farley.gif')]
  }
};

export default nextConfig;
