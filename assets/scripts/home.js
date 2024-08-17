/// Toggle mobile menu and change menu icon to cross
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
    this.classList.toggle('active');
});


// Fix the navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#E0E1E2';
    } else {
        navbar.style.backgroundColor = '#F5F6F7';
    }
});
