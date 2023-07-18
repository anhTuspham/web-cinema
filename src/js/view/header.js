const container = document.querySelector('.container');
const searchListContainer = document.querySelector('.search-list-container');
const searchContainer = document.querySelector('.search-container');
const logo = document.querySelector('.logo-part');
const searchMobile = document.getElementById('search-mobile')
const searchBtnGlass = document.querySelector('.search-btn.glass');
const menuMobile = document.getElementById('menu-mobile')
const header = document.querySelector('.header')
document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px')



searchMobile.addEventListener('click', () =>{
    header.classList.add('search-mobile');
    container.classList.remove('menu-mobile')
    searchListContainer.style.width = `${searchContainer.offsetWidth}px`;
})
searchBtnGlass.addEventListener('click',() =>{
    header.classList.remove('search-mobile')
})
menuMobile.addEventListener('click',() =>{
    container.classList.toggle('menu-mobile')
})

window.addEventListener('resize', ()=>{
    if(window.screen.width <= 1024){
        searchContainer.style.width = '100%';
        searchListContainer.style.width = `${searchContainer.offsetWidth}px`;
    }
    else {
        searchContainer.style.width = '50%';
        searchListContainer.style.width = `${searchContainer.offsetWidth}px`;
    }
})
searchListContainer.style.width = `${searchContainer.offsetWidth}px`;




