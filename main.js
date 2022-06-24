const navLinks = document.querySelector(".nav-links");
const menuHamburger = document.querySelector(".hamburger");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle("mobile-nav");
})