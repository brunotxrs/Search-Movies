import {  tvModulePoster  } from './tvModulePoster.js';
import {  selection  } from './moduleSelections.js';
import {  trendingNowTv  } from './tvModuleTrendingNow.js';
import {  typesGenres  } from './tvModuleGenres.js';
import {  searchTVs  } from './tvModuleSearch.js';


export function initializePageTv() {
    // export all of TV
    selection();
    tvModulePoster();
    trendingNowTv();
    typesGenres();
    searchTVs();

}