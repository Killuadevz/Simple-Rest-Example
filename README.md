# API REST - JSONPlaceholder

Este projeto exemplifica o uso de uma API REST utilizando a API pública "JSONPlaceholder". O JSONPlaceholder é uma ferramenta amplamente usada para testes e aprendizado, fornecendo dados falsos para operações típicas de uma API REST, como obter, criar, atualizar e excluir recursos.

## Detalhes

### Tipo de API: REST
- Esta API segue os princípios REST, que é um estilo arquitetural amplamente utilizado na construção de APIs. 
- Uma API REST geralmente oferece diversos endpoints para operações como:
  - **GET**: Obter recursos (dados).
  - **POST**: Criar novos recursos.
  - **PUT**: Atualizar recursos existentes.
  - **DELETE**: Remover recursos.
- No exemplo deste projeto, utilizamos o endpoint `https://jsonplaceholder.typicode.com/users` para buscar uma lista de usuários.

### Protocolo: HTTP
- A comunicação entre o cliente (neste caso, uma aplicação JavaScript no navegador) e a API é realizada através do protocolo HTTP.
- Métodos HTTP comuns utilizados em APIs REST:
  - **GET**: Usado para recuperar dados de um servidor.
  - **POST**: Usado para enviar dados ao servidor, geralmente para criar novos recursos.
  - **PUT**: Usado para atualizar os recursos existentes.
  - **DELETE**: Usado para remover recursos do servidor.

## Exemplo de Uso
No exemplo deste projeto, utilizamos o método **GET** para buscar informações da API:

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Método de Requisição**: `GET`
- **Ferramenta JavaScript**: `fetch`

O código JavaScript usa a função `fetch` para fazer uma solicitação à API e obter uma lista de usuários, exibindo os dados na aplicação.

### Resumo
- **Tipo de API**: API REST.
- **Protocolo**: HTTP.
- **Método de Requisição Usado**: GET (para buscar informações da API).

## Conclusão
APIs REST que utilizam o protocolo HTTP são uma das formas mais comuns para integração entre sistemas. Este exemplo é uma ótima introdução ao uso de APIs REST em aplicações web, especialmente para quem está começando a aprender sobre comunicação entre cliente e servidor.
"# Simple-Rest-Example" 
