const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i");

menuBtn.addEventListener("click", (e)=>{
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");

});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "60px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal("header form", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".service_card", {
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".experience_content .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".experience_content p", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".experience_btn", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".experience_stats", {
    ...scrollRevealOption,
    delay:1500,
});


const swiper = new Swiper(".swiper", {
   slidesPerView: 2,
   spaceBetween: 20,
   loop: true,
});

ScrollReveal().reveal(".subscribe .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".subscribe form", {
    ...scrollRevealOption,
    delay:500,
});