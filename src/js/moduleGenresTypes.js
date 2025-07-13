import {  trendingNow  } from './moduleTrendingNow.js';
import {  genresPromise } from './fetch_api.js';

let selectionType = ''

const typesType = document.querySelector('.types_type')
typesType.innerHTML = ''

async function createElementsGenres() {
    const genreMap = await genresPromise;
    const spanFirst = document.createElement('span');
    spanFirst.setAttribute('id', 'all')
    spanFirst.innerHTML = 'All'
    typesType.appendChild(spanFirst)
    spanFirst.addEventListener('click', () => {
        handleGenreButtonClick('all');
    });


    genreMap.genres.forEach((e, i) => {
        const nameGenres = e.name
        const spanGenres = document.createElement('span')
        spanGenres.innerHTML = `${e.name}`;
        spanGenres.setAttribute('id', e.name.toLowerCase().replace(/\s/g, '-'))
        typesType.appendChild(spanGenres) 

        spanGenres.addEventListener('click', () => {
            selectionType = nameGenres
            handleGenreButtonClick(selectionType)
        })
    })



}

createElementsGenres()

const stateTypesGenres = {
    cards: document.getElementById('cards'),
}


const spinnerLoad = document.createElement('span')
spinnerLoad.setAttribute('class', 'load_spinner')

function stateTypeOfContainerCards(value){
    if(value === false){
        stateTypesGenres.cards.innerHTML = '';
        stateTypesGenres.cards.appendChild(spinnerLoad);
        stateTypesGenres.cards.style.justifyContent = 'center'
    }else if(value === true){
        stateTypesGenres.cards.style.justifyContent = 'initial'
        stateTypesGenres.cards.innerHTML = '';        
    }
}

function handleGenreButtonClick(genreName) {
    selectionType = genreName;
    stateTypeOfContainerCards(false); // Inicia o spinner
    
    setTimeout(async() => {
        stateTypeOfContainerCards(true); // Remove o spinner
        await trendingNow(selectionType);
    }, 3000);

}

document.addEventListener('DOMContentLoaded', () => {
    handleGenreButtonClick('all'); 
});

export function typesGenres(){
    selectionType
}