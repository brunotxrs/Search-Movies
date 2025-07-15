import {  states  } from './states.js';

const nameUser = localStorage.getItem('name_Actual');

export function structureOfPages() {
    states.spinner.classList.remove(states.class_hidden)
    
    setTimeout(() => {
        states.spinner.classList.add(states.class_hidden)
        
        states.display_area.classList.remove(states.class_hidden);
    },1000)
    // add all elements of API

    const cardsHtml = `

        <div class="container_display_area">

            <div class="box_search" id="search_box">

                <div class="box_user">
                    <div class="box_img">
                        <figure>
                            <img src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png">
                        </figure>

                        <p>Olá! <span id="name_user">${nameUser}</span></p>
                    </div>

                    <svg class="bell" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>

                </div>

                <label for="i_search" class="label">
                    <svg class="ico_search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>

                    <input type="text" placeholder="Search" autocomplete="off" id="input_search" class="input">
                </label>
            </div>

            <div class="cards" id="container_cards">
                <div class="coming_soon">
                    <span class="sub_title">Em breve</span>

                    <figure class="poster" id="i_p">
                    </figure>
                </div>
                
                <div class="types_type">                   
                </div>

                <div class="trending_now">
                    <span class="sub_title">Tendências atuais</span>
                    <button class="scroll-button left-arrow">←</button>
                    <div class="box_trending_now" id="cards"></div>
                    <button class="scroll-button right-arrow">→</button>
                </div>

            </div>

            <div class="selection_types" id='types_selections'>
                <span id="movies_selection">Filmes</span>
                <span id="series_selection">Series</span>
                <span id="my_list">Minha Lista</span>
            </div>

        </div>
    
    `

    return states.display_area.innerHTML += cardsHtml

}