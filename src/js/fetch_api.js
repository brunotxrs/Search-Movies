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

// here for u
// se the classification of movie
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

// function for search by genres
async function fetchMoviesByGenre(genreId, page = 1) {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=pt-BR&sort_by=popularity.desc&page=${page}`;

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const data = await response.json()
        return data

    } catch (error) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
}

// -------------------------------------------
const BASE_URL = `https://api.themoviedb.org/3/`
async function fetchMovieDetails(movieId, language = 'pt-BR'){
    
    const urlDetails = `${BASE_URL}/movie/${movieId}?language=${language}&append_to_response=credits,release_dates`;

    try {
        const response = await fetch(urlDetails, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        const brCertification = data.release_dates?.results.find(
            result => result.iso_3166_1 === 'BR'
        )?.release_dates.find(
            date => date.certification !== '' && date.type === 3
        )?.certification || '';

        data.brazil_certification = brCertification; // Adiciona ao objeto retornado

        return data; // Retorna o objeto completo do filme


        
    } catch (error) {
        console.error(`Erro ao buscar detalhes do filme ${movieId}:`, error);
        throw error;
    }
}

// Função para buscar TRAILERS DE FILMES
async function fetchMovieTrailers(movieId, language = 'pt-BR') {
    try {
        // A URL agora NÃO precisa do '?api_key=' pois a autenticação é via 'options'
        const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?language=${language}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filtra para encontrar o trailer oficial do YouTube
        const trailers = data.results.filter(video => 
            video.type === 'Trailer' && video.site === 'YouTube'
        );

        // Retorna o primeiro trailer encontrado, ou null se não houver
        return trailers.length > 0 ? trailers[0] : null; 

    } catch (error) {
        console.error('Erro ao buscar trailers do filme:', error);
        return null;
    }
}


// -------------------------------------
//             fetch Tv
//-------------------------------------- 
async function fetchApiTv() {
    const urlApi = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc`
   
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

const dataJsonTv = (async () => {
    try {
        const data = await fetchApiTv()
        
        return data
        
    } catch (error) {
        console.error('Error fetching data from API', error);
        return null; 
    }
})();
// -------------------------------------
// ----------------------------------

// here for use genre of TV
async function fetchGenreListTv(){
    const genreListUrl = 'https://api.themoviedb.org/3/genre/tv/list?language=pt-BR';

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

const tvDataGenreListJson = (async () => {
    try {
        const data = await fetchGenreListTv()
        return data
        
    } catch (error) {
        console.error('Error fetching data from API', error);
        return null; 
    }
})()

async function fetchTvCertification(tvId, countryCode = 'BR'){

    const urlClassification = `https://api.themoviedb.org/3/tv/${tvId}/content_ratings`;

    try {
        const response = await fetch(urlClassification, options);

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
        }

        const data = await response.json()
      
        // Lógica para extrair a classificação específica para o Brasil
       const brResult = data.results.find(result => result.iso_3166_1 === countryCode);
        if (brResult) { // Para TV, a certificação está diretamente na propriedade 'rating'
            return brResult.rating || ''; // Retorna a classificação ou ''
        }
        return ''; // Se não encontrar para o país
        
    } catch (error) {
        console.error(`Error fetching certification for TV show ${tvId}:`, error);
        return 'Erro ao carregar'; // Retorna um valor de erro
    }
}

async function fetchTvByGenre(genreId, page = 1) {
    const url = `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&language=pt-BR&sort_by=popularity.desc&page=${page}`;

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error(`Error fetching TV shows by genre ${genreId}:`, error);
        throw error;
    }
}

async function fetchTvDetails(tvId, language = 'pt-BR'){
    
    const urlDetails = `${BASE_URL}/tv/${tvId}?language=${language}&append_to_response=credits,content_ratings`;

    try {
        const response = await fetch(urlDetails, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        const brCertification = data.content_ratings?.results.find(
            result => result.iso_3166_1 === 'BR'
        )?.rating || '';

        data.brazil_certification = brCertification; // Adiciona ao objeto retornado

        return data; // Retorna o objeto completo do filme


        
    } catch (error) {
        console.error(`Erro ao buscar detalhes do tv ${tvId}:`, error);
        throw error;
    }
}

async function searchTv(query, page = 1) {
    const urlSearch = `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}&include_adult=false&language=pt-BR&page=${page}`;

    try {
        const response = await fetch(urlSearch, options);

        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const data  = await response.json()
        return data

    } catch (error) {
        console.error(`Error searching TVs for "${query}":`, error);
        throw error;
    }

}

// -------------------------------------
const jsonData = dataJson;
const genresPromise = dataGenreListJson;

const jsonDataTv = dataJsonTv
const genrePromiseTv = tvDataGenreListJson
export {
    jsonData,
    genresPromise,
    fetchMovieCertification,
    searchMovies,
    fetchMoviesByGenre,
    fetchMovieDetails,
    fetchMovieTrailers,


    // ---------
    //    TV
    // ---------
    jsonDataTv,
    genrePromiseTv,
    fetchTvCertification,
    fetchTvByGenre,
    fetchTvDetails,
    searchTv

}