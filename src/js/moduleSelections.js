const movieSelection = document.getElementById('movies_selection');
const tvSelection = document.getElementById('series_selection');


function selection(){

    movieSelection.addEventListener('click', () => {
        

        console.log('debug click em movie')
        
    })

    tvSelection.addEventListener('click', () => {
        

        console.log('debug click em tv')

        
    })


}

export {  selection }