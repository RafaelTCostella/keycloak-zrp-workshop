const express = require('express');
const axios = require('axios');

const app = express();
const router = express.Router();

router.use('/public', (_, res) => {
  res.json({
    public: true,
  });
});

router.use('/protected', (_, res) => {
  res.json({
    protected: true,
  });
});

router.use('/call-ms-2', async (_, res) => {
  try {
    const { data } = await axios.get('http://ms_two:3001/v1/protected');

    return res.json({
      ms2Response: data,
    });
  } catch (e) {
    return res.json({
      error: true,
      e,
    }).status(401);
  }
});

module.exports = { router, app };
