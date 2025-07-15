import {  structureOfPages  } from './structure_of_pages.js';
import {  jsonData,} from './fetch_api.js';

// for recept all promises 
async function datas(){
    const movies = await jsonData;
    const moviesResults = movies.results
    return moviesResults

}

structureOfPages()

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
export async function moviePoster(){

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

