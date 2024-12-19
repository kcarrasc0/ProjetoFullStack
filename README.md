# Projeto Full Stack de Gestão de Produtos

Este projeto consiste em uma aplicação full-stack para gestão de produtos. A aplicação é dividida em duas partes:

- **Frontend**: Aplicação mobile desenvolvida com React Native, que utiliza Expo para facilitar o desenvolvimento.
- **Backend**: API RESTful construída com Node.js e Express, com o MongoDB para armazenamento de dados.

## Funcionalidades

- **Frontend**:
  - Listagem de produtos.
  - Exibição de detalhes do produto.
  - Adição, edição e remoção de produtos.

- **Backend**:
  - CRUD de produtos com persistência no MongoDB.
  - Conexão segura com o banco de dados e manipulação de erros.

## Como Rodar

### Backend
1. Navegue até a pasta do backend e instale as dependências:
    ```bash
    npm install
    ```

2. Inicie o servidor:
    ```bash
    node server.js
    ```

3. A API estará disponível em `http://localhost:5000/api/products`.

### Frontend
1. Navegue até a pasta do frontend e instale as dependências:
    ```bash
    npm install
    ```

2. Inicie o Expo:
    ```bash
    npx expo start
    ```

3. A aplicação estará disponível no emulador ou dispositivo físico via QR Code.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React Native, Expo, Axios

## Autor
- **Erick Carrasco Oliveira**

# DOCUMENTAÇÃO

<embed src="https://github.com/kcarrasc0/ProjetoFullStack/blob/main/Documentação%20do%20Projeto%20-%20Arquitetura%20e%20Estrutura.pdf" width="600" height="400" />


