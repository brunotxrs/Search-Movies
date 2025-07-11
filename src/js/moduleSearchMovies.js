import { searchMovies  } from './fetch_api.js';
import { states } from './states.js';

// function for search movies.
export function searchMovie(){
    const input_search = document.getElementById('input_search')
    const boxSearch = document.getElementById('search_box')
    const containerCards = document.getElementById('container_cards')
    const typesSelections = document.getElementById('types_selections')
    const divSearch = document.createElement('div')


    function stateElements(value){
        if(value === false){
            typesSelections.style.display = 'none'
            containerCards.style.display = 'none'
            states.spinner.classList.remove(states.class_hidden)    
        }else if(value === true){
            typesSelections.style.display = 'flex'
            containerCards.style.display = 'flex'
            states.spinner.classList.add(states.class_hidden)        
        }else {
            states.spinner.classList.remove(states.class_hidden)
            divSearch.innerHTML = ''
        }
    }

    input_search.addEventListener('input', () => {
        stateElements(false)
    })

    stateElements(true)

    input_search.addEventListener('keyup', async(event) => {
       const searchItem  = input_search.value.trim();

       if(event.key === 'Enter'){
            stateElements(false)
            const inputValue  = input_search.value.trim();

            if(inputValue){
                stateElements(false)

                setTimeout(() => {
                    states.spinner.classList.add(states.class_hidden)
                }, 1000)

                setTimeout(() => {

                }, 1500)

                try {
                    const searchResults = await searchMovies(searchItem);

                    if(searchResults.results && searchResults.results.length > 0) {
                    
                        searchResults.results.forEach(movie => {
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
            const inputValue  = input_search.value.trim();
            stateElements()

            if(inputValue == ''){
                console.log('Debug')
                divSearch.innerHTML = ''               

            }


            setTimeout(() => {
                stateElements(true)

            }, 2000)
            
            
        }

    })


}