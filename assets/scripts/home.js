// Toggle mobile menu and change menu icon to cross
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.header-menu').classList.toggle('active');
    this.classList.toggle('active');
});

// Handle the dropdown menu toggle and arrow direction
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    const dropdownButton = dropdown.querySelector('.dropbtn');
    const submenu = dropdown.querySelector('.dropdown-content');
    const arrow = dropdownButton.querySelector('.arrow');    

    // Change arrow direction on hover (optional for desktop view)
    dropdown.addEventListener('mouseenter', function () {
        if (!submenu.classList.contains('active')) {
            arrow.innerHTML = '&#9650;'; // Upward arrow on hover
        }
    });

    dropdown.addEventListener('mouseleave', function () {
        if (!submenu.classList.contains('active')) {
            arrow.innerHTML = '&#9660;'; // Downward arrow when not hovered
        }
    });
});

// Fix the navbar background color on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#E0E1E2';
    } else {
        navbar.style.backgroundColor = '#F5F6F7';
    }
});