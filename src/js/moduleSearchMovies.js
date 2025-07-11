import { searchMovies  } from './fetch_api.js';
import { states } from './states.js';

// function for search movies.
export function searchMovie(){
    const input_search = document.getElementById('input_search')
    const boxSearch = document.getElementById('search_box')
    const containerCards = document.getElementById('container_cards')
    const typesSelections = document.getElementById('types_selections')
    const divSearch = document.createElement('div')

    input_search.addEventListener('keyup', async(event) => {
       const searchItem  = input_search.value.trim();

       if(event.key === 'Enter'){

            const inputValue  = input_search.value.trim();
            states.spinner.classList.remove(states.class_hidden)
            typesSelections.style.display = 'none'
            containerCards.style.display = 'none'
                            
            setTimeout(() => {
                states.spinner.classList.add(states.class_hidden)
            }, 1000)

            setTimeout(() => {

            }, 2000)

            if(inputValue){
                try {
                    const searchResults = await searchMovies(searchItem);

                    if(searchResults.results && searchResults.results.length > 0) {
                    
                        searchResults.results.forEach(movie => {
                            console.log('titulo', movie.title)
                            const movieElement = document.createElement('div');
                            // movieElement.classList.add('card_left_right');
                            // (${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'})
                            // <p>${movie.overview || 'Sinopse não disponível.'}</p>

                            movieElement.innerHTML = `
                                <h3>${movie.title}</h3>
                                ${movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w92${movie.poster_path}" alt="${movie.title}"">` : ''}
                            `;
                            
                            divSearch.classList.add('containerSearchMovies')
                            divSearch.appendChild(movieElement)

                            setTimeout(() => {
                                boxSearch.appendChild(divSearch);
                            }, 2000)


                            
                        })
                        
                    }

                    
                } catch (error) {
                    console.error('Erro ao realizar a busca:', error);
                }

            }
        }

       if(event.key === 'Backspace'){
            states.spinner.classList.remove(states.class_hidden)
            divSearch.innerHTML = ''

            setTimeout(() => {
                states.spinner.classList.add(states.class_hidden)
                typesSelections.style.display = 'flex'
                containerCards.style.display = 'flex'
                
            }, 2000)
            
            
        }

    })


}