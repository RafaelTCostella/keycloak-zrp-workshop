const winston = require('winston'),
      expressWinston = require('express-winston');

const { router, app } = require('./routes');

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
      '/v1/protected',
      '/v1/public',
      '/v1/logout?redirect_uri=',
    ]
  });
});

app.listen(3000);
