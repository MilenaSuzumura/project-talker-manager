const validaSenha = (req, res, next) => {
    const { password } = req.body;
  if (password === undefined) {
    res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }  
  if (password.length < 6) {
    res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

const validaEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!email.includes('@') || !email.endsWith('.com')) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validaName = (req, res, next) => {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validaIdade = (req, res, next) => {
  const { age } = req.body;
  if (age === undefined) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (parseInt(age, 10) < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const validaWatchedAt = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  if (watchedAt === undefined) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  // Referencia: https://www.guj.com.br/t/resolvido-como-validar-data-com-java-script/276656/2
  const validadorDeData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
  if (!validadorDeData.test(watchedAt)) {
    return res.status(400).json({ 
      message:
      'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validaRate = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (parseInt(rate, 10) > 5 || parseInt(rate, 10) < 0) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

const validaTalk = (req, res, next) => {
  const { talk } = req.body;
  if (talk === undefined) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const validaAutorizacao = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length < 16) {
    return res.status(401).json({
       message: 'Token inválido',
    });
  }
  next();
};

module.exports = { 
  validaSenha,
  validaEmail,
  validaName,
  validaIdade,
  validaTalk,
  validaWatchedAt,
  validaRate,
  validaAutorizacao,
};
