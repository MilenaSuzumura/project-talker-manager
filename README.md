# Talker Manager

Talker Manager é um projeto focado em desenvolver uma API de cadastro e pesquisa de talkers utilizando operações CRUD (Create, Read, Update e Delete).

<strong>OBS:</strong> ESSE PROJETO FOI DESENVOLVIDO NA TRYBE.

## Técnologias usadas
* JavaScript;
* Node.js;
* Express.js;
* Docker;
* Higher Order Functions(HOF);
* Nodemon;

## Rotas, entradas e saídas

<details>
<summary>Endpoint GET /talker</summary><br />
Utilizado para retornar todos os palestrantes existentes no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-get-talker" src="/images-readme/get-talker-entrada-exemplo.png">

##### Exemplo de entrada:
<img alt="imagem-exemplo-saida-get-talker" src="/images-readme/get-talker-saida-exemplo.png">

</details>

<details>
<summary>Endpoint GET /talker/:id</summary><br />
Utilizado para retornar o palestrante com o id correspondente no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-talker-id" src="/images-readme/get-talker-id-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-talker-id" src="/images-readme/get-talker-id-saida-exemplo.png">

#### Inserindo informações incorretas
Existem um cenário onde a saída acima pode não ser retornada: caso não exista a pessoa palestrante com aquele id.

<strong>Caso não exista a pessoa palestrante com aquele id no banco de dados, o retorno será:</strong>
```
{
  "message": "Pessoa palestrante não encontrada"
}
```

</details>

<details>
<summary>Endpoint POST /login</summary><br />
Utilizado para quando o usuário vai acessar sua conta. O banco de dados exige que o usuário insira o email e senha correta e irá retornar um token temporário como confirmação de que está correto.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-login" src="/images-readme/post-login-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-login" src="/images-readme/post-login-saida-exemplo.png">
</details>

<details>
<summary>Endpoint POST /talker</summary><br />
Utilizado para criar um novo palestrante. Para isso, necessita de um nome, idade, o dia que fez a palestra e avaliação. Também precisa de um token valido.

##### Informações necessárias:
* <strong>name:</strong> É o nome e sobrenome. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>age:</strong> É a idade do palestrante. Deve ser enviado como int e o palestrante precisa ter, no mínimo, 18 anos. É obrigatório.
* <strong>talk:</strong> É um objeto com informações da palestra. Dentro dele, deve conter o dia assistido e a avaliação. É obrigatório.
* <strong>watchedAt:</strong> É o dia em que foi assistido a palestra. Essa informação deve estar no objeto talk e deve ser enviado como string contendo a data completa em formato dia/mês/ano. É obrigatório. 
* <strong>rate:</strong> É a avaliação da palestra. Essa informação deve estar no objeto talk e deve ser enviado como int com um número de 1 à 5. É obrigatório. 

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-talker" src="/images-readme/post-talker-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-talker" src="/images-readme/post-talker-saida-exemplo.png">

#### Inserindo informações incorretas
Existem quatro cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima), caso falte alguma das informações obrigatórias, se não tiver um token ou tendo um token inválido. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplos caso não preencha os requisitos necessários:</strong>
```
{
  "message": "A pessoa palestrante deve ser maior de idade"
}
```

```
{
  "message": "O \"name\" deve ter pelo menos 3 caracteres"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "O campo \"age\" é obrigatório"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token não encontrado"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Token inválido"
}
```

</details>

<details>
<summary>Endpoint PUT /talker/:id</summary><br />
Utilizado para alterar as informações do palestrante com esse id. Para isso, necessita de um nome, idade, o dia que fez a palestra e avaliação, assim como o POST /talker. Também precisa de um token valido.

##### Informações necessárias:
* <strong>name:</strong> É o nome e sobrenome. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>age:</strong> É a idade do palestrante. Deve ser enviado como int e o palestrante precisa ter, no mínimo, 18 anos. É obrigatório.
* <strong>talk:</strong> É um objeto com informações da palestra. Dentro dele, deve conter o dia assistido e a avaliação. É obrigatório.
* <strong>watchedAt:</strong> É o dia em que foi assistido a palestra. Essa informação deve estar no objeto talk e deve ser enviado como string contendo a data completa em formato dia/mês/ano. É obrigatório. 
* <strong>rate:</strong> É a avaliação da palestra. Essa informação deve estar no objeto talk e deve ser enviado como int com um número de 1 à 5. É obrigatório. 

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-put-talker-id" src="/images-readme/put-talker-id-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-put-talker-id" src="/images-readme/put-talker-id-saida-exemplo.png">

#### Inserindo informações incorretas
Existem quatro cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima), caso falte alguma das informações obrigatórias, se não tiver um token ou tendo um token inválido. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplos caso não preencha os requisitos necessários:</strong>
```
{
  "message": "A pessoa palestrante deve ser maior de idade"
}
```

```
{
  "message": "O \"name\" deve ter pelo menos 3 caracteres"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "O campo \"age\" é obrigatório"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token não encontrado"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Token inválido"
}
```

</details>

<details>
<summary>Endpoint DELETE /talker/:id</summary><br />
Utilizado para deletar as informações do palestrante com esse id. Para isso, necessita de um token valido.

<strong>OBS:</strong> Não é necessário informações adicionais e nem retornará nada.

#### Inserindo informações incorretas
Existem dois cenários onde a saída será retornada: se não tiver um token ou tendo um token inválido. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token não encontrado"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Token inválido"
}
```

</details>

<details>
<summary>Endpoint GET /talker/search</summary><br />
Utilizado para para pesquisar o nome do palestrante. Para isso, necessita, caso o usuario queira, um nome, e de um token valido. Caso não seja mandado nenhum query, será retornado todos os palestrantes. E se for mandado um query e não tenha esse palestrante, será enviado um array vazio.

<details>
<summary>Nome que existe no banco de dados</summary><br />

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-talker-search-Henrique" src="/images-readme/get-talker-search-name-Henrique-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-talker-search-Henrique" src="/images-readme/get-talker-search-name-Henrique-saida-exemplo.png">

</details>

<details>
<summary>Nome que não existe no banco de dados</summary><br />

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-talker-search-Emanoela" src="/images-readme/get-talker-search-name-Emanoela-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-talker-search-Emanoela" src="/images-readme/get-talker-search-name-Emanoela-saida-exemplo.png">

</details>

<details>
<summary>Sem nomes na pesquisa</summary><br />

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-talker-search" src="/images-readme/get-talker-search-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-talker-search" src="/images-readme/get-talker-search-saida-exemplo.png">

</details>

#### Inserindo informações incorretas
Existem dois cenários onde a saída será retornada: se não tiver um token ou tendo um token inválido. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token não encontrado"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Token inválido"
}
```

</details>

## Utilizando o docker
Para criar os containers, execute: `docker-compose up -d`

Para abrir o terminar do container, execute: `docker exec -it talker_manager bash`

## Instalando Dependências
  `npm install`

## Aplicação Node:
Para executar a aplicação e acessar as rotas, execute: `npm start` ou `npm run dev`

## Executando Testes
Para rodar todos os testes:

  `npm test`


Para rodar um teste específico:

  `npm test númeroDoTest`


exemplo:
`npm test 1`

<strong>OBS:</strong> OS TESTES FORAM DESENVOLVIDOS PELA TRYBE.
