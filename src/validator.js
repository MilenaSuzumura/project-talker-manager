const validaSenha = (req, res, next) => {
    const { password } = req.body;
  if (password === undefined) {
    res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }  
  if (password !== undefined && password.length < 6) {
    res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

const validaEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (email !== undefined && (!email.includes('@') || !email.endsWith('.com'))) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = { validaSenha, validaEmail };
