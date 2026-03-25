/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'eversafesafetynets.com',
      port: '',
      pathname: '/**',
    },
     {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/maps/**',
      },
  ],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  output: "export",
};

module.exports = nextConfig;
 