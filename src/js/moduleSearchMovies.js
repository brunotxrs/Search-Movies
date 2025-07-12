import { searchMovies  } from './fetch_api.js';
import { states } from './states.js';

const input_search = document.getElementById('input_search')
const boxSearch = document.getElementById('search_box')
const containerCards = document.getElementById('container_cards')
const typesSelections = document.getElementById('types_selections')
const divSearch = document.createElement('div')


async function resultsSearch(searchItem){
    try {
        const searchResults = await searchMovies(searchItem);

        if(searchResults.results && searchResults.results.length > 0) {
        
            searchResults.results.forEach(movie => {
                const movieElement = document.createElement('div');
                

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

// function for search movies.
export function searchMovie(){
    
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
            states.spinner.classList.add(states.class_hidden)
            divSearch.innerHTML = ''
        }
    }

    
    input_search.addEventListener('input', () => {
        const inputValue = input_search.value.trim()

        if(inputValue.length > 0){

            if(inputValue){
                input_search.addEventListener('keyup', async(event) => {
                    const searchItem  = input_search.value.trim();

                    if(searchItem.length > 0){
                        
                        if(event.key === 'Enter'){
                            stateElements(false)

                            setTimeout(() => {
                                states.spinner.classList.add(states.class_hidden)
                            }, 1000)
                            resultsSearch(searchItem)
                            
                        } else if(event.key === 'Backspace'){
                            stateElements()     
                        }
                    }

                })

            }
            
        }else {
            stateElements(true);
            divSearch.innerHTML = ''; 
        }

    })

}

