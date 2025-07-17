import {  fetchTvTrailers  } from './fetch_api.js';

export async function trailerTV(idTv) {
    


    try {
        const trailerTv = await fetchTvTrailers(idTv, 'pt-BR');
        const boxMovie = document.querySelector('.box-img');

        if (trailerTv) {
            
            // A 'key' ID do vídeo no YouTube.
            const videoKey = trailerTv.key;
            // const videoName = trailerTv.name;
            // console.log for debug 
            // console.log('Trailer encontrado! Nome:', videoName);
            // console.log('Chave do vídeo no YouTube (key):', videoKey);

            // para construir a URL do YouTube para incorporar (iframe)
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`; // autoplay para iniciar automaticamente, rel=0 para não mostrar vídeos relacionados de outros canais
            // const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoKey}`;



            // limpando a imagem
            const imageMovie = document.getElementById('imageMovie')
            if (imageMovie) {
                imageMovie.style.display = 'none';
            }

            if (boxMovie) {
                // boxMovie.innerHTML = '';
                const iframe = document.createElement('iframe');
                iframe.src = youtubeEmbedUrl;
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("allow", "autoplay; encrypted-media");
                
                boxMovie.appendChild(iframe);
            } else {
                console.warn("Elemento '.box-img' não encontrado para exibir o trailer da série.");
            }

        } else {
            // for apply message for no have trailers 
            if(trailerTv === null){
    
                const pInfo = document.createElement('p');
                pInfo.textContent = 'Sorry no have Trailers';
                pInfo.classList.add('info_no_trailers')
                boxMovie.appendChild(pInfo)
    
            } else {
                console.warn("Elemento '.box-img' não encontrado para exibir mensagem de 'sem trailers' para a série.");
            }

        }
        
        
    } catch (error) {
        console.error('Erro ao buscar trailers de Séries de TV:', error)

    }

}

export async function posterTrailerTV(idTv) {
    
    try {
        const trailerTv = await fetchTvTrailers(idTv, 'pt-BR');
        const posterTrailer = document.querySelector('.coming_soon');

        if (trailerTv) {
            
            // A 'key' ID do vídeo no YouTube.
            const videoKey = trailerTv.key;
            // const videoName = trailerTv.name;
            // console.log for debug 
            // console.log('Trailer encontrado! Nome:', videoName);
            // console.log('Chave do vídeo no YouTube (key):', videoKey);

            // para construir a URL do YouTube para incorporar (iframe)
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`; // autoplay para iniciar automaticamente, rel=0 para não mostrar vídeos relacionados de outros canais
            // const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoKey}`;



            // limpando a imagem
            const imageMovie = document.getElementById('i_p')
            if (imageMovie) {
                imageMovie.style.display = 'none';
            }

            if (posterTrailer) {
                // posterTrailer.innerHTML = '';
                const iframe = document.createElement('iframe');
                iframe.src = youtubeEmbedUrl;
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("allow", "autoplay; encrypted-media");
                
                posterTrailer.appendChild(iframe);
            } else {
                console.warn("Elemento '.box-img' não encontrado para exibir o trailer da série.");
            }

        } else {
            // for apply message for no have trailers 
            if(trailerTv === null){
    
                const pInfo = document.createElement('p');
                pInfo.textContent = 'Sorry no have Trailers';
                pInfo.classList.add('info_no_trailers')
                posterTrailer.appendChild(pInfo)
    
            } else {
                console.warn("Elemento '.box-img' não encontrado para exibir mensagem de 'sem trailers' para a série.");
            }

        }
        
        
    } catch (error) {
        console.error('Erro ao buscar trailers de Séries de TV:', error)

    }

}