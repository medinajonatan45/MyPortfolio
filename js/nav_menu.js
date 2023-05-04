// Variables
const btn = document.querySelector(".header__button");
const nav = document.querySelector(".header__nav");

// Menu hamburguesa
btn.addEventListener("click", function(){
    nav.classList.toggle('activo');
})

// Animacion header
window.addEventListener("scroll", function(){
    const screen = document.documentElement.scrollTop;    
    const header = document.querySelector(".header__section-nav");

    if(screen >50){
        header.classList.add('activo');
    }
    else{
        header.classList.remove('activo');
    }
});

