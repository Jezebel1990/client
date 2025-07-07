const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 2,
  },
  staticPageGenerationTimeout: 1200,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
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