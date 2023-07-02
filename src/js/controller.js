import * as model from './model.js'
import './view/menu-bar.js'
import './view/category.js'
import './view/search-movie.js'
import './view/remind-box.js'
import {displayMoviePopular, renderSpinner, searchMovieData} from "./view/search-movie.js";
import {showPassword, toggleLoginForm} from "./view/log.js";


const dotenv = require('dotenv');
dotenv.config();


const init = function (){
    toggleLoginForm()
    showPassword()
    searchMovieData();
    displayMoviePopular();
}

init();
