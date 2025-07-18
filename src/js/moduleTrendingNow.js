import {  jsonData, genresPromise, fetchMovieCertification, fetchMoviesByGenre  } from './fetch_api.js';
import { detailsMovies } from './moduleDetailsMovies.js';
import { states } from './states.js';

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const trendingNowContainer = document.getElementById('cards')
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

let genreMapCache = null;

const getGenreMap = async () => {
    if (genreMapCache) {
        return genreMapCache;
    }
    try {
        const ge = await genresPromise;
        const map = new Map();
        if (ge && ge.genres) {
            ge.genres.forEach(genre => {
                map.set(genre.id, genre.name);
            });
        }
        genreMapCache = map;
        return map;
    } catch (error) {
        console.error('Erro ao carregar gêneros:', error);
        return null;
    }
};

function scrollLeftAndRight() {
    function updateArrowVisibility() {
        if (trendingNowContainer.scrollWidth <= trendingNowContainer.clientWidth) {
            leftArrow.style.display = 'none';
            rightArrow.style.display = 'block';
        } else {
            
            if (trendingNowContainer.scrollLeft === 0) {
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'block';
            } else {
                leftArrow.style.display = 'block'; 
            }

            const maxScrollLeft = trendingNowContainer.scrollWidth - trendingNowContainer.clientWidth;
            if (trendingNowContainer.scrollLeft >= maxScrollLeft - 2) {
                rightArrow.style.display = 'none';
            } else {
                rightArrow.style.display = 'block';
            }
        }
    }

    leftArrow.addEventListener('click', () => {
        trendingNowContainer.scrollLeft -= 200;
    });

    rightArrow.addEventListener('click', () => {
        trendingNowContainer.scrollLeft += 200;
    });

    trendingNowContainer.addEventListener('scroll', updateArrowVisibility);

    requestAnimationFrame(() => {
        updateArrowVisibility();
    });

    
}

scrollLeftAndRight()

export async function trendingNow(filterType = 'all') {
    const cardsHtml = document.getElementById('cards')
    if (!cardsHtml) {
        console.error('Elemento #cards não encontrado.');
        return;
    }
    cardsHtml.innerHTML = '';

    const genreMap = await getGenreMap();
    let moviesToDisplay = [];

    try {

        if (filterType === 'all') {
            const moviesData = await jsonData;
            moviesToDisplay = moviesData.results;
        
        }else {
            const selectedGenreId = Array.from(genreMap.entries())
                                        .find(([id, name]) => name.toLowerCase() === filterType.toLowerCase())
                                        ?.['0'];


            if (selectedGenreId) {
                const genreMoviesData = await fetchMoviesByGenre(selectedGenreId);
                moviesToDisplay = genreMoviesData.results;
            } else {
                console.warn(`Gênero "${filterType}" não encontrado. Exibindo todos os filmes como fallback.`);
                const moviesData = await jsonData;
                moviesToDisplay = moviesData.results;
            }

        }

        if (moviesToDisplay.length === 0) {
            cardsHtml.innerHTML = '<p>Nenhum filme encontrado para esta seleção.</p>';
            return;
        }


        const classificationPromises = moviesToDisplay.map(movie => 
            fetchMovieCertification(movie.id, 'BR')
        );
        const allClassifications = await Promise.all(classificationPromises);

        moviesToDisplay.forEach((element, index) => {
            const imagePath = element.poster_path;
            const imageUrl = `${TMDB_IMAGE_BASE_URL}${imagePath}`;
            
            let movieGenreName = (filterType === 'all' && element.genre_ids && element.genre_ids.length > 0)
                           ? (genreMap.get(element.genre_ids[0]) || 'Desconhecido')
                           : filterType;

            const movieClassification = allClassifications[index];
            const classificationText = movieClassification ? `${movieClassification}+` : '+'; // Se vazio, coloca só '+'

            const details = `
                <span class="card_left_right" id="card_id_${index}">
                    <img src="${imageUrl}" alt="${element.title}">

                    <div class="area_of_types ${states.class_hidden}">
                        <span class="classifications">${classificationText}</span> 
                        <span class="movie-genre">${movieGenreName}</span> 
                        <span class="classification_stars">
                            <svg class="ico_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <span class="cla_number">${element.vote_average.toFixed(1)}</span>
                        </span>
                    </div>

                    <span class="name_filme ${states.class_hidden}" id="name_filme_${index}">${element.title}</span>
                </span>
            `;
            cardsHtml.innerHTML += details;
        });

        const classificationElements = document.querySelectorAll('.classifications');
        classificationElements.forEach(e => {
            if(e.textContent.trim() === '+'){ 
                e.style.display = 'none';   
            }
        });


        applyCardHoverEffects();
        
    } catch (error) {
        console.error('Erro ao exibir filmes filtrados:', error);
        cardsHtml.innerHTML = '<p>Ocorreu um erro ao carregar os filmes. Tente novamente mais tarde.</p>';
    }

    // function for exhibition of details of movies
    function clickCards(){
        moviesToDisplay.forEach((e, i) => {
            const cardsHandleClick = document.getElementById(`card_id_${i}`)
            const carsId = e.id
            
            cardsHandleClick.onclick = function(){
                handleClick()

                cardsHandleClick.addEventListener('click', ()=> {
                    handleDubleClick()
                })

            }

            function handleClick(){
                cardsHandleClick.classList.add('card_principal')
            }

            // has elements to clean
            function handleDubleClick(){
                const displayArea = document.querySelector('.display_area');
                const iframePoster = document.getElementById('area_of_trailers');

                iframePoster.innerHTML = ''
                displayArea.classList.add(states.class_hidden)

                states.spinner.classList.remove(states.class_hidden);                

                setTimeout(() => {
                    states.spinner.classList.add(states.class_hidden)
                    document.body.classList.add('bg_black')
                    detailsMovies(carsId)
                }, 2000);
            }

        })

    }
    // call function
    clickCards()

    function applyCardHoverEffects() {
        const cardsMovies = document.querySelectorAll('.card_left_right');
        cardsMovies.forEach((cardElement) => {
            cardElement.addEventListener('mouseover', () => {
                cardElement.classList.remove('card_left_right');
                cardElement.classList.add('card_principal');
                
                const nameElement = cardElement.querySelector('.name_filme');
                if (nameElement) {
                    nameElement.classList.remove(states.class_hidden);
                }
                
                const areaOfTypesElement = cardElement.querySelector('.area_of_types');
                if (areaOfTypesElement) {
                    areaOfTypesElement.classList.remove(states.class_hidden);
                }


            });
            
            cardElement.addEventListener('mouseout', () => {
                cardElement.classList.add('card_left_right');
                cardElement.classList.remove('card_principal');
                
                const areaOfTypesElement = cardElement.querySelector('.area_of_types');
                if (areaOfTypesElement) {
                    areaOfTypesElement.classList.add(states.class_hidden);
                }
                
                const nameElement = cardElement.querySelector('.name_filme');
                if (nameElement) {
                    nameElement.classList.add(states.class_hidden);
                }
            });

        });

    }
    
    
}