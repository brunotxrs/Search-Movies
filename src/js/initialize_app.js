import {  states  } from './states.js';
import {  login  } from './login.js';

export function initializeApp(){
    
    states.button_preload.addEventListener('click', () => {

        states.preload.classList.add(states.class_hidden)
        states.spinner.classList.remove(states.class_hidden);
        setTimeout(() => {
            states.spinner.classList.add(states.class_hidden);
            login()
        }, 1000)
    })

    
}
