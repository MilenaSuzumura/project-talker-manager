const validaSenha = (senha) => {
  if (senha.length === 0) {
    return { message: 'O campo "password" é obrigatório' };
  }
  if (senha > 6) {
    return { message: 'O "password" deve ter pelo menos 6 caracteres' };
  }
};

const validaEmail = (email) => {
  if (email.length === 0) {
    return { message: 'O campo "email" é obrigatório' };
  }
  if (email.includes('@') && email.endsWith('.com')) {
    return { message: 'O "email" deve ter o formato "email@email.com"' };
  }
};

module.exports = { validaSenha, validaEmail };
