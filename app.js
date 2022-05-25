let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu__icon');
let menuClose = document.querySelector('.menu__close');
let opacity = document.querySelector('.opacity');

let arrowSublist = document.querySelector('.arrow-sublist');
let menuSublist = document.querySelector('.menu__sub-list');

menuIcon.addEventListener('click', function() {
    menu.classList.add('active');
    menuClose.classList.add('active');
    opacity.classList.add('active');
})

menuClose.addEventListener('click', function() {
    menu.classList.remove('active');
    menuClose.classList.remove('active');
    opacity.classList.remove('active');
})

arrowSublist.addEventListener('mouseover', function() {
    menuSublist.classList.add('active');
})

