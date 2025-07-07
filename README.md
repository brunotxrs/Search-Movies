# Search Movies

Um aplicativo web interativo para buscar e explorar detalhes de filmes e séries, consumindo dados de uma API externa.

## 🚀 Visão Geral do Projeto

O projeto **Search Movies** é uma ferramenta dinâmica que permite aos usuários pesquisar por filmes e séries, visualizar uma lista de resultados e, em seguida, explorar os detalhes de cada item. É uma excelente oportunidade para aprimorar o uso de APIs com parâmetros de busca e a criação de interfaces de usuário ricas em JavaScript.

## ✨ Funcionalidades Essenciais

  * **Campo de Busca:** Um campo de texto intuitivo para o usuário digitar o nome do filme ou série desejada, acompanhado de um botão "Buscar".
  * **Exibição de Resultados:** Ao realizar uma busca, a aplicação exibe uma grade responsiva de cards, cada um contendo o pôster, título e ano de lançamento do filme/série.
  * **Detalhes do Item:** Clicar em qualquer card da lista de resultados revelará uma seção detalhada do item, incluindo informações como sinopse, diretores, atores, e a avaliação do IMDB.
  * **Tratamento de Erros:** Mensagens claras serão exibidas caso nenhum filme seja encontrado para a busca realizada, ou em caso de falhas na comunicação com a API.

## 💻 Tecnologias Envolvidas

  * **HTML5:** Para a estrutura semântica da página.
  * **CSS3:** Para a estilização, layout responsivo da grade de cards e o design do modal/seção de detalhes.
  * **JavaScript (ES6+):** O core da aplicação, responsável por:
      * Fazer requisições assíncronas à API com parâmetros de busca.
      * Renderizar dinamicamente a lista de filmes.
      * Gerenciar eventos de clique para exibir os detalhes.
      * Implementar técnicas de performance como *debounce* na busca.

## 💡 API
API para obter os dados:

[The Movie Database (TMDB) API](https://www.themoviedb.org/) - Uma API mais robusta, requer chave, mais dados, encontrará a lista para filmes, TV, atores e imagens..

## 🧠 Pontos de Aprendizado

Ao desenvolver este projeto, estou praticando e consolidando os seguintes conceitos:

  * **Requisições GET com Query Parameters:** Aprender a passar parâmetros de busca para uma API externa (`fetch()`).
  * **Iteração sobre Arrays:** Utilizar métodos como `.map()` ou `forEach()` para processar e exibir listas de resultados da API.
  * **Criação Dinâmica de Elementos HTML:** Manipular o DOM para criar e inserir elementos HTML diretamente do JavaScript.
  * **Event Listeners Dinâmicos:** Adicionar ouvintes de eventos a elementos que são criados após o carregamento inicial da página.
  * **Debounce:** Implementar a técnica de *debounce* no campo de busca para otimizar o número de requisições à API, melhorando a performance e a experiência do usuário.

## 🎨 Ideia de Design e UI

  * **Barra de Navegação Simples:** Um cabeçalho minimalista no topo da página, contendo um logotipo e o campo de busca, proporcionando uma experiência de usuário limpa.
  * **Grade Responsiva:** Os cards de filmes serão organizados em uma grade que se adapta a diferentes tamanhos de tela (desktop, tablet, mobile), priorizando a visualização dos pôsteres.
  * **Modal ou Seção Lateral de Detalhes:** Ao clicar em um filme, os detalhes serão exibidos em um modal sobreposto ao conteúdo, ou em uma seção lateral que desliza, mantendo o usuário no contexto da busca.
  * **Foco no Visual:** O design será limpo e focado em destacar os pôsteres dos filmes, com tipografia legível para os títulos e informações.

<!-- ## ⬆️ Desafios Adicionais (Para ir Além)

Implementando os seguintes recursos:

  * **Paginação dos Resultados:** Adicionar controles para navegar entre as páginas de resultados da busca.
  * **Filtrar por Tipo:** Permitir que o usuário filtre os resultados por tipo (filme, série, episódio).
  * **Botão "Favoritar":** Adicionar uma funcionalidade para "favoritar" filmes, salvando-os no `localStorage` para acesso futuro.
  * **Tratamento de Imagens Não Encontradas:** Exibir uma imagem *placeholder* quando o pôster de um filme não estiver disponível na API. -->

-----

## 📜Licença
Este projeto está sob a [Licença MIT](./License). Sinta-se à vontade para usar, modificar e compartilhar\! 🚀

-----

## ✨ Developer
👨‍💻 Este projeto foi desenvolvido por <strong>Bruno Teixeira</strong> como parte do meu portfólio de desenvolvimento Front-End. Sinta-se à vontade para entrar em contato ou contribuir com o projeto!

- [![LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/brunotxrs/)

- [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/brunotxrs)
