import {  htmlMovie  } from './structure_movies.js';
import {  jsonData, genresPromise, fetchMovieCertification  } from './fetch_api.js';
import { states } from './states.js';

// for recept all promises 
async function datas(){
    const movies = await jsonData;
    const moviesResults = movies.results
    return moviesResults

}

htmlMovie()

function createSVG(){
    const urlSvg = `http://www.w3.org/2000/svg`;
    const svgPoster = document.createElementNS(urlSvg, 'svg');
    svgPoster.setAttribute('class', 'ico_play');
    svgPoster.setAttribute('xmlns', urlSvg);
    svgPoster.setAttribute('viewBox', '0 0 384 512');
    
    const pathElement = document.createElementNS(urlSvg, 'path');
    pathElement.setAttribute('d', 'M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z')

    svgPoster.appendChild(pathElement)

    return svgPoster
}
const elementSvg = createSVG()

// function for create the poster principal
async function poster(){

    const moviesResults = await datas()

    const p = document.getElementById('i_p')
    p.innerHTML = ''
    const imagePoster = document.createElement('img')

    const moviesWithPosters = moviesResults.filter(movie => movie.poster_path);
    const originalTitle = moviesResults.filter(title => title.original_title);
    const randomIndex = Math.floor(Math.random() * moviesResults.length);

    const randomMovie = moviesWithPosters[randomIndex];
    const randomTitle = originalTitle[randomIndex];
    const movieTitle = randomTitle.original_title;
    const imagePath = randomMovie.poster_path;
    const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;

    imagePoster.src = `${imageUrl}`;
    imagePoster.alt = `${movieTitle}`
    p.appendChild(imagePoster)
    p.appendChild(elementSvg)
    
}

const typesGenres = (async () => {

    try {
        const data = await genresPromise
        return data
        
    } catch (error) {
        console.error('erro nessa porra', error);
        return null;    
    }
})()


// function for add card for movies and your small details
async function trendingNow() {
    const movies = await jsonData;
    const ge = await typesGenres

    const genreMap = new Map();
    if (ge && ge.genres) {
        ge.genres.forEach(genre => {
            genreMap.set(genre.id, genre.name);
        });
    }
    
    
    const moviesArray = movies.results;

    const cardsHtml = document.getElementById('cards')
    cardsHtml.innerHTML = ''
    
    const classificationPromises = moviesArray.map(movie => 
        fetchMovieCertification(movie.id, 'BR')
    );
    const allClassifications = await Promise.all(classificationPromises);

    movies.results.forEach((element, index) => {
        
        const i = element.poster_path
        const imagePath = i;
        const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;

        let movieGenreNames = 'Gênero Desconhecido'; // Valor padrão

        if (element.genre_ids && element.genre_ids.length > 0) {
            const firstGenreId = element.genre_ids[0]; // Pega o ID do primeiro gênero
            movieGenreNames = genreMap.get(firstGenreId) || 'Desconhecido'; // Busca o nome no mapa
        }

        

        const movieClassification = allClassifications[index];


        const details = `
            <span class="card_left_right">
                <img src=${imageUrl} alt="${element.title}">

                <div class="area_of_types ${states.class_hidden}">
                    <span id="classification">${movieClassification}+</span>
                    <span id="type">${movieGenreNames}</span>
                    <span id="classification_stars">
                        <svg class="ico_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>

                        <span class="cla_number">${element.vote_average.toFixed(1)}</span>
                    </span>
                </div>

                <span class="name_filme ${states.class_hidden}" id="i_name${index}">${element.title}</span>
            </span>
        `
        cardsHtml.innerHTML += details

        
        
    });



    const cardsMovies = document.querySelectorAll('.card_left_right')
    cardsMovies.forEach((e, i) => {
        e.setAttribute('id', `id_cards${i}`)
        const idCards = document.getElementById(`id_cards${i}`);
        
        

        idCards.addEventListener('mouseover', () => {
            idCards.classList.remove('card_left_right');
            idCards.classList.add('card_principal');
            const i_name = document.getElementById(`i_name${i}`)
            i_name.classList.remove(states.class_hidden)
            

            if(idCards[i] <= 0 && idCards[i] >= 0 ) {
                const areaOfTypes = document.querySelector('.area_of_types');
                areaOfTypes.classList.remove(states.class_hidden)  

            }

        })
        


        idCards.addEventListener('mouseout', () => {
            idCards.classList.add('card_left_right');
            idCards.classList.remove('card_principal')
            const areaOfTypes = document.querySelector('.area_of_types');
            areaOfTypes.classList.add(states.class_hidden)
            const i_name = document.getElementById(`i_name${i}`)
            i_name.classList.add(states.class_hidden)
            

        })

        
    });
    
}


export function moviesPage(){
    poster()
    trendingNow()
    
}