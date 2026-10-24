import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is a single page with anchored sections; keep old URLs working.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
