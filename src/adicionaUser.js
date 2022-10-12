const { join } = require('path');
const fs = require('fs').promises;

const responseTalker = require('./responseTalker.js');

const pathTalker = join(__dirname, 'talker.json');

const adicionaUser = async (req, res, next) => {
  const response = await responseTalker();
  const user = { ...req.body, id: (response.length + 1) };
  response.push(user);
  await fs.writeFile(pathTalker, JSON.stringify(response));
  res.status(201).json(user);
  next();
};

module.exports = adicionaUser;