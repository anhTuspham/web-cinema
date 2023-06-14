import {API_URL} from "../config.js";
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.OMDB_API_KEY

const movieSearchBox = document.getElementById('search-box');
const movieSearchList = document.getElementById('search-list-container')

// Load movie data
const loadMovieData = async function(searchItem){
    try{
        let response = await fetch(`${API_URL}?apikey=${apiKey}&s=${searchItem}`);
        if(!response.ok){
            throw 'Something went wrong'
        }
        let data = await response.json();
        // displayMovieList(data.Search)
        // console.log(data)
        if(data.Response === "True")
            displayMovieList(data.Search)
    }
    catch (err){
        console.error(err)
    }
}

// Find movie
const searchMovieData = function (){
    movieSearchBox.addEventListener('keyup',function (){
        let searchItem = (movieSearchBox.value).trim();
        if (searchItem.length > 0){
            movieSearchList.classList.remove('hidden');
            loadMovieData(searchItem);
        }
        else movieSearchList.classList.add('hidden')

    })
}
searchMovieData()

// Display movie list

const displayMovieList = function (movie){
    let moviePoster;
    movieSearchList.innerHTML = '';
    for(let i = 0;i < movie.length; i++){
        let movieList = document.createElement('div');
        movieList.dataset.id = movie[i].imdbID;
        if(movie[i].Poster !== 'N/A'){
            moviePoster = movie[i].Poster
        }
        else {
            moviePoster = "image-not-found.png"
            // console.log(movieList)
        }
        movieList.classList.add('search-list');
        movieList.innerHTML =
            `<div class="search-thumbnail">
                 <img src=${moviePoster}>
            </div>
            <div class="search-item-info">
                 <h4>${movie[i].Title}</h4>
            </div>`

        movieSearchList.appendChild(movieList);
    }
}

// Load Movie Detail



window.addEventListener('click',e =>{
    if(e.target.closest('.search-container')){
        movieSearchList.classList.remove('hidden')
    }
    else movieSearchList.classList.add('hidden')
})