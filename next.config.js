const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const config = require('./config');

const nextConfig = {
  target: 'server',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  distDir: '.next',
  serverRuntimeConfig: {
    ...config,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client...do not add secrets
  },
};

const phaseConfig = {
  [PHASE_DEVELOPMENT_SERVER]: {
    distDir: '.next',
    assetPrefix: '',
    compress: false,
  },
  [PHASE_PRODUCTION_BUILD]: {
    distDir: 'build',
    assetPrefix: '', // TODO: add asset prefix for deployed production bundle
    compress: true,
  },
  [PHASE_PRODUCTION_SERVER]: {
    distDir: 'build',
    assetPrefix: '', // TODO: add asset prefix for deployed production bundle
    compress: true,
  },
};

// const webpackConfig = (config, options) => {
//   config.node = {
//     fs: "empty"
//   };
//   config.plugins.push(new DecoratorsPlugin({ legacy: true }))
//   return config;
// };

module.exports = (phase, { defaultConfig }) => {
  return {
    ...nextConfig,
    ...(phaseConfig[phase] || {}),
  };
};
