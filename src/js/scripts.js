import {  states  } from './states.js';

states.button_preload.addEventListener('click', () => {
    console.log("debug")
    states.preload.classList.add(states.class_hidden)
    states.spinner.classList.remove(states.class_hidden);
    setTimeout(() => {
        states.spinner.classList.add(states.class_hidden);
    }, 2000)
})
    