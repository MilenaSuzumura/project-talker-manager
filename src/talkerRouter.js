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

module.exports = router;