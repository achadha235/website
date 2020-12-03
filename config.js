const path = require('path');
const dotenv = require('dotenv');

let parsed, error;
console.log(process.env);
if (process.env.VERCEL_PLATFORM) {
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
  NEXT_DEV: parsed.NEXT_DEV === 'true',
  PORT: Number(parsed.PORT) || 3001,
};
