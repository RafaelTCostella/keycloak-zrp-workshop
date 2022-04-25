const express = require('express');
const router = express.Router();

router.use('/protected', (_, res) => {
  res.json({
    protected: true,
  });
});

router.use('/public', (_, res) => {
  res.json({
    public: true,
  });
});

router.use('/call-ms-2', async (_, res) => {
  const { data } = await axios.get('http://ms_two:3001/v1/protected');

  return res.json({
    ms2Response: data,
  })
});

module.exports = { router };
