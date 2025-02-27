const navbar = document.querySelector('.floating-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

