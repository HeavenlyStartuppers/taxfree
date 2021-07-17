const withPlugins = require("next-compose-plugins")
const withPWA = require("next-pwa")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
}

module.exports = withPlugins([withBundleAnalyzer, [withPWA, { dest: "public" }]], nextConfig)
