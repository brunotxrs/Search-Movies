import { states } from "./states.js";
import {  preload  } from './preload.js';

const moviesPage = './src/html/movies.html'

function structureHtml(i){

    const htmlRegistrationPasswordRecovery = `

        <div class="containers">
            <h1 class="title">${i}</h1>

            <form>
                <span class="msg_error"></span>

                <div class="box_form" id="form_box">

                    <label for="rpr_name" class="label" id="label_name">
                        <svg class="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                        <input type="text" placeholder="Username" id="rpr_name" autocomplete="off" autofocus class="input">
                    </label>

                    <label for="rpr_email" class="label">
                        <svg class="email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        <input type="email" name="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="E-mail" id="rpr_email" class="input">
                    </label>
                </div>


                <label for="rpr_password_first" class="label" id="first_label">
                   
                    <svg class="close" id="rpr_first_ico_close" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>

                    <input type="password" placeholder="Password" id="rpr_password_first" autocomplete="off" class="input">
                   
                    <svg class="i_off" id="rpr_first_ico_off" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
                   
                    <svg class="i_on hidden" id="rpr_first_ico_on" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                </label>

                <label for="rpr_password_second" class="label" id="second_label">
                    <svg class="close" id="rpr_second_ico_close" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>

                    <input type="password" placeholder="Confirm Password" id="rpr_password_second" autocomplete="off" class="input">
            
                    <svg class="i_off" id="rpr_second_ico_off" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
            
                    <svg class="i_on hidden" id="rpr_second_ico_on" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                </label>

            </form>

            <div class="box_styles_btn">
                <button>
                    <span id="i_button_rpr">ENTER</span>
                </button>
                <p id="info">Possui uma conta? <span id="i_btn">Acesse aqui</span></p>
            </div>
        </div>
    
    `

   return states.registration_password_recovery.innerHTML = htmlRegistrationPasswordRecovery

}

function register(r){
    

    // criar logica para autenticação dos dados do input

    if(r === 'register'){
        const title = 'cadastro'
        structureHtml(title)
        
        const nameUser = document.getElementById('rpr_name')
        const emailUser = document.getElementById('rpr_email')
        const i_password = document.getElementById('rpr_password_first');
        const ico_off = document.getElementById('rpr_first_ico_off');
        const ico_on = document.getElementById('rpr_first_ico_on');

        const passwordSecond = document.getElementById('rpr_password_second');
        const icoOffSecond = document.getElementById('rpr_second_ico_off');
        const icoOnSecond = document.getElementById('rpr_second_ico_on');
        const i_button_rpr = document.getElementById('i_button_rpr')
        
        
        if (!i_password || !passwordSecond || !i_button_rpr || !nameUser || !emailUser) {
            console.error("Erro: Um ou mais elementos do formulário não foram encontrados no DOM após a renderização.");
            return; // Saia da função se os elementos essenciais não forem encontrados
        }
        
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        
        // here  call area of movies
        if(i_button_rpr){
            i_button_rpr.addEventListener('click', (event) => {
                event.preventDefault();
                const minLength = 3;
                const valuePasswordFist = i_password.value.trim()
                const valuePasswordSecond = passwordSecond.value.trim()
                const valueNameUser = nameUser.value.trim()
                const valueEmailUser = emailUser.value.trim()

                const msgError = document.querySelector('.msg_error');

                if(valueNameUser === ''){
                    if(msgError){
                        msgError.textContent = 'Campo UserName vazio'

                        setTimeout(() => {
                            msgError.textContent = ''
                        }, 2000);

                    }
                } else if(valueEmailUser === ''){
                    if(msgError){
                        msgError.textContent = 'Campo E-mail vazio'

                        setTimeout(() => {
                            msgError.textContent = ''
                        }, 2000);

                    }
                } else if(valuePasswordFist === ''){
                    if(msgError){
                        msgError.textContent = 'O primeiro campo password vazio'

                        setTimeout(() => {
                            msgError.textContent = ''
                        }, 2000);

                    }
                } else if(valuePasswordSecond === ''){
                    if(msgError){
                        msgError.textContent = 'O segundo campo password vazio'

                        setTimeout(() => {
                            msgError.textContent = ''
                        }, 2000);

                    }
                } else if(valuePasswordFist.length < minLength && valuePasswordSecond.length < minLength){
                    if(msgError){
                        msgError.textContent = 'A senha deve ter mais de 3 caracteres'

                        setTimeout(() => {
                            msgError.textContent = ''
                        }, 2000);

                    }
                } else if(valuePasswordFist !== valuePasswordSecond){
                    if(msgError){
                        msgError.textContent = 'As senhas sao diferentes'

                        setTimeout(() => {
                            msgError.textContent = ''
                        }, 2000);

                    }
                } else if(!emailRegex.test(valueEmailUser)){
                    if(msgError){
                        msgError.textContent = 'Por favor, insira um e-mail válido (ex: nome@dominio.com).'

                        setTimeout(() => {
                            msgError.textContent = ''
                        }, 2000);

                    }
                } else {
                    window.location.href = moviesPage;
                    localStorage.setItem('nameUser', valueNameUser)
                    localStorage.setItem('password', valuePasswordFist)
                }
            })

        }

        
        ico_off.addEventListener('click', ()=> {
            ico_off.classList.add(states.class_hidden)
            ico_on.classList.remove(states.class_hidden)
            const type = i_password.getAttribute('type') === 'password' ? 'text' : 'password';

            i_password.setAttribute('type', type);
        })

        ico_on.addEventListener('click', ()=> {
            ico_on.classList.add(states.class_hidden)
            ico_off.classList.remove(states.class_hidden)
            const type = i_password.getAttribute('type') === 'password' ? 'text' : 'password';

            i_password.setAttribute('type', type);
        })


        icoOffSecond.addEventListener('click', ()=> {
            icoOffSecond.classList.add(states.class_hidden)
            icoOnSecond.classList.remove(states.class_hidden)
            const type = passwordSecond.getAttribute('type') === 'password' ? 'text' : 'password';

            passwordSecond.setAttribute('type', type);
        })

        icoOnSecond.addEventListener('click', ()=> {
            icoOnSecond.classList.add(states.class_hidden)
            icoOffSecond.classList.remove(states.class_hidden)
            const type = passwordSecond.getAttribute('type') === 'password' ? 'text' : 'password';

            passwordSecond.setAttribute('type', type);
        })

        
        


        // go page login
        const btnLogin = document.getElementById('i_btn');   
        btnLogin.addEventListener('click', () => {

            states.registration_password_recovery.innerHTML = ''
            states.spinner.classList.remove(states.class_hidden)
            states.registration_password_recovery.classList.add(states.class_hidden)
    
            setTimeout(() => {
                states.spinner.classList.add(states.class_hidden)
                states.preload.classList.remove(states.class_hidden)
                preload()
            }, 2000)
        })


    
        
    }
}

function passwordRecover(p){
    if(p === 'recover password'){
        const title = 'recuperar senha'
        structureHtml(title)
        const statesPasswords = {
            label_name: document.getElementById('label_name'),
            box_form: document.getElementById('form_box'),
            fist: document.getElementById('first_label'),
            second: document.getElementById('second_label'),
            i_button_rpr: document.getElementById('i_button_rpr'),
            info: document.getElementById('info')

        }

        statesPasswords.label_name.style.display = 'none';
        statesPasswords.fist.style.display = 'none';
        statesPasswords.second.style.display = 'none';
        statesPasswords.box_form.style.flexDirection = 'column';
        statesPasswords.i_button_rpr.textContent = 'enviar'
        statesPasswords.info.style.display = 'none'
  
        statesPasswords.i_button_rpr.addEventListener('click', () => {
            states.registration_password_recovery.innerHTML = ''
            states.spinner.classList.remove(states.class_hidden)
            states.registration_password_recovery.classList.add(states.class_hidden)
    
            setTimeout(() => {
                states.spinner.classList.add(states.class_hidden)
                states.preload.classList.remove(states.class_hidden)
                preload()
            }, 2000)
        })
        
    }

}


export function registrationPasswordRecovery(element){
    states.registration_password_recovery.classList.remove('hidden');
    register(element);
    passwordRecover(element);

}