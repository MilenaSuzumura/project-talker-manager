const fs = require('fs').promises;
const { join } = require('path');

const pathTalker = join(__dirname, 'talker.json');

const responseTalker = async () => {
  const data = await fs.readFile(pathTalker, 'utf8');
  const response = await JSON.parse(data);
  return response;
};

module.exports = responseTalker;
