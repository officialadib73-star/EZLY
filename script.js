/* =========================
   EZLY — IMAGE SLIDER
   ========================= */

let currentImage = 0;

const images = [
    "collection-1.jpg",
    "collection-2.jpg"
];


function showImage(index) {

    currentImage = index;

    document.getElementById("slider-image").src = images[currentImage];

    const dots = document.querySelectorAll(".dot");

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    dots[currentImage].classList.add("active");
}


function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage(currentImage);
}


function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage(currentImage);
}