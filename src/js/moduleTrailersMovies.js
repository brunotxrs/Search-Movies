import { fetchMovieTrailers  } from './fetch_api.js';



export async function trailersMovies(idMovies) {
    
    try {
        const trailerMovie = await fetchMovieTrailers(idMovies, 'pt-BR');
        const boxMovie = document.querySelector('.box-img');
        
        if (trailerMovie) {
            
            // A 'key' ID do vídeo no YouTube.
            const videoKey = trailerMovie.key;
            // const videoName = trailerMovie.name; 

            // para construir a URL do YouTube para incorporar (iframe)
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`; // autoplay para iniciar automaticamente, rel=0 para não mostrar vídeos relacionados de outros canais
            // const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoKey}`;

            // limpando a imagem
            const imageMovie = document.getElementById('imageMovie')
            imageMovie.style.display = 'none'

            if (boxMovie) {
                const iframe = document.createElement('iframe');
                iframe.src = ''
                iframe.src = youtubeEmbedUrl;
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("allow", "autoplay; encrypted-media");
                iframe.setAttribute('id', 'first_iframe_movie')
                
                boxMovie.appendChild(iframe);
            }

        } 

        // for apply message for no have trailers 
        if(trailerMovie === null){

            const pInfo = document.createElement('p');
            pInfo.textContent = 'Sorry no have Trailers';
            pInfo.classList.add('info_no_trailers')
            boxMovie.appendChild(pInfo)

        }


    } catch (error) {
        console.error('Erro ao buscar trailers do filme:', error);
    }
}

export async function trailersForPoster(idMovies) {
    
    try {
        const trailerMovie = await fetchMovieTrailers(idMovies, 'pt-BR');
        const posterTrailer = document.getElementById('area_of_trailers')
        
        
        if (trailerMovie) {
            
            // A 'key' ID do vídeo no YouTube.
            const videoKey = trailerMovie.key;
            // const videoName = trailerMovie.name; 

            // para construir a URL do YouTube para incorporar (iframe)
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`; // autoplay para iniciar automaticamente, rel=0 para não mostrar vídeos relacionados de outros canais
            // const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoKey}`;

            // limpando a imagem
            const imageMovie = document.getElementById('i_p')
            imageMovie.style.display = 'none'

            if(posterTrailer){
                posterTrailer.innerHTML = ''
                const iframe = document.createElement('iframe');
                iframe.src = ''
                iframe.src = youtubeEmbedUrl;
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("allow", "autoplay; encrypted-media");
                
                posterTrailer.appendChild(iframe);

            }

            

        } 

        // for apply message for no have trailers 
        if(trailerMovie === null){

            const pInfo = document.createElement('p');
            pInfo.textContent = 'Sorry no have Trailers';
            pInfo.classList.add('info_no_trailers')
            posterTrailer.appendChild(pInfo)

        }


    } catch (error) {
        console.error('Erro ao buscar trailers do filme:', error);
    }
}

