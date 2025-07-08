import { states } from "./states.js";
import {  login  } from './login.js';
import  { registrationPasswordRecovery  } from './registration_password_recovery.js';


function preLoadHtml(){
    const htmlPreLoad = `
        <div class="container_preload">
            <figure>
                <img src="./src/assets/imgs/Search-movies-logo.svg" alt="Search movies logo">
            </figure>

            <div class="box_btn_preload box_styles_btn">
            <button>
                    <span id="button">LOGIN</span>
                </button>
                <p>Primeiro acesso? <span id="register">Registre-se</span></p>
            </div>
        </div>
    `
    
    return states.preload.innerHTML += htmlPreLoad;

}

function cleanPreloadAndAddSpinner(){
    states.preload.classList.add(states.class_hidden);
    states.preload.innerHTML = '';
    states.spinner.classList.remove(states.class_hidden);

}

async function buttonPreload() {
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        
        cleanPreloadAndAddSpinner()

        setTimeout(() => {
            states.spinner.classList.add(states.class_hidden);
            login()
        }, 1000)


    })
}

function registerPreload(){
    const register = document.getElementById('register');

    register.addEventListener('click', () => {
        cleanPreloadAndAddSpinner();
        
        setTimeout(() => {
            states.spinner.classList.add(states.class_hidden);
            registrationPasswordRecovery('register')
            
        }, 1000)
    })
}


export function preload(){
    preLoadHtml();
    buttonPreload();
    registerPreload()

}
