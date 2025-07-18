import { fetchMovieDetails  } from './fetch_api.js';
import { starIco, addBox, share, play } from './Icos.js';
import { trailersMovies } from './moduleTrailersMovies.js';
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

// function for back screens movies
function backScreenMovies(){
    const btnBack = document.getElementById('btn_back');
    const displayArea = document.querySelector('.display_area');
    const posterBox = document.getElementById('i_p');
    const playMovie = document.getElementById('play_trailers');
    
    btnBack.addEventListener('click', ()=> {
        sectionDetails.innerHTML = '';
        sectionDetails.classList.add(states.class_hidden);
        states.spinner.classList.remove(states.class_hidden);

        setTimeout(() => {
            sectionDetails.innerHTML = '';
            states.spinner.classList.add(states.class_hidden);
            document.body.classList.remove('bg_black');
            displayArea.classList.remove(states.class_hidden);
            if(posterBox){
                posterBox.style.display = 'flex';
                playMovie.style.display = 'flex';
            }
                
        }, 2000);
        
    })
}
// function for exhibition details of movie selected
export async function detailsMovies(idMovie){
    
    
    try {
        const movieDetails = await fetchMovieDetails(idMovie, 'pt-BR');
        const imagePath = movieDetails.poster_path;
        const classifications = movieDetails.brazil_certification;
        const genres = movieDetails.genres;
        const votes = movieDetails.vote_average.toFixed(1);
        const title = movieDetails.title;
        const description = movieDetails.overview;
        const authors = movieDetails.credits?.cast;
        
        const divImg = document.createElement('div');
        const imgMovie = document.createElement('img');
        imgMovie.setAttribute('id', 'imageMovie')
        divImg.setAttribute('class', 'box-img');
        divImg.setAttribute('id', 'box_trailers')
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
        const titleAndDescription = document.createElement('div');
        titleAndDescription.setAttribute('class', 'title_and_description');
        const titleH2 = document.createElement('h2');
        titleH2.innerHTML = `${title}`
        titleAndDescription.appendChild(titleH2);
        const pDescription = document.createElement('p');
        pDescription.setAttribute('class', 'description_ellipsis')
        pDescription.innerHTML = `${description}`;
        titleAndDescription.appendChild(pDescription)
        const more = document.createElement('span');
        const less = document.createElement('span');
        more.setAttribute('id', 'more');
        less.setAttribute('id', 'less');
        more.style.color = '#ff0000';
        less.style.color = '#ff0000';
        more.textContent = 'more';
        less.textContent = 'less'
        less.style.display = 'none'

        titleAndDescription.appendChild(more);
        titleAndDescription.appendChild(less);
        
        more.addEventListener('click', () => {
            pDescription.classList.remove('description_ellipsis');
            more.style.display = 'none';
            less.style.display = 'flex';    
        });

        less.addEventListener('click', () => {
            pDescription.classList.add('description_ellipsis');
            more.style.display = 'flex';
            less.style.display = 'none';
        });

        const divAuthors = document.createElement('div');
        divAuthors.setAttribute('class', 'authors_container');
        const spanAuthors = document.createElement('span');
        spanAuthors.textContent = 'Atores';
        divAuthors.appendChild(spanAuthors);
        const divBoxAuthors = document.createElement('div');
        divBoxAuthors.setAttribute('class', 'box_authors');
        authors.forEach(authors => {
            const authorProfilePath = authors.profile_path;
            const imgAuthors = document.createElement('img');
            imgAuthors.src = `${TMDB_IMAGE_BASE_URL}${authorProfilePath}`;

            if(authorProfilePath === null){
                imgAuthors.style.display = 'none'
            }

            divBoxAuthors.appendChild(imgAuthors);
        });
        divAuthors.appendChild(divBoxAuthors);

        // clean 
        sectionDetails.innerHTML = ''   
        // apply elements 
        sectionDetails.appendChild(divImg);
        sectionDetails.appendChild(divInfoMovie);
        sectionDetails.appendChild(titleAndDescription);
        sectionDetails.appendChild(divAuthors)
        
        backScreenMovies();

        const playMovie = document.getElementById('play')
        playMovie.addEventListener('click', () => {
            playMovie.style.display = 'none'
            // call function for view trailers 
            trailersMovies(idMovie)
            
        })

    } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
    }

}