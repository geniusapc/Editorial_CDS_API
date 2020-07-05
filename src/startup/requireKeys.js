const winston = require('winston');
const config = require('../config/keys');

const requiredSecretKeys = () => {
  const keys = [
    'JWTKEY',
    'CLOUDINARY_CLOUD_NAME',
    'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET',
  ];

  keys.map((key) => {
    if (!config[key]) {
      winston.error(`FATAL ERROR: ${key} is not set.`);
      process.exit(1);
    }
  });
};

module.exports = requiredSecretKeys;
