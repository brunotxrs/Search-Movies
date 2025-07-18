import {  structureOfPages  } from './structure_of_pages.js';
import {  jsonDataTv  } from './fetch_api.js';
import {  play  } from './Icos.js';
import {  posterTrailerTV  } from './tvModuleTrailers.js';

structureOfPages()

// for recept all promises 
async function datas(){
    const tv = await jsonDataTv;
    const tvResults = tv.results
    return tvResults

}

export async function tvModulePoster(){
    const tvResults = await datas();

    const posterArea = document.getElementById('i_p');
    posterArea.innerHTML = '';
    const imagePoster = document.createElement('img');

    const tvWithPosters = tvResults.filter(tv => tv.poster_path);
    const originalTitle = tvResults.filter(title => title.name);
    const tvId = tvResults.filter(idMovie => idMovie.id);
    const randomIndex = Math.floor(Math.random() * tvResults.length);

    const randomTv = tvWithPosters[randomIndex];
    const randomTitle = originalTitle[randomIndex];
    const idTv = tvId[randomIndex];
    const idForTrailer = idTv.id;
    const tvTitle = randomTitle.name;
    const imagePath = randomTv.poster_path;
    const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;

    imagePoster.src = `${imageUrl}`;
    imagePoster.alt = `${tvTitle}`
    posterArea.appendChild(imagePoster);
    posterArea.innerHTML += `${play}`


    const playTrailers = document.getElementById('play') 
    playTrailers.style.display = 'flex'

    const playMovie = document.getElementById('play')
    playMovie.addEventListener('click', () => {
        playMovie.style.display = 'none'
        // call function for view trailers 
        posterTrailerTV(idForTrailer)
        
        
    })

}