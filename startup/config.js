const winston = require("winston");
const config = require("../config");

module.exports = app => {
  if (!config.jwtPass) {
    winston.error(`FATAL ERROR: jwtPass is not set.`);
    process.exit(1);
  }

  if (!config.adminPassword) {
    winston.error(`FATAL ERROR: adminPassword is not set.`);
    process.exit(1);
  }

  if (!config.cloud_name) {
    winston.error(`FATAL ERROR: cloud_name is not set.`);
    process.exit(1);
  }

  if (!config.api_key) {
    winston.error(`FATAL ERROR: api_key is not set.`);
    process.exit(1);
  }

  if (!config.api_secret) {
    winston.error(`FATAL ERROR: api_secret is not set.`);
    process.exit(1);
  }
};