/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   return config;
  // },
};
module.exports = withMDX(nextConfig);

// module.exports = nextConfig;
