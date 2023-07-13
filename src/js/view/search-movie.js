import {API_URL} from "../config.js";

const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.OMDB_API_KEY

const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const movieSearchBox = document.getElementById('search-box');
const movieSearchList = document.getElementById('search-list-container')
const movieList = document.querySelector('.movie-list');


// Load spinner
const renderSpinner = function (parentEl){
    const markup =
        `<div class="spinner"></div>`
    parentEl.innerHTML = ``;
    parentEl.insertAdjacentHTML("afterbegin",markup)
}

// Load movie data
const loadMovieData = async function(searchItem){
    try{
        let response = await fetch(`${API_URL}?apikey=${apiKey}&s=${searchItem}`);
        if(!response.ok){
            throw 'Something went wrong'
        }
        let data = await response.json();
        // console.log(data)
        if(data.Response === "True")
            displayMovieList(data.Search)
    }
    catch (err){
        console.error(err)
    }
}

// Find movie
export const searchMovieData = function (){
    movieSearchBox.addEventListener('keyup',function (){
        let searchItem = (movieSearchBox.value).trim();
        if (searchItem.length > 0){
            console.log(searchItem)
            renderSpinner(movieSearchList)
            movieSearchList.classList.remove('hidden');
            loadMovieData(searchItem);
        }
        else movieSearchList.classList.add('hidden')

    })
}
// searchMovieData()

// Display movie list

const displayMovieList = function (movie){
    let moviePoster;
    movieSearchList.innerHTML = '';
    for(let i = 0;i < movie.length; i++){
        let movieDisplaySearchList = document.createElement('div');
        movieDisplaySearchList.dataset.id = movie[i].imdbID;
        if(movie[i].Poster !== 'N/A'){
            moviePoster = movie[i].Poster
        }
        else {
            moviePoster = "image-not-found.png"
            // console.log(movieList)
        }
        movieDisplaySearchList.classList.add('search-list');
        movieDisplaySearchList.innerHTML =
            `<div class="search-thumbnail">
                 <img src=${moviePoster}>
            </div>
            <div class="search-item-info">
                 <h4>${movie[i].Title}</h4>
            </div>`
        movieSearchList.appendChild(movieDisplaySearchList);
    }
    loadMovieDetail()
}

// Load Movie Detail
const loadMovieDetail = function(){
    const movieSingle = movieSearchList.querySelectorAll('.search-list')
    // console.log(movieSingle)
    // console.log(movieSearchList)
    movieSingle.forEach(movie => {
        movie.addEventListener('click',async () =>{
            // console.log(movie.dataset.id)
            renderSpinner(overlay)
            movieSearchList.classList.add('hidden')
            movieSearchBox.value = '';
            body.classList.add('overlay-active');
            const data = await fetch(`${API_URL}?apikey=${apiKey}&i=${movie.dataset.id}`)
                .then(res => res.json())
            // console.log(data)
            displayMovieDetail(data)
        })
    })
}
// Display movie detail
const displayMovieDetail = function (movie){
    overlay.innerHTML =
        ` <div class="movie-detail-container">
            <div class="movie-detail">
                <div class="left-content">
                    <div class="movie-image">
                        <img alt="movie-image" src="${(movie.Poster !== "N/A") ? movie.Poster : "image-not-found.png"}">
                    </div>
                </div>
                <div class="right-content">
                    <div class="close-detail-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div class="movie-information">
                        <div class="movie-title">
                            <h2>${movie.Title}</h2>
                        </div>
                        <div class="movie-review">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            ${movie.imdbRating}
                        </div>
                        <div class="movie-description">
                            ${movie.Plot}
                        </div>
                        <div class="movie-information-group">
                            <div class="detail movie-director">
                                <h4>Director:</h4>
                                <h4>${movie.Director}</h4>
                            </div>
                            <div class="detail movie-actor">
                                <h4>Actors:</h4>
                                <h4>${movie.Actors}</h4>
                            </div>
                            <div class="detail movie-genre">
                                <h4>Tags:</h4>
                                <h4>${movie.Genre}</h4>
                            </div>
                            <div class="detail movie-duration">
                                <h4>Runtime:</h4>
                                <h4>${movie.Runtime}</h4>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>`
}

const popularMovie = [2382320,7286456,1502397,1798709,7550000]

// Display Movie Popular
export const displayMoviePopular = async function(){

    for(let i = 0; i < popularMovie.length; i++){
        const movieSingle = document.createElement('div')
        movieSingle.classList.add('movie-single')
        const data = await fetch(`${API_URL}?apikey=${apiKey}&i=tt${popularMovie[i]}`)
            .then(res => res.json())
        movieSingle.innerHTML =
            `<img alt="Film image" src=${data.Poster}>
            <div class="title">
                <p>${data.Title}</p>
            </div>
            <div class="review">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                ${data.imdbRating}
            </div>`
        movieList.appendChild(movieSingle)
        movieSingle.addEventListener('click',() =>{
            renderSpinner(overlay)
            body.classList.add('overlay-active')
            displayMovieDetail(data)
        })
    }
}
// displayMoviePopular()


window.addEventListener('click', e =>{
    if(e.target.closest('.w-6')){
        body.classList.remove('overlay-active')
    }
})

window.addEventListener('click',e =>{
    if(e.target.closest('.search-box')){
        movieSearchList.classList.remove('hidden')
    }
    else movieSearchList.classList.add('hidden')
})

