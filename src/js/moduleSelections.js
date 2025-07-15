const movieSelection = document.getElementById('movies_selection');
const tvSelection = document.getElementById('series_selection');

const tvPage = '../html/tv.html'
const moviePage = '../html/movies.html'

function selection(){

    movieSelection.addEventListener('click', () => {
        window.location.href = moviePage;
        console.log('debug click em movie')
        
    })

    tvSelection.addEventListener('click', () => {
        window.location.href = tvPage;        
    })


}

export {  selection }