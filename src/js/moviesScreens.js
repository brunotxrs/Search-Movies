import { moviePoster } from './modulePosterMovie.js';
import {  searchMovie  } from './moduleSearchMovies.js';
import {  trendingNow  } from './moduleTrendingNow.js';
import {  typesGenres  } from './moduleGenresTypes.js';
import {  selection  } from './moduleSelections.js'

export function initializePageMovies(){
    selection();
    trendingNow();
    moviePoster();
    typesGenres();
    searchMovie();
};