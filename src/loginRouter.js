const express = require('express');

const router = express.Router();

const geradorToken = require('./geradorToken.js');
const { validaEmail, validaSenha } = require('./validator');

router.post('/', validaEmail, validaSenha, async (_req, res) => {
  const token = geradorToken();
  res.status(200).json({ token });
});

  module.exports = router;
