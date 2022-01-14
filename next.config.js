/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  styledComponents: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
});
