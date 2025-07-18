# Search Movies

Um aplicativo web interativo e responsivo para buscar e explorar detalhes de filmes e séries de TV, consumindo dados de uma API externa (The Movie Database - TMDB). O projeto também inclui funcionalidades de autenticação para gerenciamento de usuários.

## 🚀 Visão Geral do Projeto

O **Search Movies** é uma ferramenta dinâmica que permite aos usuários pesquisar por uma vasta coleção de filmes e séries, visualizar listas de resultados, explorar detalhes aprofundados de cada item e assistir a trailers. Além disso, oferece uma experiência de usuário completa com funcionalidades de login, cadastro e recuperação de senha, proporcionando uma interface rica e intuitiva construída inteiramente com HTML, CSS e JavaScript puro.

Este projeto é uma excelente demonstração de consumo de APIs com parâmetros de busca, manipulação de DOM, modularização de código JavaScript e criação de interfaces de usuário responsivas.

## ✨ Funcionalidades Essenciais

O aplicativo oferece as seguintes funcionalidades principais:

* **Autenticação de Usuários:**
    * **Tela de Login:** Permite que usuários existentes façam login na plataforma.
    * **Cadastro (Registro):** Novas contas podem ser criadas com facilidade.
    * **Recuperação de Senha:** Funcionalidade para redefinir senhas esquecidas. **[OBS: Não a logica implantada pra isso, apenas uma area visual]**
    * **Pré-Carregamento (Preload):** Uma tela inicial de carregamento que gerencia a transição para as telas de login/registro e, posteriormente, para o conteúdo principal.

* **Navegação e Conteúdo:**
    * **Seleção de Conteúdo:** Alternar facilmente entre seções dedicadas a **Filmes** e **Séries de TV**.
    * **Campo de Busca Intuitivo:** Permite pesquisar filmes e séries por título, com resultados exibidos dinamicamente.
    * **Exibição de Resultados:** Apresenta os resultados da busca em uma grade responsiva de cards, cada um exibindo pôster e título.
    * **Tendências (Trending Now):** Exibe uma lista de filmes e séries populares do momento, com rolagem horizontal e efeitos visuais ao passar o mouse.
    * **Filtro por Gênero:** Possibilidade de filtrar o conteúdo (filmes ou séries) por diversos gêneros disponíveis, como Ação, Comédia, Drama, etc.

* **Detalhes e Mídia:**
    * **Detalhes Aprofundados:** Ao clicar em um card, um modal é exibido com informações detalhadas do filme/série, incluindo sinopse, elenco, diretores (para filmes), avaliação (IMDB), e classificação etária.
    * **Reprodução de Trailers:** Permite assistir a trailers diretamente na aplicação para filmes e séries selecionados.
    * **Tratamento de Erros:** Mensagens claras são exibidas em caso de falhas na busca (nenhum resultado encontrado, erro de API, etc.) ou ausência de trailers.
    * **Visual Atraente:** Design limpo e focado em destacar os pôsteres, com tipografia legível e uso de ícones SVG.

## 💻 Tecnologias Envolvidas

Este projeto foi construído utilizando as seguintes tecnologias:

* **HTML5:** Utilizado para a estrutura semântica das páginas, garantindo acessibilidade e boa organização do conteúdo.
* **CSS3:** Responsável pela estilização completa do aplicativo, incluindo:
    * **Layout Responsivo:** Adaptação da interface para diferentes tamanhos de tela (desktop, tablet, mobile).
    * **Modularização:** Uso de `@import` para organizar os estilos em arquivos menores (`global.css`, `reset.css`, `display_area.css`, `detailsMovies.css`, `login.css`, `preload.css`, `registration_password_recovery.css`, `spinner.css`, `utility_classes.css`), facilitando a manutenção.
    * **Variáveis CSS:** Para padronização de cores e fontes.
    * **Animações e Transições:** Efeitos visuais para o spinner de carregamento e interação com os cards.
* **JavaScript (ES6+):** O coração da aplicação, responsável por toda a lógica interativa e dinâmica:
    * **Consumo de API:** Integração com a [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) para buscar dados de filmes, séries, tendências, gêneros, detalhes e trailers.
    * **Modularização de Código:** O código JavaScript é organizado em módulos (`fetch_api.js`, `moduleDetailsMovies.js`, `moduleGenresTypes.js`, `moduleSearchMovies.js`, `moduleTrendingNow.js`, `login.js`, `registration_password_recovery.js`, `states.js`, `structure_of_pages.js`, entre outros), promovendo a reusabilidade e a manutenibilidade.
    * **Manipulação de DOM:** Criação, atualização e remoção dinâmica de elementos HTML com base nos dados da API e nas interações do usuário.
    * **Gerenciamento de Estado:** Utilização do `localStorage` para persistência de dados do usuário (nome, senha) para a funcionalidade de login.
    * **Roteamento Básico:** Navegação entre as páginas (`index.html`, `movies.html`, `tv.html`) utilizando `window.location.href`.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura de pastas organizada para facilitar o desenvolvimento e a manutenção:

````
Search-Movies
├── src/
│   ├── assets/
│   │   ├── favicon/
│   │   └── imgs/ (Imagens do projeto, incluindo logo e imagens de login)
│   ├── css/
│   │   ├── styles.css (Importa todos os outros arquivos CSS)
│   │   ├── global.css
│   │   ├── reset.css
│   │   ├── utility_classes.css
│   │   ├── preload.css
│   │   ├── spinner.css
│   │   ├── login.css
│   │   ├── registration_password_recovery.css
│   │   ├── display_area.css
│   │   └── detailsMovies.css
│   ├── html/
│   │   ├── movies.html (Página principal de filmes)
│   │   └── tv.html (Página principal de séries de TV)
│   └── js/
│       ├── fetch_api.js (Funções para interagir com a API TMDB)
│       ├── Icos.js (Definições de ícones SVG)
│       ├── initialize_app.js
│       ├── login.js (Lógica da tela de login)
│       ├── moduleDetailsMovies.js (Exibição de detalhes de filmes)
│       ├── moduleGenresTypes.js (Filtro de gêneros para filmes)
│       ├── modulePosterMovie.js (Lógica do pôster principal de filmes)
│       ├── moduleSearchMovies.js (Lógica de busca de filmes)
│       ├── moduleSelections.js (Lógica de seleção entre filmes e séries)
│       ├── moduleTrailersMovies.js (Exibição de trailers de filmes)
│       ├── moduleTrendingNow.js (Exibição de filmes em tendência)
│       ├── moviesScreens.js (Inicialização da página de filmes)
│       ├── preload.js (Lógica da tela de pré-carregamento)
│       ├── registration_password_recovery.js (Lógica de cadastro/recuperação)
│       ├── scripts.js (Ponto de entrada principal do JS)
│       ├── scripts_second.js (Ponto de entrada do JS para movies.html)
│       ├── states.js (Gerenciamento de estados e elementos DOM)
│       ├── structure_of_pages.js (Estrutura comum das páginas de conteúdo)
│       ├── tv.js (Ponto de entrada do JS para tv.html)
│       ├── tvModuleDetails.js (Exibição de detalhes de séries de TV)
│       ├── tvModuleGenres.js (Filtro de gêneros para séries de TV)
│       ├── tvModulePoster.js (Lógica do pôster principal de séries de TV)
│       ├── tvModuleSearch.js (Lógica de busca de séries de TV)
│       ├── tvModuleTrailers.js (Exibição de trailers de séries de TV)
│       └── tvModuleTrendingNow.js (Exibição de séries de TV em tendência)
├── .gitignore
├── index.html (Página inicial/Login)
├── License
└── README.md

````
-----

## 🌐 Acesso ao Projeto

Você pode acessar e explorar o projeto **Search Movies** diretamente no seu navegador através do seguinte link:

[**Acesse Search Movies**](https://brunotxrs.github.io/Search-Movies/)

-----

## 📜Licença
Este projeto está sob a [Licença MIT](./License). Sinta-se à vontade para usar, modificar e compartilhar\! 🚀

-----

## ✨ Developer
👨‍💻 Este projeto foi desenvolvido por <strong>Bruno Teixeira</strong> como parte do meu portfólio de desenvolvimento Front-End. Sinta-se à vontade para entrar em contato ou contribuir com o projeto!

- [![LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/brunotxrs/)

- [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/brunotxrs)
