# Loja Bacana

Projeto que simula uma loja listando seus produtos, onde o usuário poderá manipular seu carrinho - adicionar itens, escolher a quantidade de cada um, removê-los do carrinho e até o limpar completamente. 

## Preview

Live preview disponível no [Heroku]():

## Como rodar?

Clone o projeto e execute o seguinte comando para instalar suas dependências:

```bash
npm install
# or
yarn install
```

Assim que a instalação finalizar, basta rodar o seguinte comando para que ele rode local na porta 3000:

```bash
npm run dev
# or
yarn run dev
```

Para o seu desenvolvimento, foi utilizado a versão 12.13.0 do Node.

## Dependências Utilizadas e suas motivações 

### Typescript

O Typescript é uma versão tipada do JavaScript. Além de facilitar o entendimento do código - e consequentemente, auxiliar na sua manutenção - o TS também ajuda no trabalho do desenvolvedor. Ele nos fornece informação para escrever um código mais limpo, organizado, seguindo padrões e permitindo que o código seja desenvolvido de maneira mais eficiente. 

Permite que a programação ocorra orientado a objetos, amplia o Intelisense do editor - autocomplete de código, exibe os parâmetros esperados e quaisquer descrições de métodos - e oferece uma maior segurança para o time - tudo isso devido a sua forte tipagem. 

### Next.js
Apesar de ser uma ótima biblioteca, o React possui muitos problemas com SEO - que é um conjunto de técnicas que tenta melhorar a posição de uma página no Google ou em qualquer outro mecanismo de busca. A fim de realizar server-side rendering (portanto, os dados são renderizados no lado do servidor), a biblioteca mais adotada pela comunidade do React é a Next.js

Como o projeto engloba uma loja de e-commerce, seria essencial que a página aparecesse como uma das primeiras nos mecanismos de buscas. O conteúdo da página pode sofrer mudanças constantemente e seria interessante ter uma boa indexação dos dados no Google. 


### Hooks
Altamente utilizados pela comunidade React atualmente, o hook veio para facilitar a vida dos desenvolvedores no gerenciamento de estados. Antigamente, era necessário utilizar - e entender - o comportamento de outras bibliotecas, como Flux e Redux. A própria documentação React recomenda a utilização de hooks, ja que eles resolvem vários problemas como reutilização de lógica com estado entre componentes e a complexidade que alguns componentes ficavam. 
Sem a utilização de hooks, ou qualquer biblioteca para gerenciamento de estados, era necessário usar o Higher-order components e render props, o que deixava o código muito verboso e perdia grande parte do seu isolamento de responsabilidade.
Claro que isso não impede o funcionamento do hooks junto do redux - na verdade, surgiu o React Redux que engloba os novos hooks nativos da biblioteca React. Para esse projeto, entretanto, só foi utilizado o hooks, pois não havia a necessidade de tanto grau de comunicação entre os componentes.

### Axios
Axios é uma biblioteca que provê um cliente HTTP baseado em Promises para realizar requisições. Seu maior ponto de aderência é pelo suporte aos navegadores nativo, sem precisar instalar qualquer polyfill - enquanto para aumentar a compatibilidade do fetch é necessário instalar o whatwg-fetch. Ele também provê uma fácil implementação de timeout no objeto de configuração das requisições, conversão automática em JSON e interceptação de requisições com facilidade - através do interceptors. 

### Bootstrap
Bootstrap é uma biblioteca muito famosa com design limpo e com componentes já responsivos. Para auxiliar no desenvolvimento do layout, a biblioteca foi utilizada em alguns momentos.

### React-Icons
Biblioteca que facilitou o uso de icons de famosas bibliotecas de icons - como Bootstrap Icons, Font Awesome e Material Design icons. 