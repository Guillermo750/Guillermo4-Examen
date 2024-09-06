const boton = document.getElementById('boton') //ESTO CREARÁ UNA VARIABLE Y VA A LLAMAR AL ID QUE ESTÁ DEFINIDO EN EL BUTTON
const menu = document.getElementById('menu') //ESTO CREARÁ UNA VARIABLE Y VA A LLAMAR AL ID QUE ESTÁ DEFINIDO EN EL MENÚ

/* FUNCIÓN DEL BOTÓN */
boton.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

/* FUNCIÓN DEL CAROUSEL CON LAS FLECHAS */
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('#carousel > div');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.getElementById('carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
    restartAutoSlide();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    restartAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', startAutoSlide);