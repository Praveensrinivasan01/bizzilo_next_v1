// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint checks during build & dev
  },
    // i18n: {
    //   locales: ['en', 'fr', 'es'],
    //   defaultLocale: 'en',
    //   localeDetection: true,
    // },
  };
  
  module.exports = nextConfig;
  