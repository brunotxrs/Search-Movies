import {  states  } from './states.js';
import  { registrationPasswordRecovery  } from './registration_password_recovery.js';


function loginHtml(){
    const htmlLogin = `
        <div class="containers">
            <h1 class="title">LOGIN</h1>
            <figure class="figure">
                <img src="./src/assets/imgs/login-password-image.gif" alt="image of login and password">
            </figure>

            <form>
                <span class="msg_error"></span>
                <label for="i_name" class="label">
                    <svg class="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                    <input type="text" placeholder="Username" id="i_name" autocomplete="off" autofocus class="input">
                </label>

                <label for="i_password" class="label">
                    
                    <svg class="close" id="ico_close" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>


                    <svg class="open hidden" id="ico_open" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M240-640h360v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640Zm0 480h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z"/></svg>
                    
                    <input type="password" placeholder="Password" id="i_password" autocomplete="off" class="input">
                    
                    <svg class="i_off" id="ico_off" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
                    
                    <svg class="i_on hidden" id="ico_on" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                </label>
            </form>

            <div class="box_btn_login box_styles_btn">
                <button>
                    <span id="i_button_login">ENTER</span>
                </button>
                <p>Esqueceu a senha? <span id="recover_password">Recuperar senha</span></p>
            </div>


        </div>
    
    `

    return states.login.innerHTML += htmlLogin;
}

function recoverPassword(){
    const btnRecoverPassword = document.getElementById('recover_password');

    btnRecoverPassword.addEventListener('click', () => {
        cleanLoginHtmlAndAddSpinner();

        setTimeout(() => {
            states.spinner.classList.add(states.class_hidden);
            registrationPasswordRecovery('recover password');

        })

    })

}

function cleanMsg(i){
    setTimeout(() => {
        i.innerHTML = ''
    }, 2000)
}

function cleanLoginHtmlAndAddSpinner(){
    states.login.classList.add(states.class_hidden);
    states.login.innerHTML = '';
    states.spinner.classList.remove(states.class_hidden);
}

function pageLogin(){
    states.login.classList.remove(states.class_hidden);
    var nomeAtual = '';
    const ico_close = document.getElementById('ico_close');
    const ico_open = document.getElementById('ico_open');
    const i_name = document.getElementById('i_name');
    const i_password = document.getElementById('i_password');
    const ico_off = document.getElementById('ico_off');
    const ico_on = document.getElementById('ico_on');
    const i_button_login = document.getElementById('i_button_login');
    const msg_error =document.querySelector('.msg_error');

    if(i_password){
        i_password.addEventListener('mouseenter', () => {
            ico_close.classList.add(states.class_hidden);
            ico_open.classList.remove(states.class_hidden);
            
        })

        i_password.addEventListener('mouseout', () => {
            ico_close.classList.remove(states.class_hidden);
            ico_open.classList.add(states.class_hidden);
            
        })

        ico_off.addEventListener('click', () => {
            ico_off.classList.add(states.class_hidden);
            ico_on.classList.remove(states.class_hidden);

            const type = i_password.getAttribute('type') === 'password' ? 'text' : 'password';

            i_password.setAttribute('type', type);
        })

        ico_on.addEventListener('click', () => {
            ico_on.classList.add(states.class_hidden);
            ico_off.classList.remove(states.class_hidden);

            const type = i_password.getAttribute('type') === 'password' ? 'text' : 'password';
            i_password.setAttribute('type', type);
        })

    }

    i_button_login.addEventListener('click', () => {

        const minLength = 3;
        const valueInputName = i_name.value.trim();
        const valueInputPassword = i_password.value.trim();

        
        if(i_name.value.trim() === ''){
            msg_error.textContent = 'O campo Username esta em branco.'
            cleanMsg(msg_error);
            
        } else if (valueInputName.length <= minLength){
            msg_error.textContent = `O nome deve conter mais de ${minLength} caracteres`
            cleanMsg(msg_error);

        } else if(i_password.value.trim() === ''){
            msg_error.textContent = 'O campo Password esta em branco.'
            cleanMsg(msg_error);

        } else if(valueInputPassword.length <= minLength){
            msg_error.textContent = `O Password deve conter mais de ${minLength} caracteres`
            cleanMsg(msg_error);

        } else {

            // clean all elements of component login and add spinner
            cleanLoginHtmlAndAddSpinner();

            setTimeout(() => {
                states.spinner.classList.add(states.class_hidden);
                
                
                nomeAtual = i_name.value.trim();
                if(nomeAtual != ''){
                    // salvando o nome do user
                    localStorage.setItem('Name Test', nomeAtual);
                    // DEBUG
                    console.log("DEBUG", nomeAtual)
                }

                // chamada aqui do proximo componente
                console.log('chamada aqui do proximo componente')  
                

                return nomeAtual
            }, 2000)
            
        }
        
    })
    
    
}

export function login(){
    loginHtml();
    pageLogin();
    recoverPassword();
}
