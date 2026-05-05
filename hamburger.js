const burger = document.querySelector('.burger');
console.log(burger);
const navLinks = document.querySelector('.nav-links');
console.log(navLinks);

burger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
})