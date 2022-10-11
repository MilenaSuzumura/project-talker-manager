const express = require('express');

const router = express.Router();

const geradorToken = require('./geradorToken.js');
const { validaEmail, validaSenha } = require('./validator');

router.post('/', async (req, res) => {
  const token = geradorToken();
  const { email, password } = req.body;
  const emailValida = validaEmail(email);
  const senhaValida = validaSenha(password);
  if (emailValida) {
    res.status(400).json(emailValida.message);
  }
  if (senhaValida) {
    res.status(400).json(senhaValida.message);
  }
  res.status(200).json({ token });
});

  module.exports = router;
