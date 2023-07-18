import {API_URL} from "../config.js";
const dotenv = require('dotenv')
dotenv.config();
const apikey = process.env.OMDB_API_KEY;

const topMovieDetail = document.querySelector('.top-movie-detail')

const displayTopSearchMovie = async () =>{
    const movie = await fetch(`${API_URL}?apikey=${apikey}&i=tt10366206`)
        .then(res => res.json());
    // console.log(movie)

    topMovieDetail.innerHTML =
        `<div class="top-movie-image">
            <img alt="image movie" src="${movie.Poster}">
        </div>
        <div class="top-movie-information">
            <div class="movie-title">
                <h2>${movie.Title}</h2>
            </div>
            <div class="top-movie-review">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                ${movie.imdbRating}
            </div>
            <div class="top-movie-description">
                ${movie.Plot}
            </div>
            <div class="top-movie-information-group">
                <div class="detail movie-director">
                    <h4>Director:</h4>
                    <h4>${movie.Director}</h4>
                </div>
                <div class="detail top-movie-actor">
                    <h4>Actors:</h4>
                    <h4>${movie.Actors}</h4>
                </div>
                <div class="detail top-movie-genre">
                    <h4>Tags:</h4>
                    <h4>${movie.Genre}</h4>
                </div>
                <div class="detail top-movie-duration">
                    <h4>Runtime:</h4>
                    <h4>${movie.Runtime}</h4>
                </div>
            </div>
        </div>`
}
displayTopSearchMovie()
