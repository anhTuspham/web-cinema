const overlay = document.querySelector('.overlay')
const container = document.querySelector('.container')
const movieSingle = document.querySelectorAll('.movie-single');
const body = document.querySelector('body')
let a = 0

function loadMovieDetail(){
    movieSingle.forEach(movie => {
        movie.addEventListener('click',() =>{
            overlay.classList.add('overlay-active');
            container.classList.add('overlay-active');
            body.classList.add('overlay-active');
            a = 1;
            console.log(a)
            // body.style.cursor = 'move'
            // container.style.display = 'none'
        })
    })
}
window.addEventListener('click',e =>{
    if(a === 1 && e.target.closest('.overlay')){
        overlay.classList.remove('overlay-active');
        container.classList.remove('overlay-active');
        body.classList.remove('overlay-active')
        console.log('11')
        a = 0;
        // container.style.display = 'block'
    }
})

window.addEventListener('click',e =>{
    if(!e.target.closest('.overlay')){
        console.log('111');
    }
})
loadMovieDetail();