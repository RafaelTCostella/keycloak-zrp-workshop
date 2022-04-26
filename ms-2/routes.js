const express = require('express');

const router = express.Router();
const app = express();

router.use('/protected', (_, res) => {
  res.json({
    protected: true,
  });
});

module.exports = { router, app };
