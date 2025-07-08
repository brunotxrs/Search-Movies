import {  states  } from './states.js';

var nomeAtual = '';


function login(){
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
        const minLength = 3;
        const valueInputName = states.i_name.value.trim();
        const valueInputPassword = states.i_password.value.trim();

        function cleanMsg(i){
            setTimeout(() => {
                i.innerHTML = ''
            }, 2000)
        }

        if(states.i_name.value.trim() === ''){
            states.msg_error.textContent = 'O campo Username esta em branco.'
            cleanMsg(states.msg_error);
            
        } else if (valueInputName.length <= minLength){
            states.msg_error.textContent = `O nome deve conter mais de ${minLength} caracteres`
            cleanMsg(states.msg_error);

        } else if(states.i_password.value.trim() === ''){
            states.msg_error.textContent = 'O campo Password esta em branco.'
            cleanMsg(states.msg_error);

        } else if(valueInputPassword.length <= minLength){
            states.msg_error.textContent = `O Password deve conter mais de ${minLength} caracteres`
            cleanMsg(states.msg_error);

        } else {
            states.login.classList.add(states.class_hidden);
            states.spinner.classList.remove(states.class_hidden);

            setTimeout(() => {
                
                states.spinner.classList.add(states.class_hidden);

                nomeAtual = states.i_name.value.trim();
                if(nomeAtual != ''){
                    localStorage.getItem('Name Test', nomeAtual);
                }
                // chamada aqui do proximo componente
                console.log('chamada aqui do proximo componente')                
                
            }, 2000)

        }
    
   
    })    

}


export {  nomeAtual, login }; 