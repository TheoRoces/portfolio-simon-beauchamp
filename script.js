// MenuMobile

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu1').toggleClass('isOpen')
    });
});