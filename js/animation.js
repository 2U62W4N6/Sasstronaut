const stars__small = document.getElementsByClassName("main__smallstars")
const stars__medium = document.getElementsByClassName("main__mediumstars")
const stars__big = document.getElementsByClassName("main__bigstars")
const animation_small = getComputedStyle(stars__small[0]).animation
const animation_medium = getComputedStyle(stars__medium[0]).animation
const animation_big = getComputedStyle(stars__big[0]).animation


/* Logo-Event */
function HoverIn(){
    stars__small[0].style.animation = 'starflow 2s ease-out infinite'
    stars__medium[0].style.animation = 'starflow 5s ease-out infinite'
    stars__big[0].style.animation = 'starflow 10s ease-out infinite'
}

function HoverOut(){
    stars__small[0].style.animation = animation_small;
    stars__medium[0].style.animation = animation_medium;
    stars__big[0].style.animation = animation_big;
}

/* Scroll-Event */
function Scroll(){
    stars__small[0].style.animation = 'starflow 2s ease-out infinite'
    stars__medium[0].style.animation = 'starflow 5s ease-out infinite'
    stars__big[0].style.animation = 'starflow 10s ease-out infinite'

    setTimeout(function(){
        stars__small[0].style.animation = animation_small;
        stars__medium[0].style.animation = animation_medium;
        stars__big[0].style.animation = animation_big;

    }, 1000);
}