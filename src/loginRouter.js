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

  module.exports = router;
