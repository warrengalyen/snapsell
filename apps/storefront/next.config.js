module.exports = {
  reactStrictMode: true,
  transpilePackages: ['shared-components'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: process.env.NEXT_PUBLIC_APP_URL,
        permanent: true,
        basePath: false,
      },
    ];
  },
};
