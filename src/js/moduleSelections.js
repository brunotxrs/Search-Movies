const tvPage = '../html/tv.html';
const moviePage = '../html/movies.html';

function selection(){
    const movieSelection = document.getElementById('movies_selection');
    const tvSelection = document.getElementById('series_selection');
    
    movieSelection.addEventListener('click', () => {
        window.location.href = moviePage;
        
    })

    tvSelection.addEventListener('click', () => {
        window.location.href = tvPage;     
    })


}

export {  selection }