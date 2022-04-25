const express = require('express'),
      app = express(),
      { logger } = require('./logger');

const { router } = require('./routes');

app.use(logger);

app.use('/v1', router);

app.get('/', (_, res) => {
  res.json({
    availableRoutes: [
      '/v1/call-ms-1',
      '/v1/public',
      '/v1/protected',
    ]
  });
});

app.listen(3001);
