
const navMobile = document.querySelector(".nav-mobile");
const menuHamburger = document.querySelector(".fa-bars");
const iconoCerrar = document.querySelector(".fa-x");
let navLinksMobile = document.querySelectorAll(".nav-link-mobile");



menuHamburger.addEventListener("click", showNavMobile);

function showNavMobile(){
    navMobile.classList.remove("inactive");
}

iconoCerrar.addEventListener("click", cerrarMenu);

function cerrarMenu(){
    navMobile.classList.add("inactive");
}

navLinksMobile.forEach(
    function(navLinkMobile) {
    navLinkMobile.addEventListener("click", cerrarMenu);
    }
);