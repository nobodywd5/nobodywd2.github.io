let mainNav = document.getElementById('js-nav');
let navToggle = document.getElementById('js-toggle');

navToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('js-active');
});