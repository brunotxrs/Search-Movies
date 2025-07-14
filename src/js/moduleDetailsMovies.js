import { fetchMovieDetails  } from './fetch_api.js';
import { starIco, addBox, share, play } from './Icos.js';

import { states } from './states.js';


const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const sectionDetails = document.createElement('section');
document.body.appendChild(sectionDetails)
sectionDetails.setAttribute('class', 'sections');
sectionDetails.setAttribute('id', 'detailsMovies')

function createSVG(){
    const urlSvg = `http://www.w3.org/2000/svg`;
    const svgArrowBack = document.createElementNS(urlSvg, 'svg');
    svgArrowBack.setAttribute('class', 'ico_arrow_back');
    svgArrowBack.setAttribute('id', 'btn_back')
    svgArrowBack.setAttribute('xmlns', urlSvg);
    svgArrowBack.setAttribute('viewBox', '0 -960 960 960');
    
    const pathElement = document.createElementNS(urlSvg, 'path');
    pathElement.setAttribute('d', 'm313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z')

    svgArrowBack.appendChild(pathElement)

    return svgArrowBack
};
const elementSvg = createSVG();





function backScreenMovies(){
    const btnBack = document.getElementById('btn_back')
    btnBack.addEventListener('click', ()=> {

        const displayArea = document.querySelector('.display_area')
        displayArea.classList.remove(states.class_hidden)
        sectionDetails.innerHTML = ''
        sectionDetails.classList.add(states.class_hidden)
        console.log('debug CLICK')
    })
}

export async function detailsMovies(idMovie){
    console.log(idMovie)
    
    try {
        const movieDetails = await fetchMovieDetails(idMovie, 'BR');
        const imagePath = movieDetails.poster_path;
        const classifications = movieDetails.brazil_certification;
        const genres = movieDetails.genres
        const votes = movieDetails.vote_average.toFixed(1)

        
        const divImg = document.createElement('div');
        const imgMovie = document.createElement('img');
        divImg.setAttribute('class', 'box-img');
        imgMovie.src = `${TMDB_IMAGE_BASE_URL}${imagePath}`;
        divImg.appendChild(elementSvg)
        divImg.appendChild(imgMovie)
        divImg.innerHTML += `${play}`
        
        
        const divInfoMovie = document.createElement('div');
        divInfoMovie.setAttribute('class', 'info_Movie');
        const divChildOne = document.createElement('div');
        const spanChildDivOne_1 = document.createElement('span');
        spanChildDivOne_1.innerHTML = `${classifications}+`
        if(spanChildDivOne_1.innerHTML === '+'){
            spanChildDivOne_1.style.display = 'none'
        };

        const spanChildDivOne_2 = document.createElement('span');
        genres.forEach(element => {
            const tipoG = document.createElement('span')
            tipoG.innerHTML = `${element.name}`
            spanChildDivOne_2.appendChild(tipoG)
        });
        const spanChildDivOne_3 = document.createElement('span');
        spanChildDivOne_3.innerHTML = `${starIco}${votes}`
        divChildOne.appendChild(spanChildDivOne_1);
        divChildOne.appendChild(spanChildDivOne_2);
        divChildOne.appendChild(spanChildDivOne_3);
        divInfoMovie.appendChild(divChildOne);
        const divChildSecond = document.createElement('div');
        const spanChildDivSecond_1 = document.createElement('span');
        spanChildDivSecond_1.innerHTML = `${addBox}`
        const spanChildDivSecond_2 = document.createElement('span');
        spanChildDivSecond_2.innerHTML = `${share}`;
        divChildSecond.appendChild(spanChildDivSecond_1);
        divChildSecond.appendChild(spanChildDivSecond_2)
        divInfoMovie.appendChild(divChildSecond);
        
        
        // títulos e atores
        
        
        console.log('Debug - Detalhes do Filme:', movieDetails);
        console.log('Título:', movieDetails.title);
        console.log('Descrição:', movieDetails.overview);
        console.log('Gêneros:', movieDetails.genres);
        console.log('Atores:', movieDetails.credits?.cast);
        console.log('Classificação BR:', movieDetails.brazil_certification);

        
        sectionDetails.appendChild(divImg);
        sectionDetails.appendChild(divInfoMovie)
        
        backScreenMovies();
    } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
    }

}