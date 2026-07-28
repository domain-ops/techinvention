/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || undefined,
  trailingSlash: true,
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

  // Only redirect from root '/' to '/techinvention/' in development
  ...(process.env.NODE_ENV === 'development' ? {
    async redirects() {
      return [
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
      ];
    }
  } : {})
};

export default nextConfig;
