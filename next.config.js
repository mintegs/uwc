/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
