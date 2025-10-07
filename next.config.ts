import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  // optional: disable edge runtime to force Node.js environment for Nodemailer
  experimental: {
    serverComponentsExternalPackages: ["nodemailer"],
  },
};

export default withMDX(nextConfig);
