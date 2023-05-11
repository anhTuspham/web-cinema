import * as model from './model.js'

export const wrapper = function(elementItem){
    const wraps = document.querySelectorAll(elementItem);
    wraps.forEach(wrap =>{
        wrap.addEventListener('click',e => {
            e.preventDefault();
            wraps.forEach(container =>{
                container.classList.remove('selected');
            });
            wrap.classList.add('selected');
        })
    })
}

const controlFilm = async function(){
    await model.film();
}
controlFilm();