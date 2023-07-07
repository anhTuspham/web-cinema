const body = document.querySelector('body')
const logContainer = document.querySelector('.log-container')
const myPassword = document.getElementById('password')
const showPasswordCheckbox = document.getElementById('show-password-checkbox')

const loginBtn = document.getElementById('login-btn');
const closeLogForm = document.querySelector('.close-log-detail-btn');

const panels = document.querySelectorAll('.panel')
const panelLeft = document.querySelector('.panel-left')
const panelRight = document.querySelector('.panel-right')
const signInDetail = document.querySelector('.sign-in-detail')
const signUpDetail = document.querySelector('.sign-up-detail')
body.classList.add('log-form-active')
let currentSignIn = true;

const markup =
    `<div class="log-switch-btn">
        <button type="button" class="log-form-btn">Sign Up</button>
    </div>`
panels.forEach((panel) =>{
    panel.insertAdjacentHTML('beforeend',markup)
})
const switchLogForm = () =>{
    if(currentSignIn){
        signInDetail.style.display = 'flex';
        signUpDetail.style.display = 'none';
        panelRight.style.display = 'flex';
        panelLeft.style.display = 'none'
    }
    else{
        signInDetail.style.display = 'none';
        signUpDetail.style.display = 'flex';
        panelRight.style.display = 'none';
        panelLeft.style.display = 'flex'
    }
}
export const displayLogForm = () => {
    switchLogForm()
    const logSwitchBtns = document.querySelectorAll('.log-switch-btn');
    logSwitchBtns.forEach((logSwitchBtn) =>{
        logSwitchBtn.addEventListener('click', () =>{
            logContainer.classList.toggle('active-sign-up')
            currentSignIn = !currentSignIn;
            switchLogForm()
        })
    })
}

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

export const toggleLoginForm = () =>{
    loginBtn.addEventListener('click',() =>{
        body.classList.add('log-form-active')
    })
    closeLogForm.addEventListener('click', () =>{
        body.classList.remove('log-form-active')
    })
}


