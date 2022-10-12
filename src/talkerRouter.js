const express = require('express');
const { join } = require('path');
const fs = require('fs').promises;

const pathTalker = join(__dirname, 'talker.json');

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

const {
    validaName, validaIdade, validaTalk, validaRate, validaWatchedAt,
    validaAutorizacao,
} = require('./validator');

const itens = [
  validaAutorizacao,
  validaName, validaIdade, validaTalk, validaRate, validaWatchedAt,
];

router.post('/', ...itens, async (req, res) => {
  const response = await responseTalker();
  const user = { ...req.body, id: (response.length + 1) };
  response.push(user);
  await fs.writeFile(pathTalker, JSON.stringify(response));
  res.status(201).json(user);
});

router.put('/:id', ...itens, async (req, res) => {
  const { id } = req.params;
  const response = await responseTalker();
  const index = response.findIndex((item) => item.id === parseInt(id, 10));
  const editUser = { ...req.body };
  response[index] = { ...editUser, id: response[index].id };
  await fs.writeFile(pathTalker, JSON.stringify(response));
  res.status(200).json(response[index]);
});

/* router.delete('/:id', ...itens, async (req, res) => {
  const { id } = req.params;
    const [result] = await peopleDB.remove(id);
}); */

module.exports = router;