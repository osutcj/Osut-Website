import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
  outputFileTracingExcludes: {
    '/api/**/*': ['public/assets/**/*'],
  },
};

export default nextConfig;
