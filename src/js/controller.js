import * as model from './model.js'
import './view/menu-bar.js'
import './view/category.js'
import './view/search-movie.js'
import './view/remind-box.js'
import './view/log.js'
import {displayMoviePopular, renderSpinner, searchMovieData} from "./view/search-movie.js";


const dotenv = require('dotenv');
dotenv.config();

const init = function (){
    searchMovieData();
    displayMoviePopular();
}

init();
