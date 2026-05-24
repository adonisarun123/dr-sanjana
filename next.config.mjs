/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aggressive image optimization for PageSpeed: prefer AVIF, fall back to WebP,
  // cache optimized variants for a year, and constrain device sizes to what
  // the design actually uses.
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/vlries1el/**',
      },
    ],
  },
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Tree-shake barrel-export libraries that ship hundreds of icons / utilities.
  // Without this, importing `{ Phone, Star }` from `lucide-react` still bundles
  // the entire 700+ icon set into a shared chunk.
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@hookform/resolvers',
      'react-hook-form',
      'zod',
    ],
  },
};

export default nextConfig;
