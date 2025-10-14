import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.paypalobjects.com",
        pathname: "/webstatic/mktg/logo/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/Echtwork/echtwork-website/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
