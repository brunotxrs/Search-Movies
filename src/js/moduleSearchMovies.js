import { searchMovies  } from './fetch_api.js';
import { states } from './states.js';
import { detailsMovies } from './moduleDetailsMovies.js';

const input_search = document.getElementById('input_search');
const boxSearch = document.getElementById('search_box');
const divSearch = document.createElement('div');
divSearch.classList.add('containerSearchMovies');
boxSearch.appendChild(divSearch);
const containerCards = document.getElementById('container_cards');
const typesSelections = document.getElementById('types_selections');

const p = document.createElement('p')
p.setAttribute('class', 'msg_info')
async function resultsSearch(searchItem){
    try {
        const searchResults = await searchMovies(searchItem);

        if(searchResults.results && searchResults.results.length > 0) {
            p.style.display = 'none'
            searchResults.results.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.setAttribute('id', `movie_card_index_${movie.id}`)
                

                movieElement.innerHTML = `
                    <h3>${movie.title}</h3>
                    ${movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w92${movie.poster_path}" alt="${movie.title}"">` : ''}
                `;
                
                
                divSearch.appendChild(movieElement)

                
                // apply interaction for exhibition details of movies
                const movieHandleClick = document.getElementById(`movie_card_index_${movie.id}`)
                movieHandleClick.addEventListener('click', ()=> {
                    const displayArea = document.querySelector('.display_area');
                    displayArea.classList.add(states.class_hidden);
                    states.spinner.classList.remove(states.class_hidden);

                    setTimeout(() => {
                        states.spinner.classList.add(states.class_hidden);
                        
                        detailsMovies(movie.id);
                    }, 2000)    
                
                })

                
                
            })
            
        }else {
            p.textContent = 'Nenhum filme encontrado.'            
            boxSearch.appendChild(p)
            p.style.display = 'flex'
            divSearch.innerHTML = ''
            
        }

        
    } catch (error) {
        console.error('Erro ao realizar a busca:', error);
    }

}



function stateElements(value){
    if(value === false){
        typesSelections.style.display = 'none'
        containerCards.style.display = 'none'
        states.spinner.classList.remove(states.class_hidden)    
    }else if(value === true){
        divSearch.innerHTML = '';
        divSearch.style.display = 'none'
        typesSelections.style.display = 'flex'
        containerCards.style.display = 'flex'
        states.spinner.classList.add(states.class_hidden)
        p.style.display = 'none'        
    }else {
        states.spinner.classList.add(states.class_hidden)
        divSearch.innerHTML = ''
        p.style.display = 'none'
    }
}



// function for search movies.
export function searchMovie(){
    const inputValue = input_search.value.trim()     

    input_search.addEventListener('keyup', async(event) => {
        const searchItem  = input_search.value.trim();

        if(searchItem.length > 0){

            if(event.key === 'Enter'){
                divSearch.innerHTML = ''
                stateElements(false)

                setTimeout(() => {
                    states.spinner.classList.add(states.class_hidden)

                }, 1000)  
                divSearch.style.display = 'grid'            
                resultsSearch(searchItem)
                
            } else if(event.key === 'Backspace' && searchItem.length === 0){
                stateElements()
            } else {
                stateElements(true);
            }

        }else if(inputValue.length === 0 && input_search.value.trim() === 0 || input_search.value.trim() === ''){
            stateElements(true);
        }

    })

}

