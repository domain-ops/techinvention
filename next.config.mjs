const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,
  basePath: process.env.BASE_PATH || '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@tabler/icons-react',
      'framer-motion',
      'gsap',
      '@studio-freight/lenis',
      'clsx',
      'tailwind-merge',
      'dotted-map'
    ],
  },
  ...(process.env.NODE_ENV === 'production' && process.env.STATIC_EXPORT !== 'true' ? {
    async headers() {
      return [
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  } : {}),
  // Disable next/image static import handling to prevent conflicts with Vite-style imports
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  env: {
    BASE_PATH: process.env.BASE_PATH || '',
  },
  webpack: (config) => {
    // Add rule to handle image imports like Vite does (returns string URL)
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    // Handle mp4/video imports if any
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    return config;
  },

  // Redirects configuration
  ...(process.env.STATIC_EXPORT !== 'true' ? {
    async redirects() {
      const devRedirects = process.env.NODE_ENV === 'development' ? [
        {
          source: '/',
          destination: '/techinvention/',
          basePath: false,
          permanent: false,
        },
        {
          source: '/favicon.ico',
          destination: '/techinvention/favicon.ico',
          basePath: false,
          permanent: false,
        },
        {
          source: '/google7d9ac6cdd29e9a32.html',
          destination: '/techinvention/google7d9ac6cdd29e9a32.html',
          basePath: false,
          permanent: false,
        },
        {
          source: '/robots.txt',
          destination: '/techinvention/robots.txt',
          basePath: false,
          permanent: false,
        },
        {
          source: '/sitemap.xml',
          destination: '/techinvention/sitemap.xml',
          basePath: false,
          permanent: false,
        },
      ] : [];

      const specificBizPages = [
        'disclaimer',
        'cdmo',
        'rnd',
        'terms-and-conditions',
        'products',
        'contact-us',
        'about/csr-initiatives',
        'about/awards-certifications',
        'about',
        'gmp-training',
        'careers',
        'consulting',
      ];

      // Exact 301 redirects for the client's mapped pages (both with and without trailing slash)
      const bizPageRedirects = [];
      specificBizPages.forEach((page) => {
        bizPageRedirects.push({
          source: `/${page}/`,
          has: [
            {
              type: 'host',
              value: '(?:www\\.)?techinvention\\.biz',
            },
          ],
          destination: `https://techinvention.com/${page}/`,
          statusCode: 301,
          basePath: false,
        });
        bizPageRedirects.push({
          source: `/${page}`,
          has: [
            {
              type: 'host',
              value: '(?:www\\.)?techinvention\\.biz',
            },
          ],
          destination: `https://techinvention.com/${page}/`,
          statusCode: 301,
          basePath: false,
        });
      });

      const bizRootRedirect = {
        source: '/',
        has: [
          {
            type: 'host',
            value: '(?:www\\.)?techinvention\\.biz',
          },
        ],
        destination: 'https://techinvention.com/',
        statusCode: 301,
        basePath: false,
      };

      // Catch-all 301 redirect for any other techinvention.biz path
      const bizCatchAllRedirect = {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?:www\\.)?techinvention\\.biz',
          },
        ],
        destination: 'https://techinvention.com/:path*/',
        statusCode: 301,
        basePath: false,
      };

      const bizRedirects = [...bizPageRedirects, bizRootRedirect, bizCatchAllRedirect];

      return [...devRedirects, ...bizRedirects];
    }
  } : {})
};

export default nextConfig;
