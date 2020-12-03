const path = require('path');
const dotenv = require('dotenv');
const { parsed, error } = dotenv.config({
  path: path.join(__dirname, `.env.${process.env.NODE_ENV || 'development'}`),
});

if (error) {
  throw error;
}

module.exports = {
  NODE_ENV: String(parsed.NODE_ENV),
  NEXT_DEV: parsed.NEXT_DEV === 'true',
  PORT: Number(parsed.PORT) || 3001,
};
