# Talker Manager

Talker Manager é um projeto focado em desenvolver uma API de cadastro e pesquisa de talkers utilizando operações CRUD (Create, Read, Update e Delete).

<strong>OBS:</strong> ESSE PROJETO FOI DESENVOLVIDO NA TRYBE.

## Técnologias usadas
* JavaScript;
* Node.js;
* Express.js;
* Docker;

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
Utilizado para criar um novo palestrante. Para isso, necessita de um nome, idade, o dia que fez a palestra e avaliação.

##### Informações necessárias:
* <strong>name:</strong> É o nome e sobrenome. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>age:</strong> É a idade do palestrante. Deve ser enviado como int e o palestrante precisa ter, no mínimo, 18 anos. É obrigatório.
* <strong>talk:</strong> É um objeto com informações da palestra. Dentro dele, deve conter o dia assistido e a avaliação. É obrigatório.
* <strong>watchedAt:</strong> É o dia em que foi assistido a palestra. Essa informação deve estar no objeto talk e deve ser enviado como string contendo a data completa em formato dia/mês/ano. É obrigatório. 
* <strong>rate:</strong> É a avaliação da palestra. Essa informação deve estar no objeto talk e deve ser enviado como int. É obrigatório. 

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-talker" src="/images-readme/post-talker-entrada-exemplo.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-talker" src="/images-readme/post-talker-saida-exemplo.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

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

</details>

<!--
<details>
<summary>Endpoint POST /categories</summary><br />
Utilizado para criar uma nova categoria. Para isso, necessita de um nome e de um token valido. Caso as informações estejam corretas, retornara as informações da nova categoria.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-post-categories" src="/images-readme/post-categories-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-post-categories" src="/images-readme/post-categories-exemplo-saida.png">

#### Inserindo informações incorretas
Existem quatro cenários onde a saída acima pode não ser retornada: não conter o nome da categoria, a string name estar vazia, caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o name:</strong>
```
{
  "message": "\"name\" is required"
}
```

<strong>Exemplo caso name seja uma string vazia:</strong>
```
{
  "message": "\"name\" is not allowed to be empty"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint GET /categories</summary><br />
Utilizado para retornar as informações de todas as categorias que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-categories" src="/images-readme/get-categories-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-categories" src="/images-readme/get-categories-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint POST /post</summary><br />
Utilizado para criar um novo post. Para isso, necessita de um nome, email, senha e uma imagem. Assim como o login, retornará um token caso todas as informações enviadas foram validadas corretamente.

##### Informações necessárias:
* <strong>title:</strong> É o título do post e deve ser enviado como string. É obrigatório.
* <strong>content:</strong> É o conteúdo do post e deve ser enviado como string. É obrigatório.
* <strong>categoryIds:</strong> É um array de números com as categorias ao qual o post pertence e precisa ter pelo menos 1 id de categoria. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-post-post" src="/images-readme/post-post-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-post-post" src="/images-readme/post-post-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "Some required fields are missing"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"content\" is required"
}
```

##### Além disso, pode ter os erros do token.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

</details>

<details>
<summary>Endpoint GET /post</summary><br />
Utilizado para retornar as informações de todas as postagens que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-post" src="/images-readme/get-post-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-post" src="/images-readme/get-post-exemplo-saida.png">


#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<details>
<summary>Endpoint GET /post/:id</summary><br />
Utilizado para retornar as informações das postagens com o id que está no url que contém no banco de dados, porém é necessário ter um token para isso.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-get-post-id" src="/images-readme/get-post-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-get-post-id" src="/images-readme/get-post-id-exemplo-saida.png">


#### Inserindo informações incorretas
Existem três cenários onde a saída acima pode não ser retornada: caso não exista post com aquele id, não tenha o token e um token invalido.

<strong>Caso não exista post com aquele no banco de dados, o retorno será:</strong>
```
{
  "message": "Post does not exist"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Expired or invalid token"
}
```

</details>

<strong>OBS:</strong> Existe o Endpoint GET /search, porém não funciona.

## Utilizando o docker
Para criar os containers, execute: `docker-compose up -d`

Para abrir o terminar do container, execute: `docker exec -it blogs_api bash`

## Instalando Dependências
  `npm install`

## Banco de dados
Para criar o banco de dados, execute: `npm run prestart`

Para popular o banco de dados: `npm run seed`

## Aplicação Node:
Para executar a aplicação e acessar as rotas, execute: `npm run debug`


## Executando Testes
Para rodar todos os testes:

  `npm test`


Para rodar um teste específico:

  `npm test nomeDoArquivo`

exemplo:
`npm test post`



<strong>OBS:</strong> Os testes irão rodar com os testes de cobertura -->