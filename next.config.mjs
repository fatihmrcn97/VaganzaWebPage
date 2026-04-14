/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/VaganzaWebPage",
  assetPrefix: "/VaganzaWebPage/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/photos/**/download",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
