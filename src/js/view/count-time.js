'use strict'
let countToDate = new Date().setDate(new Date().getDate() + 2);
let previousTime;

setInterval(() =>{
    const currentDate = new Date();
    const betweenPreviousTime = Math.ceil((countToDate - currentDate)/1000);
    if(previousTime !== betweenPreviousTime){
        flipAllCard(betweenPreviousTime)
    }
    previousTime = betweenPreviousTime;
}, 250)

function flipAllCard(timer){
    const days = Math.floor(timer / 86400) ;
    const hours = Math.floor(timer / 3600) % 24;
    const minutes = Math.floor((timer / 60) % 60);

    flip(document.querySelector('[data-days-ten]'),Math.floor(days / 10))
    flip(document.querySelector('[data-days-one]'),days % 10)
    flip(document.querySelector('[data-hours-ten]'),Math.floor(hours / 10))
    flip(document.querySelector('[data-hours-one]'),hours % 10)
    flip(document.querySelector('[data-minutes-ten]'),Math.floor(minutes / 10))
    flip(document.querySelector('[data-minutes-one]'),minutes % 10)
    // console.log(days,hours,minutes)
}

function flip(flipCard,newNumber){
    flipCard.classList.add("flip");
    const topHalf = flipCard.querySelector('.top');
    const startNumber = parseInt(topHalf.textContent);
    if(newNumber === startNumber) return

    const botHalf = flipCard.querySelector('.bottom');
    const topFlip = document.createElement('div');
    const botFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    botFlip.classList.add('bot-flip');

    topHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    botHalf.textContent = startNumber;
    botFlip.textContent = startNumber;

    topFlip.addEventListener('animationstart', () =>{
        topHalf.textContent = newNumber;
    })
    topFlip.addEventListener('animationend',()=>{
        topFlip.remove();
    })
    botFlip.addEventListener('animationstart',() =>{
        botFlip.textContent = newNumber;
    })
    botFlip.addEventListener('animationend', () => {
        botHalf.textContent = newNumber;
        botFlip.remove();
    })
    flipCard.append(topFlip,botFlip);
}
