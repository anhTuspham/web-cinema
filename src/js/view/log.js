const myPassword = document.getElementById('password')

window.addEventListener('click', (e) => {
    if(e.target.closest('.show-password')){
        if(myPassword.type === 'password'){
            myPassword.type = 'text'
            console.log(1111)
        }
        else myPassword.type = 'password'
    }
})