const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();

router.get('/', async (req, res) => {
  const pathTalker = path.join(__dirname, '../talker.json');
  const data = await fs.readFile(pathTalker);
  const response = JSON.parse(data);
  if (response.length !== 0) {
    res.status(200).json(response);
  }
  res.status(200).json([]);
});

module.exports = router;
