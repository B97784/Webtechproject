/**This for the header images */




/*This is for the image gallery */
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentSlide = 0;
    const imagesPerSlide = 5; // Number of images per slide
    const totalSlides = Math.ceil(carousel.querySelectorAll(".image-thumb").length / imagesPerSlide); // Calculate total slides (rounded up)

    leftArrow.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Jump to last slide on reaching the beginning
        }
        moveCarousel();
    });

    rightArrow.addEventListener("click", () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Jump to first slide on reaching the end
        }
        moveCarousel();
    });

    function moveCarousel() {
        const translateValue = -currentSlide * (imagesPerSlide * 200); // Assuming each image is 200px wide
        carousel.style.transform = `translateX(${translateValue}px)`;

    }
});
