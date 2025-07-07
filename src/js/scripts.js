import {  states  } from './states.js';

// criar um module e export essa função
function loading(){
    states.login.classList.remove(states.class_hidden);

    if(states.i_password){
        states.i_password.addEventListener('mouseenter', () => {
            states.ico_close.classList.add(states.class_hidden);
            states.ico_open.classList.remove(states.class_hidden);
            
        })

        states.i_password.addEventListener('mouseout', () => {
            states.ico_close.classList.remove(states.class_hidden);
            states.ico_open.classList.add(states.class_hidden);
            
        })


        states.ico_off.addEventListener('click', () => {
            states.ico_off.classList.add(states.class_hidden);
            states.ico_on.classList.remove(states.class_hidden);

            const type = states.i_password.getAttribute('type') === 'password' ? 'text' : 'password';

            states.i_password.setAttribute('type', type);
        })

        states.ico_on.addEventListener('click', () => {
            states.ico_on.classList.add(states.class_hidden);
            states.ico_off.classList.remove(states.class_hidden);

            const type = states.i_password.getAttribute('type') === 'password' ? 'text' : 'password';
            states.i_password.setAttribute('type', type);
        })
    }

    states.i_button_login.addEventListener('click', () => {
        
        if(states.i_name.value.trim() === ''){
            states.msg_error.innerHTML = ''
            states.msg_error.textContent = 'O campo Username esta em branco.'
            setTimeout(() => {
                states.msg_error.innerHTML = ''
            }, 2000)
            
        }else if(states.i_password.value.trim() === ''){
            states.msg_error.innerHTML = ''
            states.msg_error.textContent = 'O campo Password esta em branco.'
            setTimeout(() => {
                states.msg_error.innerHTML = ''
            }, 2000)

        } else {
            states.login.classList.add(states.class_hidden)
            states.spinner.classList.remove(states.class_hidden)
             setTimeout(() => {
                states.spinner.classList.add(states.class_hidden)
            }, 2000)
        }
    
   
    })    

}


// criar um module e export e criar uma função pra ser exportada
states.button_preload.addEventListener('click', () => {

    states.preload.classList.add(states.class_hidden)
    states.spinner.classList.remove(states.class_hidden);
    setTimeout(() => {
        states.spinner.classList.add(states.class_hidden);
        loading()
    }, 1000)
})
    