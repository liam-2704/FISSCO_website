document.addEventListener("DOMContentLoaded", function() {
    let allSlideshows = document.querySelectorAll(".slideshow-container");
    
    allSlideshows.forEach(function(container) {
        container.slideIndex = 1; 
        showSlides(container, container.slideIndex);
    });
});

function plusSlides(n) {
    let button = window.event.target; 
    let container = button.closest(".slideshow-container"); 
    
    container.slideIndex += n;
    showSlides(container, container.slideIndex);
}

function showSlides(container, n) {
    let slides = container.getElementsByClassName("mySlides");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) { container.slideIndex = 1; }
    if (n < 1) { container.slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[container.slideIndex - 1].style.display = "block";
}