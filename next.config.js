/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vl-prod-static.b-cdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  //output: "standalone",
};

module.exports = nextConfig;
