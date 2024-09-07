const sandwhich = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

function showLinks() {
    navLinks.classList.toggle('active');
}

sandwhich.addEventListener('click', () => {
    showLinks();
})