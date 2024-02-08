/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
    // formats: ['image/webp'],
    // minimumCacheTTL: 31536000,
    // output: 'standalone',
  },
  reactStrictMode: false,
  swcMinify: true,
}

export default nextConfig
