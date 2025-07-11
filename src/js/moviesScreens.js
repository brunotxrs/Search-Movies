import { moviePoster } from './modulePosterMovie.js';
import {  searchMovie  } from './moduleSearchMovies.js'
import {  trendingNow  } from './moduleTrendingNow.js';

export function initializePageMovies(){
    trendingNow()
    moviePoster()
    searchMovie()
}