const express = require('express');
const fs = require('fs').promises;
const path = require('path');

var router = express.Router();

router.get('/talker', async (req, res) => {
  const pathTalker = path.join(__dirname, '../talker.json');
  const data = await fs.readFile(pathTalker);
  const response = JSON.parse(data);
  res.status(200).json(response);
})

module.exports = router;
