let hamburger = document.getElementById('hamburger');
let navUl = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});