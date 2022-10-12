const express = require('express');

const router = express.Router();

const responseTalker = require('./responseTalker.js');

router.get('/', async (_req, res) => {
  const response = await responseTalker();
    if (response.length === 0) {
      res.status(200).json([]);
    } else {
      res.status(200).json(response);
    }
  });

  // Requisito 2

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await responseTalker();
  const index = response.findIndex((item) => item.id === parseInt(id, 10));
  const talkerId = response[index];
  if (index >= 0) {
    res.status(200).json(talkerId);
  } else {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

// Requisito 5
/* const pathTalker = join(__dirname, 'talker.json');
const talkerValidator = require('./talkerValidator');

router.post('/', talkerValidator, async (req, res) => {
  const users = req.body;
  const response = await responseTalker();
  response.push(users);
  await fs.writeFile(pathTalker, JSON.stringify(response));
  res.status(201).json(users);
}); */

const {
  validaName, validaIdade, validaTalk, validaRate, validaWatchedAt, validaAutorizacao,
} = require('./validator');
const adicionaUser = require('./adicionaUser');

router.post('/', validaAutorizacao,
validaName, validaIdade, validaTalk, validaRate, validaWatchedAt, adicionaUser);

module.exports = router;