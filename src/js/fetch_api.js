const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU2ZTQ3ZGY0MGQ4Yjc3YjdhNjM5OGE0ZjQyNjk4MyIsIm5iZiI6MTc1MTg0MjA1OC42OTcsInN1YiI6IjY4NmFmZDBhMWUyZDQwMGZlMDcwMmIwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o91AsKOBQsGrDm2HiEcCevOOYTMw6uazN3QDDmjqOnY'
  }
};

// here for use data of posters

async function fetchApi() {
    const urlApi = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc`
   
    try {
        const response = await fetch(urlApi, options);

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
        }

        const data = await response.json();
        
        return data;
        
    } catch (error) {
        console.error('Error fetching data from API', error);
        throw error;
    }
}

const dataJson = (async () => {
    try {
        const data = await fetchApi()
        
        return data
        
    } catch (error) {
        console.error('Error fetching data from API', error);
        return null; 
    }
})();

// ----------------------------------

// here for use genre of movies
async function fetchGenreList(){
    const genreListUrl = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR';

    try {
        const response = await fetch(genreListUrl, options);

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
        }

        const data = await response.json();
        
        return data;
        
    } catch (error) {
        console.error('Error fetching data from API', error);
        throw error;
    }
}

const dataGenreListJson = (async () => {
    try {
        const data = await fetchGenreList()
        return data
        
    } catch (error) {
        console.error('Error fetching data from API', error);
        return null; 
    }
})()
 
// -------------------------------------

// here for use the classification of movie
async function fetchMovieCertification(movieId, countryCode = 'BR'){

    const urlClassification = `https://api.themoviedb.org/3/movie/${movieId}/release_dates`;

    try {
        const response = await fetch(urlClassification, options);

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
        }

        const data = await response.json()
      
        // Lógica para extrair a classificação específica para o Brasil
        const brResult = data.results.find(result => result.iso_3166_1 === countryCode);
        if (brResult && brResult.release_dates.length > 0) {
            const certification = brResult.release_dates.find(
                date => date.certification !== '' && date.type === 3 // Tipo 3 é comum para classificação principal
            )?.certification;
            return certification || ''; // Retorna a classificação ou ''
        }
        return ''; // Se não encontrar para o país
        
    } catch (error) {
        console.error(`Error fetching classification for movie ${movieId}:`, error);
        return 'Erro ao carregar'; // Retorna um valor de erro
    }
}

// -----------------------------------------------

// function of fetch for search movie
async function searchMovies(query, page = 1) {
    const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=pt-BR&page=${page}`;

    try {
        const response = await fetch(urlSearch, options);

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const data  = await response.json()
        return data

    } catch (error) {
        console.error(`Error searching movies for "${query}":`, error);
        throw error;
    }

}


// -------------------------------------
const genresPromise = dataGenreListJson;
const jsonData = dataJson;

export {
    jsonData,
    genresPromise,
    fetchMovieCertification,
    searchMovies
}