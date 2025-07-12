import {  trendingNow  } from './moduleTrendingNow.js';

const stateTypesGenres = {
    all: document.getElementById('all'),
    action: document.getElementById('action'),
    adventure: document.getElementById('adventure'),
    animation: document.getElementById('animation'),
    comedy: document.getElementById('comedy'),
    crime: document.getElementById('crime'),
    documentary: document.getElementById('documentary'),
    drama: document.getElementById('drama'),
    family: document.getElementById('family'),
    fantasy: document.getElementById('fantasy'),
    history: document.getElementById('history'),
    horror: document.getElementById('horror'),
    music: document.getElementById('music'),
    mystery: document.getElementById('mystery'),
    romance: document.getElementById('romance'),
    'science-fiction': document.getElementById('science-fiction'),
    'tv-movie': document.getElementById('tv-movie'),
    thriller: document.getElementById('thriller'),
    war: document.getElementById('war'),
    western: document.getElementById('western'),
    cards: document.getElementById('cards'),

}

let selectionType = ''

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

stateTypesGenres.all.addEventListener('click', () => {
    handleGenreButtonClick('all');
});

stateTypesGenres.action.addEventListener('click', () => {
    handleGenreButtonClick('Ação');
});

stateTypesGenres.adventure.addEventListener('click', () => {
    handleGenreButtonClick('Aventura');
});

stateTypesGenres.animation.addEventListener('click', () => {
    handleGenreButtonClick('Animação');
});

stateTypesGenres.comedy.addEventListener('click', () => {
    handleGenreButtonClick('Comédia');
});

stateTypesGenres.crime.addEventListener('click', () => {
    handleGenreButtonClick('Crime');
});

stateTypesGenres.documentary.addEventListener('click', () => {
    handleGenreButtonClick('Documentário');
});

stateTypesGenres.drama.addEventListener('click', () => {
    handleGenreButtonClick('Drama');
});

stateTypesGenres.family.addEventListener('click', () => {
    handleGenreButtonClick('Família');
});

stateTypesGenres.fantasy.addEventListener('click', () => {
    handleGenreButtonClick('Fantasia');
});

stateTypesGenres.history.addEventListener('click', () => {
    handleGenreButtonClick('História');
});

stateTypesGenres.horror.addEventListener('click', () => {
    handleGenreButtonClick('Terror');
});

stateTypesGenres.music.addEventListener('click', () => {
    handleGenreButtonClick('Música');
});

stateTypesGenres.mystery.addEventListener('click', () => {
    handleGenreButtonClick('Mistério');
});

stateTypesGenres.romance.addEventListener('click', () => { 
    handleGenreButtonClick('Romance');
});

stateTypesGenres['science-fiction'].addEventListener('click', () => {
    handleGenreButtonClick('Ficção científica');
});

stateTypesGenres['tv-movie'].addEventListener('click', () => {
    handleGenreButtonClick('Cinema TV');
});

stateTypesGenres.thriller.addEventListener('click', () => { 
    handleGenreButtonClick('Thriller');
});

stateTypesGenres.war.addEventListener('click', () => { 
    handleGenreButtonClick('Guerra');
});

stateTypesGenres.western.addEventListener('click', () => {
    handleGenreButtonClick('Faroeste');
});

function handleGenreButtonClick(genreName) {
    selectionType = genreName;
    stateTypeOfContainerCards(false); // Inicia o spinner
    
    setTimeout(async() => {    
        stateTypeOfContainerCards(true); // Remove o spinner
        await trendingNow(selectionType);
    }, 1000);

}

document.addEventListener('DOMContentLoaded', () => {
    handleGenreButtonClick('all'); 
});

export function typesGenres(){
    selectionType
}