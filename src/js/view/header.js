const searchListContainer = document.querySelector('.search-list-container');
const searchContainer = document.querySelector('.search-container');
const desktopBtns = document.querySelectorAll('.desktop-btn');
const mobileBtns = document.querySelectorAll('.mobile-btn');
const headerBtnContainer = document.querySelector('.header-btn-container');
const logo = document.querySelector('.logo-part');
const searchBtn = document.querySelector('.search-btn');
const searchMobile = document.getElementById('search-mobile')
const searchBtnGlass = document.querySelector('.search-btn.glass');
const searchBtnMicro = document.querySelector('.search-btn.micro')
const searchInput = document.querySelector('.search__input')
const showSearchInputMobile = () =>{
    if(window.screen.width <= 1024) {
        searchContainer.style.display = 'none';
        searchMobile.addEventListener('click', () => {
            searchContainer.style.display = 'block'
            logo.style.display = 'none';
            headerBtnContainer.style.display = 'none';
            searchContainer.style.width = '100%';
            searchListContainer.style.width = `${searchContainer.offsetWidth}px`;

        })
        searchBtnGlass.addEventListener('click', () => {
            searchContainer.style.display = 'none';
            logo.style.display = 'block';
            headerBtnContainer.style.display = 'flex';
            searchContainer.style.width = '50%';
        })
    }
    else{
        searchContainer.style.display = 'block'
    }
}
const switchDesktopMobile = () =>{
    desktopBtns.forEach(desktopBtn =>{
        if(window.screen.width < 1024){
            desktopBtn.style.display = 'none'
        }
        else {
            desktopBtn.style.display = 'block'
        }
    })
    mobileBtns.forEach(mobileBtn =>{
        if(window.screen.width < 1024){
            mobileBtn.style.display = 'block'
        }
        else {
            mobileBtn.style.display = 'none'
        }
    })
}
window.addEventListener('resize', ()=>{
    searchListContainer.style.width = `${searchContainer.offsetWidth}px`;
    switchDesktopMobile()
    showSearchInputMobile()
})
searchListContainer.style.width = `${searchContainer.offsetWidth}px`;
switchDesktopMobile()
showSearchInputMobile()



