const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  staticPageGenerationTimeout: 300,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ],
};

export default nextConfig;
