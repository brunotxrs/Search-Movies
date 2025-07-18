import { searchTv  } from './fetch_api.js';
import { states } from './states.js';
import { detailsTv } from '././tvModuleDetails.js';


const input_search = document.getElementById('input_search');
const boxSearch = document.getElementById('search_box');
const divSearch = document.createElement('div');
divSearch.classList.add('containerSearchMovies');
boxSearch.appendChild(divSearch);
const containerCards = document.getElementById('container_cards');
const typesSelections = document.getElementById('types_selections');

const p = document.createElement('p');
p.setAttribute('class', 'msg_info');

async function resultsSearch(searchItem){
    try {
        const searchResults = await searchTv(searchItem);

        if(searchResults.results && searchResults.results.length > 0) {
            p.style.display = 'none'
            searchResults.results.forEach(tv => {
                const tvElement = document.createElement('div');
                tvElement.setAttribute('id', `tv_card_index_${tv.id}`)
                

                tvElement.innerHTML = `
                    <h3>${tv.name}</h3>
                    ${tv.poster_path ? `<img src="https://image.tmdb.org/t/p/w92${tv.poster_path}" alt="${tv.name}"">` : ''}
                `;
                
                
                divSearch.appendChild(tvElement)

                
                // apply interaction for exhibition details of TVs
                const tvHandleClick = document.getElementById(`tv_card_index_${tv.id}`)

                tvHandleClick.addEventListener('click', ()=> {
                    const displayArea = document.querySelector('.display_area');
                    displayArea.classList.add(states.class_hidden);
                    states.spinner.classList.remove(states.class_hidden);

                    setTimeout(() => {
                        states.spinner.classList.add(states.class_hidden);
                        document.body.classList.add('bg_black');
                        detailsTv(tv.id);
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
export function searchTVs(){
    const inputValue = input_search.value.trim()     

    input_search.addEventListener('keyup', async(event) => {
        const searchItem  = input_search.value.trim();

        if(searchItem.length > 0){

            if(event.key === 'Enter'){
                divSearch.innerHTML = ''
                stateElements(false)

                // function here
                const posterTrailer = document.getElementById('area_of_trailers')
                posterTrailer.innerHTML = ''
                const imgPoster = document.getElementById('i_p')
                imgPoster.style.display = 'flex'
                const playTrailers = document.getElementById('play') 
                playTrailers.style.display = 'flex'

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

        } else if(inputValue.length === 0 && input_search.value.trim() === 0 || input_search.value.trim() === ''){
            stateElements(true);
        }

    })

}



