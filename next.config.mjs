const nextConfig = {
  experimental: {
    cpus: 6,
  },
  staticPageGenerationTimeout: 600,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
  compiler: {
      styledComponents: true,
  },
}

export default nextConfig
