const { logger } = require('./logger');

const { router, app } = require('./routes');

app.use(logger);

app.use('/v1', router);

app.get('/', (_, res) => {
  res.json({
    availableRoutes: [
      '/v1/public',
      '/v1/protected',
      '/v1/logout?redirect_uri=',
    ]
  });
});

app.listen(3001);
