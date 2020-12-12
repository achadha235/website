const path = require('path');
const dotenv = require('dotenv');

// Allows config to handle Vercel environment configurations
let parsed, error;
if (process.env.VERCEL) {
  parsed = process.env;
} else {
  const cfg = dotenv.config({
    path: path.join(__dirname, `.env.${process.env.NODE_ENV || 'development'}`),
  });
  parsed = cfg.parsed;
  error = cfg.error;
}

if (error) {
  throw error;
}

module.exports = {
  NODE_ENV: String(parsed.NODE_ENV),
  ANALYTICS_WRITE_KEY: String(parsed.ANALYTICS_WRITE_KEY),
  GA_MEASUREMENT_ID: String(parsed.GA_MEASUREMENT_ID),
};
