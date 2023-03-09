const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const config = require('./config');
const withMDX = require('@next/mdx')();

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  distDir: '.next',
  serverRuntimeConfig: {
    ...config,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client...do not add secrets

    NODE_ENV: config.NODE_ENV,
    ANALYTICS_WRITE_KEY: config.ANALYTICS_WRITE_KEY,
    GA_MEASUREMENT_ID: config.GA_MEASUREMENT_ID,
  },
};

const phaseConfig = {
  [PHASE_DEVELOPMENT_SERVER]: {
    distDir: '.next',
    compress: false,
  },
  [PHASE_PRODUCTION_BUILD]: {
    distDir: 'build',
    compress: true,
  },
  [PHASE_PRODUCTION_SERVER]: {
    distDir: 'build',
    compress: true,
  },
};

module.exports = (phase, { defaultConfig }) => {
  return withMDX({
    ...nextConfig,
    ...(phaseConfig[phase] || {}),
  });
};
