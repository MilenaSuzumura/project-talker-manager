const express = require('express');

const router = express.Router();

const geradorToken = require('./geradorToken.js');
const { validator } = require('./validator');

router.get('/', async (req, res) => {
  const token = geradorToken();
   const { email, password } = req.body;
  const validateEmail = Object.values(validator(email)).length;
  const validatePassword = Object.values(validator(password)).length;
  if (validateEmail === 0 || validatePassword === 0) {
    res.status(400).json({ message: '"Email" e "Senha" são campos obrigatórios' });
  }
  res.status(200).json({ token });
});

  module.exports = router;
