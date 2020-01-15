# SEMANA HOMEM STACK 10

[LINK DO VÍDEO!](https://youtu.be/tqdw5KVx4ps)

## Express

Por padrão, o express não entende requisções em json, então logo antes de de configurar o `app.use(routes)`, é necessário inserir `app.use(express.json())`, se não, as rotas irão ser programadas antes do app carregar os métodos do `json()`.

```javascript
    app.use(express.json())
    app.use(routes)
```

### Parâmetros do Express

- **Query Params:** utilizado quando vários parâmetros precisam ser enviados ao mesmo tempo para realizar um filtro.

```javascript
    const { product_name, category_id } = req.params
```

- **Query Params:** parece que no restuful é sempre utilizado nos métodos put e delete. Ele é inserido como `:param_name` na rota.

```javascript
    const { param_name } = req.params
```

- **Body Params:** Bem, vem do corpo Json da requesição. 😊

```javascript
    const { id, name, age } = req.body
```

## Mongoose

### Models: Exportandos models no mongoose

Para realizar a exportação de um model do mongoose, é interessante itilizar a seguinte síntaxe:

```javascript
    module.exports = mongoose.model('Dev', DevScheema)
```

Onde a String `'Dev'`, é o nome da Tabela ou Scheema dentro do banco de dados.

## Axios

Lib que importa dados de outras APIs.

```bash
    yarn add axios
```

Trazendo dados da api do github baseada nos nome de usuário:

```javascript
    axios.get(`https://api.github.com/users/${github_username}`)
```

## Setando um Default Value dentro da desestruturação

No exemplo do vídeo, existia a chance da api do GitHub não retornar o campo name, caso o usuário não tivesse inserido um nome. Logo, uma possível solução seria utilizar o login dele no lugar do nome. Pra isso, o javascript poussui uma opção de setar algo como default dentro da estruturação, utilizando até outro campo como valor default:

```javascript
    const apiRes = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = login, avatar_url, bio } = apiRes.data
```

A magina acontece no `name = login`, onde login é outro campo que vem de dentro do json da api do GitHub.

**ECMA SCRIPT É MÁGICO!** 👌

## Criando um vetor a partir de uma String separando por carácteres

Para facilitar muitas vezes a inserção de um array dentro do corpo da requisição, é possível "splitalá", por exemplo, utilizando uma vírgula. Ao invés de escrever um array com `[]` dentro do json do body, eu posso escrever apenas uma string do tipo:

```json
    { "values": "Value 1, Value 2, Value 3" }
```

E dentro da programação, fica:

```javascript
    const array = values.split(',').map(value => {
        value.trim()
    })
```

Onde o `trim()` tira o espaço do começo e do fim... Tu já sabe como funciona, né. 😆
