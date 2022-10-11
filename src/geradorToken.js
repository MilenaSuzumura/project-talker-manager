// Referência: https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/
const geradorToken = () => {
  let token = '';
  const tamanhoToken = 16;
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < tamanhoToken; i += 1) {
      token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return token;
};

module.exports = geradorToken;
