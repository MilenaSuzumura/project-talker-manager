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
const talkerRouter = require('./talkerRouter.js');

app.use(express.json());

app.use('/talker', talkerRouter);

// Requisito 3
const loginRouter = require('./loginRouter');

app.use(express.json());

app.use('/login', loginRouter);
