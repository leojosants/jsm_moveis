let DOM_closer = document.querySelector('#id-closer');
let DOM_navbar = document.querySelector('.c-navbar');
let DOM_cart = document.querySelector('.c-shopping-cart');
let DOM_loginForm = document.querySelector('.c-login-form');

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