const body = document.querySelector('body')
const myPassword = document.getElementById('password')
const showPasswordCheckbox = document.getElementById('show-password-checkbox')

const loginBtn = document.getElementById('login-btn');
const closeLogForm = document.querySelector('.close-log-detail-btn');

export const showPassword = function (){
    showPasswordCheckbox.checked = !showPasswordCheckbox.checked
    showPasswordCheckbox.checked = false;

    window.addEventListener('click',e =>{
        if(e.target.closest('.show-password')){
            if(e.target.classList.contains('show-password')){
                showPasswordCheckbox.checked = !showPasswordCheckbox.checked
            }
            if(showPasswordCheckbox.checked){
                myPassword.type = 'text';
            }
            else myPassword.type = 'password'
        }
    })
}
body.classList.add('log-form-active')

export const toggleLoginForm = () =>{
    loginBtn.addEventListener('click',() =>{
        body.classList.add('log-form-active')
    })
    closeLogForm.addEventListener('click', () =>{
        body.classList.remove('log-form-active')
    })
}

