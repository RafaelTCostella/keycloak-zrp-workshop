const express = require('express');

const router = express.Router();

router.use('/protected', (_, res) => {
  res.json({
    protected: true,
  });
});

module.exports = { router };
