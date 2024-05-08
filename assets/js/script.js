let DOM_closer = document.querySelector('#id-closer');
let DOM_navbar = document.querySelector('.c-navbar');
let DOM_cart = document.querySelector('.c-shopping-cart');
let DOM_loginForm = document.querySelector('.c-login-form');
let DOM_searchForm = document.querySelector('.c-header .c-search-form');
let DOM_slides = document.querySelectorAll('.c-home .c-slides-container .c-slide');
let index = 0;

DOM_closer.onclick = () => {
    DOM_closer.style.display = 'none';
    DOM_navbar.classList.remove('c-active');
    DOM_cart.classList.remove('c-active');
    DOM_loginForm.classList.remove('c-active');
}

document.querySelector('#id-menu-btn').onclick = () => {
    DOM_closer.style.display = 'block';
    DOM_navbar.classList.toggle('c-active');
};

document.querySelector('#id-cart-btn').onclick = () => {
    DOM_closer.style.display = 'block';
    DOM_cart.classList.toggle('c-active');
};

document.querySelector('#id-login-btn').onclick = () => {
    DOM_closer.style.display = 'block';
    DOM_loginForm.classList.toggle('c-active');
};

// analisar
document.querySelector('#id-search-btn').onclick = () => {
    alert()
    DOM_searchForm.classList.toggle('c-active');
};

window.onscroll = () => {
    DOM_searchForm.classList.remove('c-active');
};

function next() {
    DOM_slides[index].classList.remove('c-active');
    index = (index + 1) % DOM_slides.length;
    DOM_slides[index].classList.add('c-active');
}

function prev() {
    DOM_slides[index].classList.remove('c-active');
    index = (index - 1 + DOM_slides.length) % DOM_slides.length;
    DOM_slides[index].classList.add('c-active');
}