/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any hostname
      },
      {
        protocol: 'http',
        hostname: '**', // Allows any hostname
      },
    ],
  },
};

export default nextConfig;