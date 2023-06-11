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
        console.log(data.Search)
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

window.addEventListener('click',e =>{
    if(e.target.closest('.search-container')){
        movieSearchList.classList.remove('hidden')
    }
    else movieSearchList.classList.add('hidden')
})