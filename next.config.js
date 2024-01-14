/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.iwantwallpaper.co.uk",
      },
    ],
  },
};

module.exports = nextConfig;
