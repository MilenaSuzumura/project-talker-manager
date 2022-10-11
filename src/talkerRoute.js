const fs = require('fs').promises;
const { join } = require('path');

const pathTalker = join(__dirname, 'talker.json');

const talkerRoute = async () => {
  const data = await fs.readFile(pathTalker);
  const response = await JSON.parse(data);
  return response;
};

/* router.get('/:id', async (req, res) => {
  const data = await fs.readFile(pathTalker, 'utf-8');
  const response = JSON.parse(data);
  const idreq = req.params.id;
  const idResult = response.filter(({ id }) => id === parseInt(idreq));
  if (idResult) {
    res.status(200).json({ message: 'Pessoa palestrante não encontrada' });
  } else {
    res.status(200).json(idResult);
  }
}); */

module.exports = talkerRoute;
