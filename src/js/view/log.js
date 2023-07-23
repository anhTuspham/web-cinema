const body = document.querySelector('body')
const logContainer = document.querySelector('.log-container')
const showPasswordCheckBoxSignIn = document.getElementById('show-password-checkbox-sign-in');
const showPasswordCheckBoxSignUp = document.getElementById('show-password-checkbox-sign-up')
const myPasswordSignIn = document.getElementById('password-sign-in');
const myPasswordSignUp = document.getElementById('password-sign-up');
const loginBtn = document.getElementById('login-btn');
const closeLogForm = document.querySelector('.close-log-detail-btn');
const panelLeft = document.querySelector('.panel-left')
const panelRight = document.querySelector('.panel-right')
const signInDetail = document.querySelector('.sign-in-detail')
const signUpDetail = document.querySelector('.sign-up-detail')
let currentSignIn = true;
// body.classList.add('log-form-active')
const overlayLogDetail = document.querySelector('.overlay-log-detail-container')

const switchLogForms = () =>{
    if(currentSignIn) {
        signInDetail.style.display = 'flex';
        signUpDetail.style.display = 'none';
        panelRight.style.display = 'flex';
        panelLeft.style.display = 'none';
        let percentPanelValue = (((logContainer.offsetWidth / overlayLogDetail.offsetWidth) - 1 ) * 100).toFixed(2)
        let percentLogValue = (((logContainer.offsetWidth / signInDetail.offsetWidth) - 1) * 100).toFixed(2)
        document.documentElement.style.setProperty('--percent-panel',`-${percentPanelValue}` + '%')
        document.documentElement.style.setProperty('--percent-log', `${percentLogValue}` + '%')
    }
    else{
        signInDetail.style.display = 'none';
        signUpDetail.style.display = 'flex';
        panelRight.style.display = 'none';
        panelLeft.style.display = 'flex';
        let percentPanelValue = (((logContainer.offsetWidth / overlayLogDetail.offsetWidth) - 1 ) * 100).toFixed(2)
        let percentLogValue = (((logContainer.offsetWidth / signUpDetail.offsetWidth) - 1) * 100).toFixed(2)
        document.documentElement.style.setProperty('--percent-panel',`-${percentPanelValue}` + '%')
        document.documentElement.style.setProperty('--percent-log', `${percentLogValue}` + '%')
    }
}
const style = getComputedStyle(document.documentElement);
const percentLog = style.getPropertyValue('--percent-log').trim();
console.log('Percent log' + percentLog);

const enableLogSwitching = () =>{
    const logSwitchBtns = document.querySelectorAll('.log-switch-btn');
    logSwitchBtns.forEach((logSwitchBtn) =>{
        logSwitchBtn.addEventListener('click', () =>{
            logContainer.classList.toggle('active-sign-up')
            logContainer.classList.add('active-scroll')
            currentSignIn = !currentSignIn;
            switchLogForms()
        })
    })
}

export const displayLogForm = () => {
    switchLogForms()
    enableLogSwitching()
    showPassword(showPasswordCheckBoxSignUp,myPasswordSignUp);
    showPassword(showPasswordCheckBoxSignIn,myPasswordSignIn)
}

const showPassword = function (showPasswordCheckbox,myPassword){
    showPasswordCheckbox.checked = false;
    const showPasswordClasses = document.querySelectorAll('.show-password');
    showPasswordClasses.forEach((showPasswordClass) =>{
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
    })
}
export const toggleLoginForm = () =>{
    loginBtn.addEventListener('click',() =>{
        body.classList.add('log-form-active')
        logContainer.classList.remove('active-sign-up')
        currentSignIn = true;
        displaySwitchLogForms()
    })
    closeLogForm.addEventListener('click', () =>{
        body.classList.remove('log-form-active')
        logContainer.classList.remove('active-scroll')
    })
}
// window.addEventListener('resize',() =>{
//     body.classList.remove('log-form-active')
//     logContainer.classList.remove('active-sign-up')
//     logContainer.classList.remove('active-scroll')
//     currentSignIn = true;
//     switchLogForms()
// })


