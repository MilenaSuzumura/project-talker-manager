const express = require('express');
const bodyParser = require('body-parser');

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
const talkerRoute = require('./talkerRoute.js');

app.use(express.json());

app.use('/talker', async (_req, res) => {
const response = await talkerRoute();
  if (response.length === 0) {
    res.status(200).json([]);
  } else {
    res.status(200).json(response);
  }
});
