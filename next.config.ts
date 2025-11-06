// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 ano
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'yt3.ggpht.com' },
    ],
  },

  compiler: {
    // WHY: remove apenas logs de info/debug em prod; mantém error/warn.
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },

  // ⚠️ Sem modularizeImports para framer-motion (quebrava ".motion")
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
      skipDefaultConversion: true,
    },
    'lodash-es': { transform: 'lodash-es/{{member}}' },
  },

  // Otimiza import de libs grandes sem mudar sintaxe
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      // Regra genérica: foo.jpg → foo-1280.jpg (útil quando o código referencia sem sufixo)
      { source: '/assets/posters/:name(.*).jpg', destination: '/assets/posters/:name-1280.jpg' },

      // Temporários (substitua quando subir os arquivos corretos):
      { source: '/assets/posters/sites-landing-pages.jpg', destination: '/assets/posters/sites-1280.jpg' },
      { source: '/assets/posters/trafego-pago.jpg', destination: '/assets/posters/google360-1280.jpg' },
    ];
  },
};

export default nextConfig;
