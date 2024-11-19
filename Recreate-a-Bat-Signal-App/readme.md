# Recreate-a-Bat-Signal-App

Este é um aplicativo React Native que recria o sinal do Batman. O aplicativo permite que os usuários ativem um sinal de morcego e preencham um formulário para chamar o Batman.

## Estrutura do Projeto

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/kgton12/recreate-a-bat-signal-app.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd recreate-a-bat-signal-app
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o aplicativo no modo de desenvolvimento.
Abra [http://localhost:19002](http://localhost:19002) para ver no navegador.

### `npm run android`

Inicia o aplicativo no modo de desenvolvimento em um dispositivo Android.

### `npm run ios`

Inicia o aplicativo no modo de desenvolvimento em um dispositivo iOS.

### `npm run web`

Inicia o aplicativo no modo de desenvolvimento no navegador.

### `npm run format`

Formata o código usando Prettier.

### `npm run lint`

Verifica o código usando ESLint e corrige problemas automaticamente.

### `npm run fl`

Formata e verifica o código usando Prettier e ESLint.

## Estrutura de Navegação

A navegação do aplicativo é gerenciada pelo React Navigation. A estrutura de navegação está definida em [`src/navigation/appnavigation.tsx`](src/navigation/appnavigation.tsx).

## Telas

### Home

A tela inicial do aplicativo. Contém um botão para ativar o sinal do Batman.

Arquivo: [`src/screens/Home/Home.tsx`](src/screens/Home/Home.tsx)

### Form

A tela de formulário onde os usuários podem preencher informações para chamar o Batman.

Arquivo: [`src/screens/Form/Form.tsx`](src/screens/Form/Form.tsx)

## Configuração do TypeScript

A configuração do TypeScript está definida no arquivo [`tsconfig.json`](tsconfig.json).

## Configuração do ESLint

A configuração do ESLint está definida no arquivo [`eslint.config.js`](eslint.config.js).

## Configuração do Prettier

A configuração do Prettier está definida no arquivo [`.prettierrc`](.prettierrc).

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.