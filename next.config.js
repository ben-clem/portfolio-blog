const { i18n } = require("./next-i18next.config");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer()({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  i18n,
});

module.exports = nextConfig;
