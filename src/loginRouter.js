const express = require('express');

const router = express.Router();

const geradorToken = require('./geradorToken.js');

router.post('/', async (req, res) => {
  const token = geradorToken();
  res.status(200).json({ token });
});

  module.exports = router;
