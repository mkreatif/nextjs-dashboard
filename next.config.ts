import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  // basePath: '', // kalau perlu, isi jika kamu deploy di subfolder
  images: {
    domains: ["marlinastudio.my.id"], // jika kamu pakai <Image />
  },
};

export default nextConfig;
