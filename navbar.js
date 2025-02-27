const navbar = document.querySelector('.floating-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        navbar.style.display = 'flex'; // First set display to flex
        setTimeout(() => {
            navbar.classList.add('scrolled'); // Then add the scrolled class
        }, 10);
    } else {
        navbar.classList.remove('scrolled');
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 300); // Wait for transition to complete
    }
});