const express = require('express');
const fs = require('fs').promises;
const { join } = require('path');

const router = express.Router();
const pathTalker = join(__dirname, '../talker.json');

router.get('/', async (_req, res) => {
  const data = await fs.readFile(pathTalker);
  const response = await JSON.parse(data);
  if (response.length > 0) {
    res.status(200).json(response);
  } else {
    res.status(200).json([]);
  }
});

module.exports = router;
