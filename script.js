
const navMobile = document.querySelector(".nav-mobile");
const menuHamburger = document.querySelector(".fa-bars");
const iconoCerrar = document.querySelector(".fa-x");
let navLinksMobile = document.querySelectorAll(".nav-link-mobile");
const main = document.querySelector(".content"); 
const footer = document.querySelector(".footer"); 


menuHamburger.addEventListener("click", showNavMobile);

function showNavMobile(){
    navMobile.classList.remove("inactive");
    main.classList.add("inactive");
    footer.classList.add("inactive");
    menuHamburger.classList.add("inactive");
}

iconoCerrar.addEventListener("click", cerrarMenu);

function cerrarMenu(){
    navMobile.classList.add("inactive");
    main.classList.remove("inactive");
    footer.classList.remove("inactive");
    menuHamburger.classList.remove("inactive");
}

navLinksMobile.forEach(
    function(navLinkMobile) {
    navLinkMobile.addEventListener("click", cerrarMenu);
    }
);