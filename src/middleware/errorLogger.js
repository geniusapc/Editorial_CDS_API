const winston = require('winston'),
  expressWinston = require('express-winston');

module.exports = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './logs/exceptions.log' }),
  ],

  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});
