const express = require('express');

const router = express.Router();

const geradorToken = require('./geradorToken.js');
const validator = require('./validator');

router.post('/', async (req, res) => {
  const token = geradorToken();
/*   const { email, password } = req.body;
  const result = { ...req.body, email, password, token }; */
  res.status(200).json({ token });
/*   const validateEmail = validator(email);
  const validatePassword = validator(password);
  if (validateEmail) {
    res.status(400).json({ message: 'Adicione um "email"' });
  } else if (validatePassword) {
    res.status(400).json({ message: 'Adicione uma "senha"' });
  } */
});

  module.exports = router;
