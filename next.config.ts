import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_URL: process.env.GITHUB_URL,
    LINKEDIN_URL: process.env.LINKEDIN_URL,
    FACEBOOK_URL: process.env.FACEBOOK_URL,
    INSTAGRAM_URL: process.env.INSTAGRAM_URL,
  },
  output: "export",
};

export default nextConfig;
