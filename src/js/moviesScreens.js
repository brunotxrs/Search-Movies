import { moviePoster } from './modulePosterMovie.js';
import {  searchMovie  } from './moduleSearchMovies.js';
import {  trendingNow  } from './moduleTrendingNow.js';
import {  typesGenres  } from './moduleGenresTypes.js';

export function initializePageMovies(){
    trendingNow()
    moviePoster()
    typesGenres()
    searchMovie()
}