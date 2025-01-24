export default {
  experimental: {
    cpus: 6, 
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
    ];
  },
};

