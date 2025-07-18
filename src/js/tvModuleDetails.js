import {  fetchTvDetails  } from './fetch_api.js';
import { starIco, addBox, share, playTv } from './Icos.js';
import { states } from './states.js';
import {  trailerTV  } from './tvModuleTrailers.js';


const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const sectionDetails = document.createElement('section');
document.body.appendChild(sectionDetails);
sectionDetails.setAttribute('class', 'sections');
sectionDetails.setAttribute('id', 'detailsTv');

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

// function for back screens TVs
function backScreenTv(){
    const btnBack = document.getElementById('btn_back');
    const displayArea = document.querySelector('.display_area')
    const posterBox = document.getElementById('i_p');
    const playTrailers = document.getElementById('play'); 
    
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
                playTrailers.style.display = 'flex';
                
            }
                
        }, 2000);
        
    })
}

// function for exhibition details of movie selected
export async function detailsTv(idTv){
    
    try {
        const tvDetails = await fetchTvDetails(idTv, 'pt-BR');
        const imagePath = tvDetails.poster_path;
        const classifications = tvDetails.brazil_certification;
        const genres = tvDetails.genres;
        const votes = tvDetails.vote_average.toFixed(1);
        const title = tvDetails.name;
        const description = tvDetails.overview;
        const authors = tvDetails.credits?.cast;
        
        const divImg = document.createElement('div');
        const imgMovie = document.createElement('img');
        imgMovie.setAttribute('id', 'imageMovie')
        divImg.setAttribute('class', 'box-img');
        imgMovie.src = `${TMDB_IMAGE_BASE_URL}${imagePath}`;
        divImg.appendChild(elementSvg)
        divImg.appendChild(imgMovie)
        divImg.innerHTML += `${playTv}`
        
        
        const divInfoTv = document.createElement('div');
        divInfoTv.setAttribute('class', 'info_Movie');
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
        divInfoTv.appendChild(divChildOne);
        const divChildSecond = document.createElement('div');
        const spanChildDivSecond_1 = document.createElement('span');
        spanChildDivSecond_1.innerHTML = `${addBox}`
        const spanChildDivSecond_2 = document.createElement('span');
        spanChildDivSecond_2.innerHTML = `${share}`;
        divChildSecond.appendChild(spanChildDivSecond_1);
        divChildSecond.appendChild(spanChildDivSecond_2)
        divInfoTv.appendChild(divChildSecond);
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
        sectionDetails.appendChild(divInfoTv);
        sectionDetails.appendChild(titleAndDescription);
        sectionDetails.appendChild(divAuthors)
        
        backScreenTv();
        
        
        const btnPlayTv = document.getElementById('play_tv_trailers');
        btnPlayTv.addEventListener('click', ()=> {
            
            btnPlayTv.style.display = 'none'
            // call function for view trailers 
            trailerTV(idTv)
                        
        })



    } catch (error) {
        console.error('Erro ao buscar detalhes do Tv:', error);
    }

}