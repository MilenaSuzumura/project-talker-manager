const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// Requisito 1
const talkerRouter = require('./talkerRouter.js');

app.use(express.json());

app.use('/talker', talkerRouter);

// Requisito 3
const loginRouter = require('./loginRouter');

app.use(express.json());

app.use('/login', loginRouter);

// Requisito 5
const {
  validaName, validaIdade, validaTalk, validaRate, validaWatchedAt,
  validaAutorizacao,
} = require('./validator');
const responseTalker = require('./responseTalker.js');

const pathTalker = join(__dirname, 'talker.json');

app.post('/talker', validaAutorizacao,
validaName, validaIdade, validaTalk, validaRate, validaWatchedAt, async (req, res) => {
const response = await responseTalker();
const user = { ...req.body, id: (response.length + 1) };
response.push(user);
await fs.writeFile(pathTalker, JSON.stringify(response));
return res.status(201).json(user);
});

// Requisito 6
app.put('/talker/:id', validaAutorizacao,
validaName, validaIdade, validaTalk, validaRate, validaWatchedAt, async (req, res) => {
  const { id } = req.params;
  const response = await responseTalker();
  const index = response.findIndex((item) => item.id === parseInt(id, 10));
  const editUser = { ...req.body };
  response[index] = { ...editUser, id: response[index].id };
  await fs.writeFile(pathTalker, JSON.stringify(response));
  return res.status(200).json(response[index]);
});
