const express = require('express'),
      app = express(),
      winston = require('winston'),
      expressWinston = require('express-winston');

const { router } = require('./routes');

app.use(expressWinston.logger({
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
}));

app.use('/v1', router);

app.get('/', (_, res) => {
  res.json({
    availableRoutes: [
      '/v1/call-ms-2',
      '/v1/keycloak',
      '/v1/protected',
      '/v1/public',
    ]
  });
});

app.listen(3000);
