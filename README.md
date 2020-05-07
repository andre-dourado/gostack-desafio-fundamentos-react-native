<h1 align="center">
    <img src="https://github.com/andrewdourado/gostack-desafio-fundamentos-react-native/blob/master/src/assets/logo@2x.png" alt="GoMarketplace logo" width="300px">
</h1>

<h3 align="center">Desafio Fundamentos do React Native</h3>

<p align="center">
  <img src="https://github.com/andrewdourado/gostack-desafio-fundamentos-react-native/blob/master/demo.gif" width="300" alt="GoMarketplace gif" />   
</p>

<p align="center">
  <a href="https://github.com/andrewdourado/gostack-desafio-fundamentos-react-native/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/andrewdourado/gostack-desafio-fundamentos-react-native?logo=license&style=for-the-badge"></a>
</p>

## Utilizando uma fake API

Antes de tudo, para que você tenha os dados para exibir em tela, existe um arquivo que você poderá utilizar como fake API para te prover esses dados.

Para isso, existe uma dependência no package.json chamada `json-server`, e um arquivo chamado `server.json` que contém os dados para uma rota `/products`. Para executar esse servidor você pode executar o seguinte comando:

```js
  yarn json-server server.json -p 3333
```

## Funcionalidades da aplicação

- **`Listar os produtos da fake API`**: A página `Dashboard` é capaz de exibir uma listagem através de uma tabela, com o campo `title`, `image_url` e `price`.

- **`Adicionar itens ao carrinho`**: Adiciona os itens no carrinho.

- **`Exibir itens do carrinho`**: Na página `Cart` exibe os itens do carrinho, junto com a quantidade, valor único, valor subtotal dos itens e total de todos os items.

- **`Aumentar quantidade de itens do carrinho`**: Na página `Cart` permite que o usuário aumente a quantidade de itens do mesmo produto.

- **`Diminuir quantidade de um item do carrinho`**: Na página `Cart` permite que o usuário decremente a quantidade de itens do mesmo produto.

- **`Exibir valor total dos itens no carrinho`**: Tanto na página `Dashboard`, tanto na página `Cart` exibem o valor total de todos os itens que estão no carrinho.


## Instalação

Para executar este projeto é necessário a instalacão prévia do [Git](https://git-scm.com/downloads "Git download"), [Yarn](https://classic.yarnpkg.com/en/docs/install "Yarn download"). Em seguida rode os seguintes comandos no terminal e para usuários Macs, [CocaPods](https://cocoapods.org/ "CocoaPods"):

```bash
# Clona este repositório
$ git clone https://github.com/andrewdourado/gostack-desafio-fundamentos-react-native.git

# Acessa o repositório clonado
$ cd gostack-desafio-fundamentos-react-native

# Instala as dependências
$ yarn

# Dependências nativas do ios (apenas Mac)
$ cd ios
$ pod install

# Executa o projeto. iOS apenas no Mac.
$ yarn ios
$ yarn android
```

## Tecnologias

- <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">React Native</a>
- <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>
- <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a>
- <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a>

## Créditos

Este projeto foi desenvolvido durante o Bootcamp GoStack 11 da <a href="https://rocketseat.com.br/" target="_blank" rel="noopener noreferrer">Rocketseat</a>.

## Licença
Esse projeto está sob a licença [MIT](https://github.com/andrewdourado/gostack-desafio-fundamentos-react-native/blob/master/LICENSE) © [André Dourado](https://github.com/andrewdourado)
