import * as model from './model.js'
import './view/menu-bar.js'
import './view/category.js'

const controlFilm = async function(){
    await model.film();
}

const init = function (){
    controlFilm();
}

init();