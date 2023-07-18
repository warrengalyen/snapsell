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
        destination: 'http://www.mechanikadesign.com/snapsell/admin',
        permanent: true,
        basePath: false,
      },
    ];
  },
};
