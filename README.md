# Criando Endpoints

Para criar endpoints neste repositório, siga estes passos:

1. Abra o projeto no seu editor de código preferido.
2. Navegue até o diretório `src`.
3. Abra o arquivo `server.ts`, para entender como o server é rodado.
4. Defina seus endpoints usando o framework Express.js. Aqui está um exemplo:

    ```typescript
    import express from 'express';

    const app = express();

    app.get('/', async (req, res) => {
        res.send("hello world!")
    })
    ```

    Tem também um exemplo no arquivo `src/routes/index.ts`

5. Para adicionar um novo endpoint, você pode criar um novo arquivo no diretório `src/routes` e importá-lo no arquivo `app.ts`. Certifique-se de definir corretamente as rotas e os manipuladores de cada endpoint.

6. Após definir seus endpoints, você pode iniciar a aplicação executando o comando `npm run dev` no terminal. Isso iniciará o servidor e você poderá testar seus endpoints usando uma ferramenta como o Postman.

7. Certifique-se de ter todas as dependências instaladas executando o comando `npm install` antes de rodar a aplicação pela primeira vez.

8. Se você precisar fazer alterações nos endpoints existentes, basta editar os arquivos correspondentes no diretório `src/routes` e reiniciar o servidor.

9. Lembre-se de documentar adequadamente cada endpoint, incluindo informações sobre os parâmetros esperados, o formato da resposta e quaisquer requisitos adicionais.

10. Divirta-se criando seus endpoints e explorando as possibilidades do Express.js!

### Tecnologias Usadas

| Tecnologia | Descrição |
|------------|-----------|
| Express.js | Framework web rápido e minimalista para Node.js |
| Axios        | Usada para fazer requisição para endpoints de outras aplicações      |
|               |                   |

### Arquitetura

```
 📁ensinando-endpoints-parte-1
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 client
   |  |    |- 📄 index.ts
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 planetasController.ts
   |  |
   |  ||--📁 models
   |  |    |- 📄 planeta.json
   |  |    |- 📄 planetas.ts
   |  |
   |  ||--📁 routes
   |  |    |- 📄 planetas.ts
   |  |    |- 📄 index.ts
   |  ||--📁 services
   |  |    |- 📄 planetaServices.ts
   |  |
   |  ||-📄 app.ts
   |  |
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.ts
   |- 📄 tsconfig.json
```

### Exercício

A ideia é você aprender consumir APIs externas e também manipular arquivos json.

Primeiro você deve entender como criar endpoints, logo depois ir criando as lógicas de negócio na service.

Tratar erros é na controller, mas atenção: ela NAO pode ter lógica alguma.

Logo após, na hora de fazer os posts, você pode usar o arquivo json criado na model, para poder aprender sobre outros métodos também: POST, PUT, etc.\n
A ideia desse exercício é você explorar tudo que tem aqui. /n


Na hora de fazer requisição, use o client previamente criado e use a documentação da api de [star wars](https://swapi.dev/documentation).
