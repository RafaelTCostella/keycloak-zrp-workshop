const winston = require('winston'),
      expressWinston = require('express-winston');

const logger = expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  meta: false,
  colorize: true,
  expressFormat: true,
});

module.exports = { logger };
