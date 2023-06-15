// const overlay = document.querySelector('.overlay')
// const container = document.querySelector('.container')
// const movieSingle = document.querySelectorAll('.movie-single');
// const body = document.querySelector('body')
//
// import {displayMovieList} from "./search-movie.js";
// let a = 0
//
// export const loadMovieDetail = function (){
//     movieSingle.forEach(movie => {
//         movie.addEventListener('click',() =>{
//             overlay.classList.add('overlay-active');
//             container.classList.add('overlay-active');
//             body.classList.add('overlay-active');
//
//         })
//     })
// }
// window.addEventListener('click',e =>{
//     if(a === 1 && e.target.closest('.overlay')){
//         overlay.classList.remove('overlay-active');
//         container.classList.remove('overlay-active');
//         body.classList.remove('overlay-active')
//         console.log('11')
//         a = 0;
//         // container.style.display = 'block'
//     }
// })
//
// loadMovieDetail();